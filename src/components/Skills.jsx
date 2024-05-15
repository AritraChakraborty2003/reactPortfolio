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
      <div className="SkillHolder w-[100vw] bg-[#1E90FF]  p-5 ">
        <h1 className="text-center text-5xl font-bold text-white">
          Skills and <span className="text-[#feea33]">Abilities</span>
        </h1>
        <div className="flex space-x-10 flex-wrap mt-10">
          {data.map((val) => (
            <>
              <div className="cardHolder  h-52 w-52 bg-[#052340] shadow-xl flex flex-col  justify-center text-white font-extrabold items-center font-sans">
                <div className="imgHolder h-24 w-24 ">
                  <img
                    src={val.image}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
                <p className="text-center text-2xl mt-5">{val.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
