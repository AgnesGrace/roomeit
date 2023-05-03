import { useState, useEffect } from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { aosInit } from '../libs/aos.js'
import abruzzoImage from '../assets/images/center.jpeg'
import MainRoomeit from './MainRoomeit.js'

const Home: React.FC = () => {
  const [showMain, setShowMain] = useState(false)
  useEffect(() => {
    aosInit()
    window.addEventListener('scroll', handleScroll) // add event listener
    return () => window.removeEventListener('scroll', handleScroll) // remove event listener on unmount
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowMain(true)
    }
  }

  return (
    <>
      {!showMain && (
        <div
          className="hero bg-scroll bg-cover relative bg-center h-screen object-cover bg-blend-darken flex justify-center flex-col items-center z-0"
          style={{ backgroundImage: `url(${abruzzoImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col gap-4 justify-center items-center">
            <h1
              data-aos="fade-right"
              className="text-4xl xl:text-6xl text-white"
            >
              Welcome to Roomeit
            </h1>
            <p
              data-aos="fade-left"
              className="text-xl md:text-4xl xl:text-4xl text-white"
            >
              We are here to make L&apos;Aquila your best City
            </p>
            <span
              data-aos="fade-up"
              className="flex flex-col gap-4 items-center mt-32"
            >
              Scroll down
              <div className="arrow-container mt-8 relative bottom-5 w-12 mx-auto text-center">
                <FaArrowCircleDown size={38} color="fff" />
              </div>
            </span>
          </div>
        </div>
      )}

      {showMain && <MainRoomeit />}
    </>
  )
}

export default Home
