/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "skills")
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
      <div
        id="skills"
        className="SkillHolder w-12/12 font-poppins bg-supportBlue p-6 flex flex-col justify-center items-center"
      >
        <div>
          <div className="flex flex-col lg:flex-row lg:gap-x-5">
            <div className="h-20 w-20 mt-[-2vmin] hidden lg:block">
              <img
                src="./images/computer.webp"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <h1 className="text-center text-4xl lg:text-5xl font-bold text-white pb-4">
              Skills and <span className="text-yellow">Abilities</span>
            </h1>
          </div>
          <p className="text-center text-white text-lg">
            ( Every skill you acquire doubles your odds of success )
          </p>
        </div>
        <div className="flex gap-y-5 gap-x-5 flex-wrap justify-center items-center mt-10">
          {data.map((val) => (
            <>
              {(screen.width > 330 && (
                <div className="cardHolder p-5 w-36 lg:w-52 bg-cardBlue shadow-xl flex flex-col  justify-center text-white font-medium items-center font-sans">
                  <div className="imgHolder h-20 w-20">
                    <img
                      src={val.file}
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                  <p className="text-center text-xl mt-5">{val.name}</p>
                </div>
              )) ||
                (screen.width <= 330 && (
                  <div className="cardHolder  w-24 lg:w-52 bg-cardBlue shadow-xl flex flex-col  justify-center text-white font-medium items-center font-sans p-5">
                    <div className="imgHolder h-16 w-16">
                      <img
                        src={val.file}
                        className="max-w-full max-h-full object-contain"
                      ></img>
                    </div>
                    <p className="text-center text-sm mt-5 p-2">{val.name}</p>
                  </div>
                ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
