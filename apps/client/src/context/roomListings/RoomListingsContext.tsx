import { createContext, useReducer, ReactElement } from 'react'
import roomReducer from './RoomReducer'
import axios from 'axios'
import { Room, RoomActionKind, Form, RoomUnique } from '../../types/customTypes'
import { addRoomListings } from '../../libs/apiClients'

type HandleAddRoomListings = (formData: Form, image: string) => Promise<void>

const BASE_URL = import.meta.env.VITE_BASE_URL
interface RoomContextType {
  rooms: Room[]
  // room: RoomUnique[]
  getRoomListings: () => Promise<void>
  // getUniqueListing: (id: string) => Promise<void>

  handleAddRoomListings: HandleAddRoomListings
}
const RoomContext = createContext<RoomContextType>({
  rooms: [],
  // room: [],
  getRoomListings: async () => {},
  // getUniqueListing: async () => {},
  handleAddRoomListings: async () => {},
})

type RoomProviderProps = {
  children: ReactElement
}

export const RoomProvider = ({ children }: RoomProviderProps) => {
  const initialState = {
    rooms: [],
    // room: {},
  }

  const [state, dispatch] = useReducer(roomReducer, initialState)

  const getRoomListings = async () => {
    const res = await axios.get(`${BASE_URL}/roomlistings`)
    dispatch({
      type: RoomActionKind.GETALL,
      payload: res.data,
    })
  }
  // const getUniqueListing = async (id: string) => {
  //   const res = await axios.get(`${BASE_URL}/roomlistings/${id}`)
  //   dispatch({
  //     type: RoomActionKind.GETSINGLE,
  //     payload: res.data,
  //   })
  // }

  const handleAddRoomListings = async (formData: Form, image: string) => {
    const newListings = await addRoomListings(formData, image)
    dispatch({
      type: RoomActionKind.ADDROOM,
      payload: newListings,
    })
  }

  return (
    <RoomContext.Provider
      value={{
        rooms: state.rooms,
        getRoomListings,
        // getUniqueListing,
        handleAddRoomListings,
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}
export default RoomContext
