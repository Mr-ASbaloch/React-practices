import React from "react";

const Design = () => {
  return (
    <div className="container ">
      <div className="bg-[#D9D9D9]  sm:text-center sm:flex mt-4  md:mx-auto   ">
        <div  className="w-auto">
          <h1 className="text-[#1B1958] text-2xl text-center justify-center md:text-5xl p-10 mx-w-[500px] uppercase ">top indoor & outdoor furniture</h1>
          <p className="text-center mt-0 mb-2">50+ Category</p>
        </div>
        <div className="sm:flex  md:max-w-auto lg:max-w-lg ">
          <div className=" shadow-md shadow-neutral-400 rounded-md p-3">
            <img
              src="/assets/image 11.png"
              alt="img"
              className="w-full  h-[350px] p-3  rounded-md  object-cover sm:w-[250px] sm:p-5 md:w-auto  items-center "
            />
            <div>
              <p className="text-center font-mono">Indoor Sofa</p>
              <p className="text-center font-mono">$ 2699</p>
            </div>
          </div>
          <div className="shadow-md shadow-neutral-400 rounded-md p-3">
            <img
              src="assets/image 12.png"
              alt="img"
              className="w-full  h-[350px] p-3 rounded-md  object-cover sm:w-[250px] sm:p-5 "
            />
            <div>
              <p className="text-center font-mono">Indoor Sofa</p>
              <p className="text-center font-mono">$ 2699</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
