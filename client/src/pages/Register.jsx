import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// import BLOGO from "../Logo/1.png";
import IMG from "../components/Land/abc.png";
import IMG2 from "../components/images/new2.png";
import IMG3 from "../components/images/new3.png";
import IMG4 from "../components/images/new4.png";
import { useEffect } from "react";

const Register = () => {

    
    const [profile_photo, setprofile_photo] = useState(null);
    const [cover_photo,setcover_photo]=useState(null)

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone:"",
    profilePhoto:null,
    coverPhoto:null
  });

  useEffect(() => {
   
    setFormdata((prevData) => ({
        ...prevData,
        profilePhoto: profile_photo,
        coverPhoto: cover_photo,
    }));
}, [profile_photo, cover_photo]);

const handleFileChange = (e) => {
    if (e.target.name === "profile_photo") {
        setprofile_photo(e.target.files[0]);
    } else {
        setcover_photo(e.target.files[0]);
    }
};



  const [seepasword, setseepassword] = useState(false);

  const onChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleviewpassword = () => {
    setseepassword(!seepasword);
    if (seepasword) {
      document.getElementById('password').type = 'password';
      document.getElementById('cpassword').type = 'password';
    } else {
      document.getElementById('password').type = 'text';
      document.getElementById('cpassword').type = 'text';
    }
  };

  const validation = () => {
    if (formdata.name.length < 3) {
      toast.error("name must be at least 3 characters long");
      return false;
    }

   

    if (formdata.password !== formdata.cpassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (!/^[A-Za-z0-9]+$/.test(formdata.name)) {
      toast.error("name can only contain letters and numbers");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) {
      return;
    }

    console.log('signup clciked')

    console.log(formdata)
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, formdata,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        
        });
        console.log(response.data);
        toast.success("User registered successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "User registration failed!";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div>
      
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:flex w-1/2 animate-updown hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
            style={{
              backgroundImage: `url(${IMG3})`,
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
            <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide">
              SOCIAL CONNECT
              </h1>
              <p className="text-3xl my-4">
              connect, collaborate, and thrive in a dynamic social community.
              </p>
            </div>
            <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">

            </div>
          </div>
          <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
            style={{ backgroundColor: "#161616" }}
          >
            <div
              className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
              style={{
                backgroundImage: `url(${IMG4})`,
                alignItems: "center",
                justifyContent: "center",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >

              <div className="absolute bg-black opacity-60 inset-0 z-0" />
            </div>
            <div className="w-full py-6 z-20">
              <h1 className="my-6">
                <center>
                  {/* <img src={BLOGO} alt="Logo Here" style={{ width: "50%" }} /> */}
                </center>
              </h1>
              <br />

              <p className="text-gray-100">
                <br />
              </p>
              <form
                action
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    onChange={onChange}
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>

                  <input
                    type="email"
                    onChange={onChange}
                    name="email"
                    id="email"
                    value={formdata.email}
                    className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>


                <div>
                    <input
                        type="text"
                        onChange={onChange}
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>



                <div className="pb-2 pt-4">

                  <input
                    type="password"
                    onChange={onChange}
                    name="password"
                    id="password"
                    placeholder="PASSWORD"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <h1 className=" text-left">Profile photo</h1>
                <div>

                    {/* uplaod file */}
                    <input  
                    type="file"
                    name="profile_photo"
                    id="profile_photo"
                    onChange={handleFileChange}
                    className=" mt-2 bg-gray-50 border -mt-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                </div>
                <h1 className=" text-left">Cover photo</h1>
                <div>
                    {/* uplaod file */}
                    <input
                    type="file"
                    name="cover_photo"
                    id="cover_photo"
                    onChange={handleFileChange}
                    className=" mt-2 bg-gray-50 border -mt-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="password"
                    onChange={onChange}
                    name="cpassword"
                    id="cpassword"
                    placeholder="CONFIRM PASSWORD"
                    className="bg-gray-50 border -mt-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      onClick={handleviewpassword}
                      id="viewpassword"
                      name="viewpassword"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      View password
                    </label>
                  </div>
                </div>
                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  <a href="#">Forgot your password?</a>
                </div>
                <div className="px-4 pb-2 pt-4" onClick={handleSubmit}>
                  <button  className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                    {/* {isloading ? (
                      <div className="flex justify-center items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />
                        <span>Registering ...</span>
                      </div>
                    ) : (
                      <span>Register</span>
                    )} */}
                    <span >Register</span>
                  </button>
                </div>
                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">

                </div>
                <div className="mt-12 text-sm font-display font-semibold text-white text-center">
                  Already have an account ? &nbsp;
                  <NavLink
                    to="/login"
                    className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                  >
                    Sign In
                  </NavLink>
                </div>

                <div className=" text-indigo-600 hover:cursor-pointer">
                  Resend verification email?
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;