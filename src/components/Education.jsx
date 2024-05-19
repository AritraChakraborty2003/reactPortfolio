/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
const Education = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://codemap.co.in/educationAPI.php")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div id="education" className="aboutArea w-[100vw] bg-darkwhite pb-6">
      <div className="header p-5   flex  gap-x-3 justify-center h-27">
        <div className="imgHolder p-2  w-16 flex justify-center items-center h-12/12">
          <img
            src="./images/edu.png"
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <p className="text-center text-4xl lg:text-6xl font-poppins font-bold p-3">
          My <span className="text-supportBlue">Education</span>
        </p>
      </div>
      <div className="cardHolder flex flex-col justify-center items-center gap-y-8">
        {data.map(
          (val) =>
            (val.instname === "IIMT College Of Engineering" && (
              <div className="cardBox w-[98vw] lg:w-[75vw] p-4 bg-white flex gap-x-4 font-poppins">
                <div className="imgBox  h-[25vmin] w-[34vmin] lg:h-[30vmin] lg:w-[56vmin] bg-white flex justify-center items-center ml-2">
                  <img src={val.image} className="max-w-full max-h-full" />
                </div>

                <div className="rightPart flex flex-col md:mt-3 font-poppins ml-2">
                  <p className="text-[5vmin] md:text-[2.75vmin] lg:text-[4.5vmin] font-bold pb-2">
                    {val.dname}
                  </p>
                  <p className="mt-1 text-sm md:text-xl lg:text-2xl font-medium pb-2">
                    {val.instname} || {val.board}
                  </p>
                  <p className="text-sm md:text-xl lg:text-[2vmin] font-medium pb-2">
                    {val.date}
                  </p>
                  <p className="mt-1  text-sm md:text-lg lg:text-[2.15vmin]  font-bold pb-2 text-darkBlue">
                    <span className="text-black">Marks:</span> {val.marks}{" "}
                  </p>
                </div>
              </div>
            )) || (
              <div className="cardBox w-[98vw] lg:w-[75vw] p-3 bg-white  flex gap-x-4  ">
                <div className="imgBox h-[20vmin] w-[35vmin] lg:h-[30vmin] lg:w-[60vmin] bg-white flex justify-center items-center ml-2">
                  <img src={val.image} className="max-w-full max-h-full" />
                </div>
                <div className="rightPart flex flex-col md:mt-5  ml-[2vmin] lg:ml-[-3vmin]">
                  <p className="text-[5vmin] md:text-[2.75vmin] lg:text-[4.5vmin] font-bold pb-1">
                    {val.dname}
                  </p>
                  <p className="lg:mt-1 text-sm md:text-xl lg:text-2xl font-medium pb-2">
                    {val.instname} || {val.board}
                  </p>
                  <p className=" text-sm md:text-xl lg:text-[2vmin] font-medium pb-2">
                    {val.date}
                  </p>
                  <p className="lg:mt-1 text-sm md:text-lg lg:text-[2.15vmin]  font-bold pb-2 text-darkBlue">
                    <span className="text-black ">Marks:</span> {val.marks}{" "}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default Education;
