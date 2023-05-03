import { useEffect, useContext } from 'react'

import { aosInit } from '../libs/aos.js'
import RoomContext from '../context/roomListings/RoomListingsContext.js'
import ListingsItem from './ListingsItem.js'

const RoomListings: React.FC = () => {
  const { rooms } = useContext(RoomContext)
  console.log(Array.isArray(rooms))
  useEffect(() => {
    aosInit()
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {rooms.length > 0 &&
          rooms.map((room) => <ListingsItem key={room.id} room={room} />)}
      </div>
    </>
  )
}

export default RoomListings
