import React from "react";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col  w-full p-2 mt-10">
        <h1>Services Category </h1>
        <div className='flex m-5 p-6 gap-5 flex-wrap bg-slate-300'>
          <div className='bg-gray-50 shadow-lg shadow-neutral-700' >
            <img src="src\assets\Group (1).png" alt="" />
            <p>Grooming</p>
          </div>
          <div  >
            <img src="src\assets\Group (2).png" alt="" />
            <p >Hyginic care</p>
          </div>
          <div>
            <img src="src\assets\Group.png" alt="" />
            <p>Healthcare</p>
          </div>
          <div>
            <img src="src\assets\Vector.png" alt="" />
            <p> Daycare</p>
          </div>
          <div>
            <img src="src\assets\Vector (1).png" alt="" />
            <p>Healthcare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
