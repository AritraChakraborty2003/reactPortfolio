/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://codemap.co.in/skillsAPI.php")
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
      <div className="SkillHolder w-12/12 bg-[#1E90FF]  p-5 flex flex-col justify-center items-center">
        <div>
          <div className="flex flex-col lg:flex-row lg:gap-x-5">
            <div className="h-20 w-20 mt-[-1.45vmin] hidden lg:block">
              <img
                src="./images/computer.webp"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <h1 className="text-center text-4xl lg:text-5xl font-bold text-white">
              Skills and <span className="text-[#feea33]">Abilities</span>
            </h1>
          </div>
          <p className="text-center text-white text-lg">
            ( Every skill you acquire doubles your odds of success )
          </p>
        </div>
        <div className="flex gap-y-5 gap-x-5 flex-wrap justify-center items-center mt-10">
          {data.map((val) => (
            <>
              <div className="cardHolder p-5 w-40 lg:w-52 bg-[#0c355b] shadow-xl flex flex-col  justify-center text-white font-medium items-center font-sans">
                <div className="imgHolder h-20 w-20">
                  <img
                    src={val.image}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
                <p className="text-center text-xl mt-5">{val.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
