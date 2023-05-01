import { Request, Response, NextFunction } from 'express'
import RoomListing from '../models/RoolListings'

const RoomListingsContoller = {
  async createListings(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = 1
      console.log(req.user)
      // TODO: replace with the authenticated user
      const { description, type, rooms, bathrooms, price, address, images } =
        req.body
      const listings = await RoomListing.create(
        description,
        type,
        rooms,
        bathrooms,
        price,
        address,
        images,
        userId
      )
      res.status(201).json(listings)
    } catch (err) {
      next(err)
    }
  },
  async getAllListings(_: Request, res: Response, next: NextFunction) {
    try {
      const listings = await RoomListing.getAllListings()
      res.json(listings)
    } catch (err) {
      next(err)
    }
  },
}

export default RoomListingsContoller
