import React from 'react'
import Home from '../../client/src/pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from '../../client/src/pages/Login'
import Register from './pages/Register'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './pages/UserProfile'
import Profile from './pages/Profile'


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/profile/:uid' element={<Profile />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
