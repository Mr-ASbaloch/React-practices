import React from "react";

const Interior = () => {
  return (
    <>
      <div className="container w-full mt-5 bg-[#D9D9D9] sm:flex max-w-[1440px]  md:mb-5">
        <div className="p-2 mb-2 mt-2 sm:w-1/2   md:m-5 ">
          <h1 className="text-[#1B1958] text-2xl font-semibold text-center md:p-5 md:text-4xl md:font-semibold">
            luxury interior
          </h1>
          <p className=" text-justify p-2 md:text-3xl md:font-light ">
            {" "}
            pImagination and invention go hand in hand. Remember how lack of
            resources was never a problem in childhood games? Shift a few pieces
            of furniture around the living room, and you have yourself a fort.{" "}
          </p>
        </div>
        <div  className="w-full  mb-2 p-3 rounded-md  mx-auto  sm:w-1/2 md:m-5 ">
          <img src="/assets/image 10.png" alt="img"  />
        </div>
      </div>
    </>
  );
};

export default Interior;
