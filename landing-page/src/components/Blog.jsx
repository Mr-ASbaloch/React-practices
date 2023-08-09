import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="main mt-3 bg-[#D9D9D9] text-center   h-full md:flex flex-row-reverse  md:max-w-[1440px] md:mx-[2%]  ">
        <div className="md:w-1/2   ">
          <h1 className="text-[#1B1958] p-5 text-3xl font-bold md:mt-5 md:underline ">Blog </h1>
          <p className="text-xl p-2 mb-3 md:text-3xl md:p-4 md:mt-5 md:text-justify ">
            “Everything is designed. Few things are designed well.”
          </p>
        </div>
        <div className="md:flex md:w-1/2 md:m-5">
          <div className=" block text-center  p-1 shadow-md mb-3 mx-3 shadow-violet-300 rounded-lg   ">
            <img
              src="assets/image 14.png"
              alt="img"
              className="w-[150px] h-[150px]  mx-auto "
            />
            <p className="text-center p-4">
              “Be patient and positive. These things take time and do not happen
              overnight. ”
            </p>
          </div>
          <div className=" block text-center  p-1 shadow-md shadow-violet-300 mb-2  mx-3 ">
            <img
              src="assets/image 14.png"
              alt="img"
              className="w-[150px] h-[150px] mx-auto "
            />
            <p className="text-center p-4">
              “A room should never allow the eye to settle in one place. It
              should smile at you and create fantasy.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
