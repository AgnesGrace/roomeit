import blue_house from '../assets/images/abruzzo.jpeg'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'

import { aosInit } from '../libs/aos.js'
import RoomListings from '../components/RoomListings.js'
import Search from './Search.js'
import RoomContext from '../context/roomListings/RoomListingsContext'

const MainRoomeit: React.FC = () => {
  const { getRoomListings } = useContext(RoomContext)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    aosInit()
    getRoomListings()
  }, [])

  return (
    <>
      <header className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full" data-aos="fade-down" data-aos-easing="linear">
            {' '}
            <img
              src={blue_house}
              className="sm:max-w-sm  rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold" data-aos="fade-right">
              Welcome to L'Aquila
            </h1>
            <p className="py-6">
              Welcome to L'Aquila, The home of beautiful people. Whether you're
              an international student, a local student, or just looking for a
              change of scenery, we're here to help you find the perfect place
              to call home. Our website offers a wide range of listings for
              rooms of all types and budgets, so you're sure to find something
              that suits your needs. We're committed to making your search as
              easy and stress-free as possible, so feel free to browse our
              listings and contact us with any questions you may have. Thank you
              for choosing our Find a Room website!
            </p>
            <div className="flex justify-between">
              <button className="btn btn-ghost">
                <Link to="/search-options">Explore</Link>
              </button>
              <button className="btn btn-ghost">
                <Link to="/addlistings">Add Room</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="mt-4 ">
        <div className="hero">{!showSearch && <RoomListings />}</div>
      </main>
    </>
  )
}

export default MainRoomeit
