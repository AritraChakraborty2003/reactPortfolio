/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
const Bannersocials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "socials")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      {(screen.width <= 500 && (
        <div className="socialHolder flex gap-x-7 mt-4 pb-5">
          {data.map((val) => (
            <a href={val.link} target="_blank">
              {val.type === "Leetcode" ? (
                <img
                  src={val.file}
                  height={39}
                  width={39}
                  className="mt-1"
                ></img>
              ) : (
                <img src={val.file} height={50} width={50}></img>
              )}
            </a>
          ))}
        </div>
      )) ||
        (screen.width > 500 && screen.width <= 1700 && (
          <div className="socialHolder flex gap-x-10 2xl:gap-x-11  mt-4 pb-3">
            {data.map((val) => (
              <a href={val.link} target="_blank">
                {val.type === "Leetcode" ? (
                  <img src={val.file} height={55} width={55}></img>
                ) : (
                  <img src={val.file} height={65} width={65}></img>
                )}
              </a>
            ))}
          </div>
        )) || (
          <div className="socialHolder flex gap-x-10">
            {data.map((val) => (
              <a href={val.link} target="_blank">
                {val.type === "Leetcode" ? (
                  <img src={val.file} height={70} width={70}></img>
                ) : (
                  <img src={val.file} height={65} width={65}></img>
                )}
              </a>
            ))}
          </div>
        )}
    </>
  );
};
export default Bannersocials;
