import React from "react";

const Navbar = () => {
  return (
    <div className=" justify-between hidden md:flex">
      <div className="flex">
        <img src="assets/Icon (6).png" alt="logo" className="h-[30px] w-[30px]" />
        <p className="font-bold text-2xl">Nexcent</p>
      </div>
      <div >
        <ul  className="flex items-center m-auto   mt-2 cursor-pointer md:gap-2 ">
        <li className="mx-2">Home</li>
          <li className="mx-2">Service</li>
          <li className="mx-2">Feature</li>
          <li className="mx-2">Product</li>
          <li className="mx-2">Testimonial</li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="text-[#4CAF4F] font-semibold border border-[#4CAF4F] w-[100px] rounded-md">Login</button>
        <button className="bg-[#4CAF4F] text-white w-[100px] rounded-md">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
