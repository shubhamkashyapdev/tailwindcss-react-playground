import React from "react"
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter"
import { primaryColor } from "../constants/theme"
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p
          className={`text-[${primaryColor}] font-bold p-2 text-xl md:text-2xl`}
        >
          Growing With Data Analytics
        </p>
        <h1 className={`md:text-5xl text-4xl font-bold md:py-4 py-2`}>
          Grow With Data Analysis
        </h1>
        <div>
          <p className="md:text-2xl text-xl font-bold">
            Fast, flexible finacing for{" "}
            <span className="text-gray-700 pl-2">
              <Typewriter
                words={["hello", "world"]}
                loop={true}
                cursor={true}
              />
            </span>
          </p>
        </div>
        <p className="text-xl xl:text-2xl text-gray-500 mt-6 text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, est?
        </p>
        <button
          className={`bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3`}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
