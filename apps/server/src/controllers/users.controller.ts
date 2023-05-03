import { Request, Response, NextFunction } from 'express'

import bcrypt from 'bcrypt'
import atob from 'atob'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../lib/Constant'

import User from '../models/Users'

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const UsersController = {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const user = await User.findUserById(parseInt(id))
      if (user == null) {
        throw new Error('User does not exist')
      }
      res.json(user)
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  // add user
  async addUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, username, email, password } = req.body
      if (
        name === undefined ||
        username === undefined ||
        password === undefined ||
        password === undefined ||
        email === undefined
      ) {
        throw new Error('Missing Parameters')
      }
      const hashedPassword = bcrypt.hashSync(password, salt)
      const user = await User.create(name, username, email, hashedPassword)
      res.status(201).json(user)
    } catch (err) {
      next(err)
    }
  },
  // delete user
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id)
      if (id === null) {
        throw new Error('User not found')
      }
      const user = await User.deleteUser(id)
      res.json({ message: 'user deleted successfully', data: user })
    } catch (err) {
      next(err)
    }
  },

  // authenticated user
  async getAuthenticatedUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(req.user)
    } catch (err) {
      next(err)
    }
  },
  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const rawAuth = req.headers.authorization?.split(' ')[1]

      if (!rawAuth) throw new Error('no auth headers')

      const [username, password] = atob(rawAuth).split(':')
      const user = await User.findByUsername(username)

      if (!user?.password) {
        throw new Error('no password storaged in the database')
      }

      const correctPassword = bcrypt.compareSync(password, user.password)

      if (!correctPassword) {
        throw new Error('Incorrect password')
      }

      if (!JWT_SECRET) {
        throw new Error('missing JWT_SECRET')
      }
      const token = jwt.sign({ sub: user.id, user }, JWT_SECRET, {
        expiresIn: '20mins',
      })

      res
        .status(200)
        .json({ id: user.id, user: user.username, email: user.email, token })
    } catch (e) {
      next(e)
    }
  },
}

export default UsersController
