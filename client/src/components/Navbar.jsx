import React, { useEffect, useState } from "react";
import axios from 'axios'
import { CgProfile } from "react-icons/cg";
import {useNavigate} from 'react-router-dom'

function Navbar() {

    const signout=()=>{
        localStorage.removeItem('token')
        window.location.href='/login'
    }

    const navigate=useNavigate()
    const [qrCode,setqrCode]=useState(null)
    const [user,setUser]=useState(null)

    const generateQrCode=async()=>{
        const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/qrcode`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        setqrCode(response.data)
    }

    const getLoggedinUser=async(req,res)=>{
        try {
          const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/user`,{
              headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
              }
            }
            );
            console.log(response.data)
            setUser(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getLoggedinUser()
    },[])

  return (
    <div className="relative">
    <nav className="bg-gray-800 py-4 mt-10 mx-10 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div onClick={()=>{
            navigate('/')
          }} className="flex items-center" >
            <h1 className="text-white text-lg font-semibold">Social Connect</h1>
          </div>
          <div className="flex items-center">
            <a onClick={signout} className="text-gray-300 hover:text-white px-3 py-2">
              Logout
            </a>
            <a onClick={generateQrCode} className="text-gray-300 hover:text-white px-3 py-2">
              Get QrCode
            </a>

            <a onClick={()=>{
                navigate(`/profile`)
            }} className="text-gray-300 hover:text-white px-3 py-2 w-10">
            <CgProfile />
            </a>

          </div>
        </div>
      </div>
    </nav>
    {qrCode && 
    <div className=" absolute right-10 border border-10 border-black mt-2 p-2">
   
      <div className="flex justify-center">
      
        <img src={qrCode}/>

      </div>

  
      <div className="flex gap-2 justify-center">
        <div onClick={()=>{
            navigator.clipboard.writeText(qrCode)
            alert("Copied to clipboard")
  
        }} className=" z-40 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
           share
        </div>
        <div>
              <button 
                className="
                text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                "
              onClick={()=>setqrCode(null)}>Close</button>
              </div>
        </div>
        
    </div>
}
  </div>
  
  );
}

export default Navbar;
