/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
import Achieve1 from "./Achieve1";
import Achieve2 from "./Achieve2";
import Achieve3 from "./Achieve3";
const Achievement = () => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    //Implementing the setInterval method

    const interval = setInterval(() => {
      const cnt = (count + 1) % 3;
      setCount(cnt);
    }, 4500);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="pt-10 bg-darkwhite pb-8">
      <div id="achievements" className="aboutArea w-[100vw] bg-darkwhite p-3 ">
        <div className="header   flex  gap-x-3 justify-center">
          <div className="imgHolder w-16 flex justify-center items-center ">
            <img
              src="./images/band.png"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
          <p className="text-center text-3xl md:text-6xl font-poppins font-bold pb-2 overflow-hidden ">
            <span className="text-supportBlue ">Achievements</span>
          </p>
        </div>
        <div className="flex justify-center items-center mt-3 pb-5">
          <div
            id="mainbox"
            className=" bg-white  lg:w-[77vw] flex  flex-col justify-center items-center rounded-[4vmin]"
          >
            <div className="leftPart w-[100vw]  lg:w-[76vmin]  2xl:w-[80vmin]  flex justify-center items-center">
              <div className="w-[35vmin] h-[35vmin] lg:w-[28vmin] lg:h-[28vmin] flex justify-center items-center">
                <img
                  src="./images/achieve.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
            </div>
            <div className="mt-[-3vmin] lg:mt-[-2.5vmin]">
              {count == 1 && <Achieve1 />}
              {count == 2 && <Achieve2 />}
              {count == 0 && <Achieve3 />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
