import axios from 'axios'
import { Form } from '../types/customTypes'
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getRoomListings = async () => {
  const res = await axios.get(`${BASE_URL}/roomlistings`)
  return res.data
}

export const addRoomListings = async (formData: Form, image: string) => {
  const res = await axios.post(
    `${BASE_URL}/roomlistings`,
    {
      description: formData.description,
      type: formData.type,
      rooms: formData.rooms,
      bathrooms: formData.bathrooms,
      price: formData.price,
      address: formData.address,
      images: image,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const newListings = res.data
  if (res.status === 400) {
    throw new Error(newListings.message)
  }
  return newListings
}
