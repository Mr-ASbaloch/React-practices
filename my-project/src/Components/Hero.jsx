import React from "react";

import { BiFastForward } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="container  ">
      <div>
        <div className="flex flex-col  text-white absolute justify-center m-2 p-3 ">
          <h1 className='mb-2'>
            Taking care <span className='font-bold text-[#FFAA00]  ' > for your Smart Pets !</span>
          </h1>
          <p className='font-sans mt-2 mb-2'>
            Human–canine bonding is the relationship <br /> between dogs and
            humans.
          </p>
          <button className='bg-[#FFAA00] w-max flex items-center p-2 rounded-md text-black font-bold cursor-pointer mt-5 hover:bg-black hover:text-[#FFAA00]'>
            {" "} Explore More <BiFastForward />
          </button>
        </div>
        <div className="w-full">
          <img src="src\assets\pexels-helena-lopes-1931370.jpg" alt="img" className=' h-full  object-contain  ' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
