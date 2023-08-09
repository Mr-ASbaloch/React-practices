import React from "react";

const About = () => {
  return (
    <div className="container bg-[#D9D9D9] mt-5 max-w-[1440px]">
      <div className="flex flex-col md:flex-row " >
        <div className="block text-center px-6 mt-5  md:w-2/3 md:text-center md:ml-10">
          <h1 className= 'text-3xl uppercase font-semibold '>
            radha furniture  
          </h1>
          <p>Since -2021</p>

          <p className="text-xl text-red-500">address -</p>
          <p>
            Cecilia Chapman <br />
            711-2880 Nulla St. <br />
            Mankato Mississippi 96522 <br />
            (257) 563-7401
          </p>
        </div>
        <div className="block text-center px-6 mt-5 md:w-1/3  md:text-3xl md:mr-10 md:h-full md:text-center ">
          <h1 className="text-xl font-bold underline mb-1  md:text-2xl" >About Us</h1>
          <p className="md:text-lg text-center p-2">
            “Home is the place where, when you have to go there, they have to
            take you in.”
          </p>
        </div>
      </div>
      <div className="max-w-full h-[1px] mt-2 bg-black">

      </div>
      <div className="flex justify-around p-2 mt-5  ">
        <img src="assets/image 23.png" alt="logo"  className="w-[50px] h-[50px]"/>
        <img src="assets/image 21.png" alt="logo"  className="w-[50px] h-[50px]"/>
        <img src="assets/image 25.png" alt="logo" className="w-[50px] h-[50px]"/>
        <img src="assets/image 26.png" alt="logo"className="w-[50px] h-[50px]" />
        <img src="assets/image 27.png" alt="logo" className="w-[50px] h-[50px]"/>
      </div>
    </div>
  );
};

export default About;
