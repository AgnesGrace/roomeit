import { Room, RoomAction, RoomState } from '../../types/customTypes'

const roomReducer = (state: RoomState, action: RoomAction) => {
  switch (action.type) {
    case 'GET_LISTINGS':
      return {
        ...state,
        rooms: action.payload,
      }
    default:
      return state
  }
}

export default roomReducer
