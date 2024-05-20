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
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="lg:pt-10 bg-darkwhite">
      <div id="achievements" className="aboutArea w-[100vw] bg-darkwhite p-3 ">
        <div className="header   flex  gap-x-3 justify-center">
          <div className="imgHolder w-16 flex justify-center items-center h-12/12">
            <img
              src="./images/band.png"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
          <p className="text-center text-3xl md:text-6xl font-poppins font-bold pb-2 overflow-hidden ">
            <span className="text-supportBlue ">Achievements</span>
          </p>
        </div>
        <div id="mainbox" className="flex flex-wrap justify-center">
          <div className="leftPart w-[100vw] lg:w-[76vmin]  2xl:w-[80vmin]  flex justify-center items-center">
            <div>
              <img
                src="./images/achieve.png"
                className="w-[76vmin] h-[57vmin] lg:mt-7"
              ></img>
            </div>
          </div>
          {count == 1 && <Achieve1 />}
          {count == 2 && <Achieve2 />}
          {count == 0 && <Achieve3 />}
        </div>
      </div>
    </div>
  );
};
export default Achievement;
