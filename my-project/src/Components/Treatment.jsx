import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Treatment = () => {
  return (
    <div>
      <div className="container">
        <div className="bg-[#16195E]">
          <div>
            <img src="src\assets\Group 70.png" alt="img" className='w-[250px] h-[250px]' />
          </div>
          <div>
            <p>
              A handy way to <br />
              get treatment
            </p>
            <div>
              <div>
                <h1>
                  Services for your needs <IoMdArrowDropdown />
                </h1>
                <p>
                  Everybody always have different needs and we provide options
                  for you and your needs
                </p>
              </div>
              <div>
                <h1>
                  Choose your doctor <IoMdArrowDropdown />
                </h1>
              </div>
              <div>
                <h1>
                  Get an appointment <IoMdArrowDropdown />{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
