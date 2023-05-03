import React, { useContext, useState } from 'react'
import RoomContext from '../context/roomListings/RoomListingsContext'
import ListingsItem from '../components/ListingsItem'
const Search = () => {
  const { rooms } = useContext(RoomContext)
  const [searchRoom, setSearchRoom] = useState('')

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchRoom(event.target.value)
  }
  console.log(searchRoom)
  const filteredRooms = rooms.filter((room) => {
    return room.address.includes(searchRoom)
  })
  console.log(filteredRooms)

  return (
    <main>
      <div className="hero-content mb-4">
        <input
          type="text"
          value={searchRoom}
          onChange={handleSearchChange}
          placeholder="Type here"
          className="input outline outline-slate-700 w-[80%] lg:w-[90%]"
        />
      </div>
      <div className="hero">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {filteredRooms.length > 0 &&
            filteredRooms.map((room) => (
              <ListingsItem room={room} key={room.id} />
            ))}
        </div>
      </div>
    </main>
  )
}

export default Search
