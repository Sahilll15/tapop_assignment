import React, { useState, useEffect } from "react";
import HOMEIMG from '../components/images/new4.png'
import Navbar from "../components/Navbar";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div className="flex justify-between items-center h-screen px-8">
    
    <div className="teaser max-w-md">
      <h1 className=" text-8xl font-bold mb-4">Welcome to Our Landing Page</h1>
      <p className="text-2xl mb-6 ">Discover amazing things here!</p>
    </div>
    <img
      src={HOMEIMG}
      alt="Interactive Image"
      className="interactive-image w-1/2"
      style={{
        transform: `translate(-${mousePosition.x / 20}px, -${mousePosition.y / 20}px)`,
      }}
    />
  </div>
    </>
  );
}

export default App;
