import { useState } from 'react'
import { Link } from 'react-router-dom'

import visibilityIcon from '../assets/images/room/assets/svg/visibilityIcon.svg'
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div className="hero min-h-screen bg-base-200 overflow-y-hidden">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center mt-2">
            <h1 className="text-5xl font-bold">Sign In!</h1>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
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
                className="input input-bordered relative"
              />
              <img
                src={visibilityIcon}
                alt="Show Password"
                className="absolute top-[55%] right-[8%] p-2 text-white"
                onClick={() =>
                  setShowPassword((prevState: boolean) => !prevState)
                }
              />
              <label className="label">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
                <Link to="/signup" className="label-text-alt link link-hover">
                  Signup instead?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline ">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
