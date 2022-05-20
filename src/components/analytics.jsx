import React from "react"
import LaptopImage from "../assets/laptop.jpg"
import { primaryColor } from "../constants/theme"

const analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className={`w-[500px] mx-auto my-4`}
          src={LaptopImage}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p
            className={`text-[${primaryColor}] font-medium text-xl uppercase text-center md:text-left`}
          >
            Data Analytics Dashboard
          </p>
          <h1
            className={`text-2xl md:text-4xl text-center md:text-left font-medium mt-1 mb-4 py-2`}
          >
            Manage Data Analytics Centrally
          </h1>
          <p className="text-center md:text-left mx-4 md:mx-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            corporis? Quis repellendus quas nesciunt recusandae delectus? Amet
            voluptates at, rerum id nisi ut sint quos culpa enim officiis in
            cumque!
          </p>
          <button
            className={`text-[${primaryColor}] bg-black w-[200px] py-3 rounded-md mt-8 md:mt-6 mx-auto md:mx-0`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default analytics
