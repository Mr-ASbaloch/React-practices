import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <img src="src\assets\image 6.png" alt="img" />
          <div className='bg-[#16195E] text-white w-full h-[230px]  '>
            <h1 className='text-3xl text-justify ml-5 mt-5'>
              Medical care <br />
              simplified for <br />
              everyone
            </h1>
            <p className='font-serif text-justify ml-5  mt-2'>
              A new way to transform your daily medical care <br />
              into the simplest and effective one.
            </p>
            <button  className='bg-[#00A962] flex p-1 ml-5 rounded-md items-center gap-1 mt-3 mb-5'> Try for free <AiOutlineArrowRight size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
