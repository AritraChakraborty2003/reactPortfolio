/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import { RESUME_URL } from "../Utils/Constants.js";
const AboutSec = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "about")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div
        id="about"
        className="aboutArea w-[100vw] bg-darkwhite pb-10 mt-10 pt-3"
      >
        <div className="header p-5 pt-2   flex  gap-x-3 justify-center h-27">
          <div className="imgHolder p-2  w-16 flex justify-center items-center h-12/12">
            <img
              src="./images/user.png"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
          <p className="text-center text-4xl lg:text-6xl font-poppins font-bold p-3">
            About <span className="text-supportBlue">Me</span>
          </p>
        </div>

        <div className="mainArea flex flex-wrap">
          {data.map((val) => (
            <>
              <div className="leftPart p-5 w-[100vw] lg:w-[40vw] flex justify-center lg:items-center ">
                <div className="leftPart h-[65vmin] w-[85vmin]  lg:h-[49vmin]  lg:w-[86vmin] flex justify-center items-center ">
                  <img
                    src={val.image}
                    className="max-w-full max-h-full object-contain "
                  />
                </div>
              </div>
              <div className="rightPart p-5 w-[100vw] lg:w-[50vw] flex flex-col justify-start lg:mt-5  ">
                <p className="text-[5vmin] md:text-[2.45vmin] font-medium">
                  Name:{" "}
                  <span className="text-[5vmin] md:text-[2.45vmin] font-bold">
                    {val.name}
                  </span>
                </p>
                <p className="text-[4vmin] md:text-[2.45vmin] mt-1 text-supportBlue font-bold font-poppins">
                  {val.designation}
                </p>
                <p className="mt-2 text-[4vmin] md:text-[2.45vmin] font-normal ">
                  {val.descr}
                </p>

                <p className="text-[4vmin] md:text-[2.25vmin] 2xl:text-[2.10vmin text-supportBlue font-bold mt-3 font-poppins">
                  Location:&nbsp;
                  <span className="text-[4vmin] md:text-[2.25vmin] 2xl:text-[2.10vmin] text-black font-normal font-poppins">
                    {val.location}
                  </span>
                </p>
                <p>
                  <span className="text-[4vmin] md:text-[2.25vmin] 2xl:text-[2.10vmin] mt-2 text-supportBlue font-bold font-poppins">
                    Email:&nbsp;
                  </span>
                  <span className="text-[4vmin] md:text-[2.25vmin] 2xl:text-[2.10vmin] mt-10 text-black font-normal font-poppins">
                    {" "}
                    {val.email}
                  </span>
                </p>
                <p>
                  <span className="text-[4vmin] md:text-[2.25vmin] 2xl:text-[2.10vmin]  text-supportBlue font-bold font-poppins">
                    Phone:&nbsp;
                  </span>
                  <span className="text-[4vmin] md:text-[2.25vmin] 2xl:text-[2.10vmin] mt-10 text-black font-normal font-poppins">
                    {" "}
                    {val.phone}
                  </span>
                </p>
                <div className="btnHolder p-2 bg-mustardyellow font-medium flex justify-center  gap-x-3 mt-5 w-[50vmin] md:w-[30vmin]">
                  <img src="./images/resicon.png" height={30} width={30}></img>
                  <button className="  text-black text-xl">
                    <a
                      href={RESUME_URL}
                      className="text-black text-xl"
                      target="_blank"
                    >
                      My Resume
                    </a>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default AboutSec;
