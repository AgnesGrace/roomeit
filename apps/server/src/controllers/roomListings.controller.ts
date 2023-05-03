import { Request, Response, NextFunction } from 'express'
import RoomListing from '../models/RoolListings'

const RoomListingsContoller = {
  async createListings(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = 1
      // TODO: replace with the authenticated user
      const { description, type, rooms, bathrooms, price, address, images } =
        req.body

      //to fix in the future to add more than 1 image
      const listImages = [images]
      console.log('images -->', listImages)
      const listings = await RoomListing.create(
        description,
        type,
        parseInt(rooms),
        parseInt(bathrooms),
        parseInt(price),
        address,
        listImages,
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
  async getUniqueListings(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
      const listings = await RoomListing.findRoomById(parseInt(id))
      res.json(listings)
    } catch (err) {
      next(err)
    }
  },
  async deleteRoomListings(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.id)
    try {
      const id = req.params.id
      console.log(id)
      if (id === null) {
        throw new Error('Listing not found')
      }

      const listing = await RoomListing.deleteListings(parseInt(id))
      res.json({ message: 'user deleted successfully', data: listing })
    } catch (err) {
      next(err)
    }
  },
}

export default RoomListingsContoller
