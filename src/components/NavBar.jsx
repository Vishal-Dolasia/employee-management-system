import React from 'react'
import Employee from '../pages/Employee';
import { Navigate, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      
      {/* Left Side */}
      <div className=" cursor-pointer flex items-center gap-4">
        
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17v-6h6v6m-7 4h8a2 2 0 002-2V7.828a2 2 0 00-.586-1.414l-2.828-2.828A2 2 0 0013.172 3H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <div onClick={()=>{
          navigate("/home")
        }}>
          <h1 className="text-2xl font-bold text-black">
            EMS Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Employee Management System
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6 ">

        <button className="text-gray-600 hover:text-black transition cursor-pointer"
        onClick={()=>{
          navigate("/home")
        }}>
          Home
        </button>

        <button className="text-gray-600 hover:text-black transition cursor-pointer"
        onClick={()=>{
          navigate("/dashboard")
        }}>
          Dashboard
        </button>

        <button className="text-gray-600 hover:text-black transition cursor-pointer"
        onClick={()=>{
          console.log("clicked");
          navigate("/employee")
        }}>
          Employees
        </button>

        <button className="text-gray-600 hover:text-black transition cursor-pointer">
          Reports
        </button>

        {/* Profile */}
        <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-semibold cursor-pointer">
          HR
        </div>

      </div>
    </nav>
  );
}

export default Navbar;