/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
const Achievement = () => {
  const [data, setData] = useState([]);
  let cnt = 1;
  useEffect(() => {
    axios
      .get("https://codemap.co.in/AchievementsAPI.php")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div id="achievements" className="aboutArea w-[100vw] bg-darkwhite p-3">
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

      <div className="flex justify-center flex-wrap  ">
        <div>
          <div className=" flex flex-end h-[55vmin] lg:h-[47vmin] w-[90vmin] 2xl:h-[60vmin] lg:w-[60vmin] 2xl:w-[80vmin] scroll-pr-72 lg:mt-20">
            <img
              src="./images/winner1.png"
              className="max-h-full max-w-full object-contain"
            ></img>
          </div>
        </div>

        <ul className="flex flex-col ml-[3vmin] w-[79vmin] 2xl:w-[90vmin] text-[4vmin] lg:text-[2.65vmin]  ">
          {data.map((val) => (
            <li className="text-[4.45vmin]  pl-1 pr-1 md:text-[2.65vmin] font-poppins mt-3 pb-3 p-2">
              {cnt++}. Won <b>{val.rank}</b> position in <b>{val.name}</b> -{" "}
              <a
                href={val.certificateLink}
                className="font-medium underline-offset-2"
                target="_blank"
              >
                <u>Certificate Link</u>
              </a>
              <p className="text-[3.65vmin] pl-1 pr-1 md:text-[2.65vmin]">
                <b>Description:</b> {val.descr}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Achievement;
