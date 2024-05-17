/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
const Bannersocials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://codemap.co.in/socialsAPI.php")
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
      {(screen.width <= 500 && (
        <div className="socialHolder flex gap-x-6">
          {data.map((val) => (
            <a href={val.link} target="_blank">
              <img src={val.icon} height={85} width={85}></img>
            </a>
          ))}
        </div>
      )) ||
        (screen.width > 500 && screen.width <= 1700 && (
          <div className="socialHolder flex gap-x-9">
            {data.map((val) => (
              <a href={val.link} target="_blank">
                <img src={val.icon} height={50} width={50}></img>
              </a>
            ))}
          </div>
        )) || (
          <div className="socialHolder flex gap-x-10">
            {data.map((val) => (
              <a href={val.link} target="_blank">
                <img src={val.icon} height={75} width={75}></img>
              </a>
            ))}
          </div>
        )}
    </>
  );
};
export default Bannersocials;
