export type Room = {
  id: number
  createdAt: string
  updatedAt: string
  description: string
  type: string
  rooms: number
  bathrooms: number
  price: number
  address: string
  images: string[]
  userId: number
  user: User
}
export interface RoomUnique {
  id: number
  createdAt: string
  updatedAt: string
  description: string
  type: string
  rooms: number
  bathrooms: number
  price: number
  address: string
  images: string[]
}

export type User = {
  id: number
  name: string
  username: string
  email: string
}

export interface RoomState {
  rooms: RoomUnique
}
export interface RoomAction {
  type: string
  payload: Room[]
}
export enum RoomActionKind {
  GETALL = 'GET_LISTINGS',
  GETSINGLE = 'GET_LISTING',
  ADDROOM = 'ADD_LISTINGS',
}
export interface Form {
  description: string
  type: string
  rooms: number
  bathrooms: number
  price: number
  address: string
}
