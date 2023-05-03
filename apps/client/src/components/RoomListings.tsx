import { useEffect } from 'react'
import { Room } from '../types/customTypes.js'
import moment from 'moment'
import { aosInit } from '../libs/aos.js'

interface RoomListingsProps {
  rooms: Room[]
}

const RoomListings: React.FC<RoomListingsProps> = (props) => {
  const { rooms } = props
  useEffect(() => {
    aosInit()
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {rooms.map((room) => (
          <div
            className=" card w-96 bg-base-100 shadow-xl"
            key={room.id}
            data-aos="zoom-in-down"
          >
            <figure className="px-10 pt-10 ">
              <img src={room.images[0]} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex gap-8 justify-between">
                <div>
                  <h2 className="card-title">{room.type}</h2>
                  <p>{room.description.slice(0, 17) + '...'}</p>
                </div>
                <div className="flex-1">
                  <h2 className="card-title">€{room.price}</h2>
                  <p>{moment(room.createdAt).fromNow()}</p>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn bg-black hover:bg-slate-800">
                  More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default RoomListings
