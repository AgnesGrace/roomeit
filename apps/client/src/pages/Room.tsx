import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { RoomState } from '../types/customTypes'
import { aosInit } from '../libs/aos'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_BASE_URL

const Room: React.FC<RoomState> = () => {
  const [uniqueRoom, setUniqueRoom] = useState({})
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [map, setMap] = useState<any>(null)
  let params = useParams()

  const getUniqueListing = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/roomlistings/${params.id}`)
      setUniqueRoom(res.data)

      // Get the latitude and longitude for the room's address using a geocoding service
      const address = uniqueRoom.address
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1`
      )
      const { lat, lon } = response.data[0]
      setLatitude(lat)
      setLongitude(lon)
    } catch (err) {
      toast.error('Something went wrong')
    }
  }

  useEffect(() => {
    getUniqueListing()
    aosInit()

    if (latitude && longitude) {
      // Create the map
      const map = L.map('mapid').setView([latitude, longitude], 13)

      // Add the tile layer (you can use different tile providers)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map)

      // Add a marker for the room's location
      const marker = L.marker([latitude, longitude]).addTo(map)

      // Save the map to state
      setMap(map)
    }
  }, [latitude, longitude])

  return (
    <>
      <main className="width-[90%] m-auto">
        {Object.keys(uniqueRoom).length > 0 && (
          <div>
            <div className="h-[60%]" data-aos="zoom-in-down">
              <img
                src={uniqueRoom.images[0]}
                className="w-full object-cover h-80"
              />
            </div>
            <div className="m-4">
              <h1>{uniqueRoom.description} </h1>
              <div className="flex w-full justify-between ">
                <div className="indicator mt-4">
                  <span className="indicator-item badge badge-secondary">
                    {uniqueRoom.price}
                  </span>
                  <button className="btn">Price</button>
                </div>
                <Link to="/signup" className="btn">
                  Apply
                </Link>
              </div>
            </div>
            <div id="mapid" className="w-full h-80"></div>
          </div>
        )}
      </main>
    </>
  )
}

export default Room
