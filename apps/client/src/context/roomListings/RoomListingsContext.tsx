import { createContext, useReducer, ReactElement } from 'react'
import roomReducer from './RoomReducer'
import axios from 'axios'
import {Room, RoomActionKind, User } from '../../types/customTypes.js'

const RoomContext = createContext(null)

const BASE_URL = import.meta.env.VITE_BASE_URL

type RoomProviderProps = {
  children: ReactElement
}

export const RoomProvider = ({ children }: RoomProviderProps) => {
  const initialState = {
    rooms: [],
  }

  const [state, dispatch] = useReducer(roomReducer, initialState)
  const getRoomListings = async () => {
    const res = await axios.get(`${BASE_URL}/roomlistings`)
    dispatch({
      type: RoomActionKind.GETALL,
      payload: res.data,
    })
  }

  return (
    <RoomContext.Provider
      value={{
        rooms: state.rooms,
        getRoomListings,
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}
