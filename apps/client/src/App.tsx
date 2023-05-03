import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/layouts/Header'
import Home from './pages/Home'
import Room from './pages/Room'
import MainRoomeit from './pages/MainRoomeit'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
import ForgotPassword from './pages/ForgotPassword'
import About from './pages/About'
import AddListings from './pages/AddListings'
import { RoomProvider } from './context/roomListings/RoomListingsContext'

import './App.css'
import Search from './pages/Search'

const App: React.FC = () => {
  return (
    <>
      <RoomProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main-roomeit" element={<MainRoomeit />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/main-roomeit/room/:id" element={<Room />} />
            <Route path="/addlistings" element={<AddListings />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/search-options" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </RoomProvider>

      <ToastContainer />
    </>
  )
}

export default App
