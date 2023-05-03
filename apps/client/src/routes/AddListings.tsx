import React, { useState } from 'react'

import { toast } from 'react-toastify'
import { Form } from '../types/customTypes'

interface RoomProp {
  addListings: (formData: Form, image: string) => Promise<void>
}

const AddListings: React.FC<RoomProp> = (props) => {
  console.log(props)
  const [formData, setFormData] = useState({
    description: '',
    type: '',
    rooms: 0,
    bathrooms: 0,
    price: 0,
    address: '',
  })
  const [imageUrl, setImageUrl] = useState('')
  // destructure the formData
  const { description, type, rooms, bathrooms, price, address } = formData

  // handle the image upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string

        setImageUrl(imageUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [(e.target as HTMLInputElement).name]: e.target.value,
    }))
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      console.log(formData)
      await addListings(formData, imageUrl)
    } catch (err) {
      console.log(err)
      toast.error('Sorry, something went wrong')
    }
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200 overflow-y-hidden">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center mt-2">
            <h1 className="text-5xl font-bold">Add Room</h1>
          </div>
          <form className="card-body" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">type</span>
              </label>
              <input
                type="text"
                placeholder="type"
                value={type}
                onChange={handleChange}
                name="type"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">rooms</span>
              </label>
              <input
                type="number"
                min="0"
                placeholder="rooms"
                value={rooms}
                onChange={handleChange}
                name="rooms"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bathrooms</span>
              </label>
              <input
                type="number"
                placeholder="bathrooms"
                min="0"
                name="bathrooms"
                value={bathrooms}
                onChange={handleChange}
                className="input input-bordered relative"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                min="0"
                placeholder="price"
                name="price"
                value={price}
                onChange={handleChange}
                className="input input-bordered relative"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Adress</span>
              </label>
              <input
                type="string"
                placeholder="bathrooms"
                name="address"
                value={address}
                onChange={handleChange}
                className="input input-bordered relative"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Images</span>
              </label>
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png, image/svg"
                placeholder="bathrooms"
                name="images"
                onChange={handleFileUpload}
                className="input  text-center"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline">
                Submit
              </button>
            </div>
          </form>
          <img src={imageUrl} />
        </div>
      </div>
    </>
  )
}

export default AddListings
