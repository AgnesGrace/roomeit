import prisma from '../lib/prisma'
import RoomListing from './RoolListings'
class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public password: string,
    public roomListings?: Array<Partial<RoomListing>>
  ) {}
  static async create(
    name: string,
    username: string,
    email: string,
    password: string
  ): Promise<User> {
    const { id } = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
      },
    })
    return new User(id, name, email, username, password)
  }
  static async findUserById(id: number): Promise<User | null> {
    const userRecord = await prisma.user.findUnique({
      where: { id },
      include: {
        roomListings: true,
      },
    })
    if (userRecord === null) {
      throw new Error('No users in the database')
    }
    const { name, username, email, password, roomListings } = userRecord
    return new User(id, name, username, email, password, roomListings)
  }
  static async update(
    id: number,
    updatedName: string,
    updatedUserName: string,
    updatedEmail: string
  ) {
    const { name, username, email } = await prisma.user.update({
      where: { id },
      data: {
        name: updatedName,
        username: updatedUserName,
        email: updatedEmail,
      },
    })
    return new User(id, name, username, email, '')
  }
  static async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    })
  }
  static async findByUsername(username: string): Promise<User | null> {
    const userRecord = await prisma.user.findUnique({
      where: { username },
      include: {
        roomListings: true,
      },
    })
    if (userRecord === null) {
      throw new Error('User does not exist.')
    }
    const { id, name, email, password, roomListings } = userRecord
    return new User(id, name, username, email, password, roomListings)
  }
}
export default User
