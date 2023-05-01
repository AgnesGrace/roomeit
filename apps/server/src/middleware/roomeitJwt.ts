import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../lib/Constant'
import User from '../models/Users'

function roomeitMiddleware(req: Request, _: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  const authParts = authHeader?.split(' ')
  if (!authParts || authParts[0] !== 'Bearer') {
    throw new Error('Missing Bearer Authentication')
  }
  const token = authParts[1]
  const payload = jwt.verify(token, JWT_SECRET)
  if (typeof payload === 'string' || !('user' in payload)) {
    throw new Error('Invalid token')
  }
  req.user = payload.user as User
  next()
}

export default roomeitMiddleware
