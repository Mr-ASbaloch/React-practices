import React from "react";

const Hero = () => {
  return (
    <div className="container ">
        <div>
        <p> The <span> Best</span></p>
         <p>Foods <span>Delivered</span> </p>
      </div>
      <div>
        <img className=" w-[300px] h-full  bg-slate-500 "
          src="https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
        />
      </div>
      
    </div>
  );
};

export default Hero;
