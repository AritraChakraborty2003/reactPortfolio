/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
const AboutSec = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://codemap.co.in/detailsAPI.php")
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
      <div className="aboutArea w-[100vw] bg-darkwhite pb-10 pt-5">
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
                <div className="leftPart h-[60vmin] w-[80vmin]  lg:h-[50vmin]  lg:w-[90vmin] flex justify-center items-center ">
                  <img
                    src={val.image}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="rightPart p-5 w-[100vw] lg:w-[50vw] flex flex-col justify-start mt-5  ">
                <p className="text-[4vmin] lg:text-[2.45vmin] font-medium">
                  Name:{" "}
                  <span className="text-[4vmin] lg:text-[2.45vmin] font-bold">
                    {val.name}
                  </span>
                </p>
                <p className="text-[4vmin] lg:text-[2.45vmin] mt-1 text-supportBlue font-bold font-poppins">
                  {val.desig}
                </p>
                <p className="mt-2 text-[4vmin] lg:text-[2.45vmin] font-normal ">
                  {val.descr}
                </p>

                <p className="text-[4vmin] lg:text-[2.25vmin] text-supportBlue font-bold mt-3 font-poppins">
                  Location:&nbsp;
                  <span className="text-[4vmin] lg:text-[2.25vmin] text-black font-normal font-poppins">
                    {val.location}
                  </span>
                </p>
                <p>
                  <span className="text-[4vmin] lg:text-[2.25vmin] mt-2 text-supportBlue font-bold font-poppins">
                    Email:&nbsp;
                  </span>
                  <span className="text-[4vmin] lg:text-[2.25vmin] mt-10 text-black font-normal font-poppins">
                    {" "}
                    {val.email}
                  </span>
                </p>
                <p>
                  <span className="text-[4vmin] lg:text-[2.25vmin]  text-supportBlue font-bold font-poppins">
                    Phone:&nbsp;
                  </span>
                  <span className="text-[4vmin] lg:text-[2.25vmin]  mt-10 text-black font-normal font-poppins">
                    {" "}
                    {val.phone}
                  </span>
                </p>
                <div className="btnHolder p-2 bg-mustardyellow font-medium flex justify-center  gap-x-3 mt-5 w-[50vmin] md:w-[30vmin]">
                  <img src="./images/resicon.png" height={30} width={30}></img>
                  <button className="  text-black text-xl">
                    <a
                      href={val.resumeLink}
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
