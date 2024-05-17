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
    <div className="aboutArea w-[100vw] bg-darkwhite pb-2">
      <div className="header p-3   flex  gap-x-3 justify-center h-27">
        <div className="imgHolder p-2  w-16 flex justify-center items-center h-12/12">
          <img
            src="./images/band.png"
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <p className="text-center text-3xl lg:text-6xl font-poppins font-bold p-3">
          <span className="text-supportBlue">Achievements</span>
        </p>
      </div>

      <div className="flex justify-center flex-wrap mt-[-5vmin] lg:mt-0">
        <div className="h-[50vmin] lg:h-[60vmin] w-[80vmin] lg:w-[60vmin] lg:mt-[10vmin]">
          <img
            src="./images/winner1.png"
            className="max-h-full max-w-full object-contain"
          ></img>
        </div>
        <ul className="flex flex-col ml-[3vmin]">
          {data.map((val) => (
            <li className="text-xl font-poppins mt-3 pb-3">
              {cnt++}. Won <b>{val.rank}</b> position in <b>{val.name}</b> -{" "}
              <a
                href={val.certificateLink}
                className="font-medium underline-offset-2"
                target="_blank"
              >
                <u>Certificate Link</u>
              </a>
              <p className="text-sm">
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
