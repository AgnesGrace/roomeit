import { RoomAction, RoomState } from '../../types/customTypes'

const roomReducer = (state: RoomState, action: RoomAction) => {
  switch (action.type) {
    case 'GET_LISTINGS':
      return {
        ...state,
        rooms: action.payload,
      }
    // case 'GET_LISTING':
    //   return {
    //     ...state,
    //     room: action.payload,
    //   }
    case 'ADD_LISTINGS':
      return {
        ...state,
        rooms: action.payload,
        ...state.rooms,
      }

    default:
      return state
  }
}

export default roomReducer
