/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
const Achieve3 = () => {
  const [data, setData] = useState([]);
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
    <div className="rightPart w-[100vw] lg:w-[70vmin]  2xl:w-[90vmin] flex justify-center items-center">
      {(data.length > 0 && (
        <div className=" w-[100vw] lg:w-[70vmin]  2xl:w-[90vmin]  p-2 lg:mt-16">
          {data.slice(6, 9).map((val) => (
            <ul className="mt-1">
              <li className="text-xl lg:text-[3.25vmin] pt-2 pb-2">
                Won in <b>{val.name}</b> with rank <b>{val.rank}</b> the{" "}
                <a href={val.certificateLink} target="_blank">
                  <u>
                    <b>certificate Link</b>
                  </u>
                </a>
              </li>
              <li className="lg:text-[2.5vmin]">
                <b>Description:</b> {val.descr}
              </li>
            </ul>
          ))}
          <div className="flex linkHolder gap-x-2 mt-10 w-12/12 justify-center">
            <div className="box rounded-[1vmin] h-[2vmin] w-[2vmin] border-solid border-2 "></div>
            <div className="box rounded-[1vmin] h-[2vmin] w-[2vmin] border-solid border-2"></div>
            <div className="box rounded-[1vmin] h-[2vmin] w-[2vmin] border-solid border-2 bg-black"></div>
          </div>
        </div>
      )) ||
        (data.length == 0 && <p> Loading...</p>)}
    </div>
  );
};
export default Achieve3;
