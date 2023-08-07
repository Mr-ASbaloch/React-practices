import React from "react";
import { BsFastForward } from "react-icons/bs";

const Block = () => {
  return (
    <div>
      <div>
        <div className="mt-5 flex flex-col h-[603px]">
          <p className="text-[#16195E] text-3xl font-bold  w-full">
            Changing the way <br /> you manage your <br /> health care
          </p>
          <div className="flex w-[370px] p-1 flex-wrap ">
            <div className="text-[#16195E]  first-letter: shadow-md w-[75%] m-auto mt-5 text-center flex flex-col hover:scale-125">
              <img
                src="src\assets\Frame (1).png"
                alt="icon"
                className="w-[45px] h-[45px]"
              />
              <p>
                Online consultation <br />
                with your doctor
              </p>
              <button className="flex items-center p-2 gap-2">
                Learn more{" "}
                <BsFastForward className="text-[#00A962] font-bold text-2xl" />
              </button>
            </div>
            <div className="text-[#16195E]">
              {" "}
              <img
                src="src\assets\Frame (2).png"
                alt="icon"
                className="w-[45px] h-[45px]"
              />
              <p>
                Medicine on your <br />
                front door
              </p>
              <button className="flex items-center p-2 gap-2">
                Learn more{" "}
                <BsFastForward className="text-[#00A962] font-bold text-2xl" />
              </button>
            </div>
            <div className="text-[#16195E]">
              {" "}
              <img
                src="src\assets\Frame.png"
                alt="icon"
                className="w-[45px] h-[45px]"
              />
              <p>
                Digital medical <br />
                records
              </p>
              <button className="flex items-center p-2 gap-2">
                Learn more{" "}
                <BsFastForward className="text-[#00A962] font-bold text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
