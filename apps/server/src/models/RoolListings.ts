// import prisma from "../lib/prisma";
// import User from "./Users";

import prisma from '../lib/prisma'
import User from './Users'

class RoomListing {
  constructor(
    public id: number,
    public description: string,
    public type: string,
    public rooms: number,
    public bathrooms: number,
    public price: number,
    public address: string,
    public images: string[],
    public user?: Partial<User>
  ) {}

  static async create(
    description: string,
    type: string,
    rooms: number,
    bathrooms: number,
    price: number,
    address: string,
    images: string[],
    userId: number
  ): Promise<RoomListing> {
    const { id, user } = await prisma.roomListing.create({
      data: {
        description,
        type,
        rooms,
        bathrooms,
        price,
        address,
        images: {
          set: images,
        },
        user: {
          connect: { id: userId },
        },
      },
      include: {
        user: true,
      },
    })
    return new RoomListing(
      id,
      description,
      type,
      rooms,
      bathrooms,
      price,
      address,
      images,
      user
    )
  }
  static async getAllListings(): Promise<RoomListing[]> {
    return await prisma.roomListing.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }
}
export default RoomListing
