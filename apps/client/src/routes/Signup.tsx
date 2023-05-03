// import { useState } from 'react'
import * as React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import visibilityIcon from '../assets/images/room/assets/svg/visibilityIcon.svg'
const Signup: React.FC = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })
  // // destructure the formData
  const { name, username, email, password } = formData

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [(e.target as HTMLInputElement).name]: e.currentTarget.value,
    }))
  }
  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      console.log(formData)
      // navigate('/')
    } catch (err) {
      toast.error('Sorry, something went wrong')
    }
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200 overflow-y-hidden">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center mt-2">
            <h1 className="text-5xl font-bold">Welcome!</h1>
          </div>
          <form className="card-body" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="input input-bordered relative"
              />
              <img
                src={visibilityIcon}
                alt="Show Password"
                className="absolute top-[69%] right-[8%] p-2 text-white"
                onClick={() =>
                  setShowPassword((prevState: boolean) => !prevState)
                }
              />
              <label className="label">
                <Link to="/signin" className="label-text-alt link link-hover">
                  Signin instead?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline ">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
