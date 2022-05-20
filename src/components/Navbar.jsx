import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { primaryColor } from "../constants/theme"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full top-0 left-0 right-0 border-b border-b-gray-700">
      <div className="flex justify-between items-center h-24 text-white mx-auto px-4 max-w-[1240px]">
        <h1 className="text-[#00df9a] font-bold text-3xl w-full">React</h1>
        <ul className="hidden md:flex user-select-none">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">Contact</li>
        </ul>
        <div className="cursor-pointer block md:hidden">
          {nav ? (
            <AiOutlineClose onClick={handleNav} size={20} />
          ) : (
            <AiOutlineMenu onClick={handleNav} size={20} />
          )}
        </div>
        <div
          className={`${
            !nav
              ? "fixed left-0 top-0 w-[50%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
              : "fixed hidden left-[-100%]"
          }`}
        >
          <h1
            className={`text-[${primaryColor}] font-bold text-3xl w-full m-4 mt-8`}
          >
            React
          </h1>
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
