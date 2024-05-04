import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {

    const {uid}=useParams();
    const [user,setUser]=useState(null)

    const fetchUserData=async(uid)=>{
        try {
            const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/profile`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchUserData(uid)
    },[uid])
  return (
    <div>
        <Navbar />

        <div className=" p-10">
        <img className='rounded-2xl  ' src={`${process.env.REACT_APP_API_URL}/${user?.cover_photo}`}>
        </img>
        <div className='profile gap-36 section border border-10 mt-5 h-96 rounded-2xl border-gray-500 flex  pl-10'>
            {/* profile photo */}
            <div>
                <img
                    className='rounded-full   w-96  h-80 mt-10 mx-auto'
                  src={`${process.env.REACT_APP_API_URL}/${user?.profile_photo}`}
                >
                </img>
            </div>

            <div>
                <h1 className='text-2xl font-bold mt-10'>{user?.name}</h1>
                
                <p className='text-lg mt-2'>
                    <span className='font-bold'>Phone:</span> {user?.phone}
                </p>

            </div>
        </div>
            </div>  
    </div>
  )
}

export default UserProfile
