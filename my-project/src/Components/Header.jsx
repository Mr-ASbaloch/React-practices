import React from "react";
import {
  AiOutlineMenuFold,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineCarryOut,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Header = () => {
  return (
    <main className="">
      <div className="    flex items-center   ">
        <AiOutlineMenuFold size={30} className=" cursor-pointer " />
        <div className=" mx-5">
          <p>
            Best <span className=" font-bold text-lg ">Eats</span>
          </p>
        </div>
        <div className="  bg-gray-200 rounded-full  flex w-[150px] mx-5 ">
          <p className=" bg-black text-white rounded-full px-2 m-1 cursor-pointer ">
            Delivery
          </p>
          <p className=" bg-transparent  text-black rounded-full cursor-pointer   m-1 ">
            PickUp
          </p>
        </div>
        <div>
          <AiOutlineSearch size={25} />
        </div>
        <button className=" bg-black text-white w-[65px] text-center flex justify-center rounded-full  mx-10">
          <AiOutlineShoppingCart className="  " size={25} /> cart
        </button>
      </div>
    </main>
  );
};

export default Header;
