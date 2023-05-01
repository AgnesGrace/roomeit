import express from 'express'

import UsersController from './controllers/users.controller'
import RoomListingsContoller from './controllers/roomListings.controller'
import roomeitMiddleware from './middleware/roomeitJwt'
const router = express.Router()

//users routes
router.get('/users/me', roomeitMiddleware, UsersController.getAuthenticatedUser)
router.get('/users/:id', UsersController.getUsers)
router.post('/users', UsersController.addUser)
router.delete('/users/:id', UsersController.deleteUser)
router.get('/login', UsersController.loginUser)

//room listings
router.post('/roomlistings', RoomListingsContoller.createListings)
router.get('/roomlistings', RoomListingsContoller.getAllListings)

export default router
