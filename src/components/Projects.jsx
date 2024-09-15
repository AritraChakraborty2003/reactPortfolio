/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Projects = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  var cnt = 0;
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "projects")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  const [Hidden1, setHidden1] = useState(false);
  const [Hidden2, setHidden2] = useState(false);
  const [Hidden3, setHidden3] = useState(false);
  const [Hidden4, setHidden4] = useState(false);
  const [Hidden5, setHidden5] = useState(false);
  const [Hidden6, setHidden6] = useState(false);
  return (
    <div id="projects" className="aboutArea w-[100vw] bg-supportBlue pb-4">
      <div className="header p-5   flex  gap-x-2 justify-center h-27">
        <div className="imgHolder p-2  w-20 lg:w-24 flex justify-center items-center h:20 lg:h-12/12 mt-[-1vmin]">
          <img
            src="./images/projects.png"
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <p className="text-center text-white text-3xl lg:text-6xl font-poppins font-bold p-3 lg:ml-[-2vmin]">
          My <span className="text-yellow">Projects</span>
        </p>
      </div>

      <div className="projectsHolder w-screen p-5 flex justify-center items-center flex-wrap gap-y-4 gap-x-10">
        {data.slice(0, 6).map((val, idx) => (
          <div
            className="projectsBox h-[60vmin]  w-[99vw] md:h-[37vmin] md:w-[64vmin] 2xl:w-[60vmin] border-cardBlue border-4 flex items-end"
            style={{
              backgroundImage: `url("${val.pimage}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={() => {
              if (idx === 0) setHidden1(true);
              else if (idx === 1) setHidden2(true);
              else if (idx === 2) setHidden3(true);
              else if (idx === 3) setHidden4(true);
              else if (idx === 4) setHidden5(true);
              else if (idx === 5) setHidden6(true);
            }}
            onMouseLeave={() => {
              if (idx === 0) setHidden1(false);
              else if (idx === 1) setHidden2(false);
              else if (idx === 2) setHidden3(false);
              else if (idx === 3) setHidden4(false);
              else if (idx === 4) setHidden5(false);
              else if (idx === 5) setHidden6(false);
            }}
          >
            <div className="bg-black w-screen opacity-85 text-white">
              <p className="text-xl font-normal p-2">{val.pname}</p>
              {idx == 0 && Hidden1 && (
                <>
                  <div className=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>{val.pdetails}</p>
                  </div>
                  <div className="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div className="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/live.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div className="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              )}
              {idx == 1 && Hidden2 && (
                <>
                  <div className=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>{val.pdetails}</p>
                  </div>
                  <div className="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div className="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/live.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div className="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              )}
              {idx == 2 && Hidden3 && (
                <>
                  <div className=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>{val.pdetails}</p>
                  </div>
                  <div className="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div className="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/live.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div className="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              )}
              {idx == 3 && Hidden4 && (
                <>
                  <div className=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>{val.pdetails}</p>
                  </div>
                  <div className="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div className="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/live.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div className="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              )}
              {idx == 4 && Hidden5 && (
                <>
                  <div className=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>{val.pdetails}</p>
                  </div>
                  <div className="btnHolder bg-darkwhite w-full text-black p-2 font-normal flex gap-x-12">
                    <div className="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/live.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div className="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              )}
              {idx == 5 && Hidden6 && (
                <>
                  <div className=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>{val.pdetails}</p>
                  </div>
                  <div className="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div className="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/live.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div className="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div className="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          className="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button className=" text-white p-2">
                        <a href={val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="btnHolder w-screen flex justify-center mt-4">
        <button
          id="btn"
          className="bg-darkwhite text-black flex text-center p-2 text-md"
          onMouseEnter={() => {
            document.getElementById("btn").style.backgroundColor = "yellow";
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").style.fontWeight = "bold";
          }}
          onMouseLeave={() => {
            document.getElementById("btn").style.backgroundColor = "white";
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").style.fontWeight = "normal";
          }}
          onClick={() => {
            navigate("/moreprojects", { state: data });
          }}
        >
          More Projects
        </button>
      </div>
    </div>
  );
};
export default Projects;
