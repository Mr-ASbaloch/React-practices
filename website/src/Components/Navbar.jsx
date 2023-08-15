import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src="public/assets/Icon (6).png" alt="logo" className="h-[30px] w-[30px]" />
        <p className="font-bold text-2xl">Nexcent</p>
      </div>
      <div >
        <ul  className="flex items-center m-auto gap-10 mt-2 cursor-pointer ">
        <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
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
