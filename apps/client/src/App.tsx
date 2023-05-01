import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/layouts/Header'
import Home from './routes/Home'
import Rooms from './routes/Rooms'
import MainRoomeit from './routes/MainRoomeit'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import UserProfile from './routes/UserProfile'
import ForgotPassword from './routes/ForgotPassword'
import About from './routes/About'

import './App.css'

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main-roomeit" element={<MainRoomeit />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
