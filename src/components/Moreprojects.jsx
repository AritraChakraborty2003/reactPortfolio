/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Moreprojects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [filteredProduct, setFilteredProduct] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const data = location.state;
  function handleChange(x) {
    setFilterVal(x);
    const dataFilter = data.filter((val) => val.techstack === x);
    setFilteredProduct(dataFilter);
  }

  return (
    <>
      <Header />
      <div className="pb-5 pt-5 bg-supportBlue ">
        <div>
          <button
            className="bg-mustardyellow text-black p-2 ml-2"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div className="mt-3 boxHolder pb-3 flex-wrap pt-1 w-screen text-white flex justify-center items-center gap-x-4 gap-y-2">
          <div
            id="btn"
            className="boxHolder h-10 border-white border-2 w-24 md:w-24  flex justify-center items-center"
            onMouseEnter={() => {
              document.getElementById("btn").style.backgroundColor = "white";
              document.getElementById("btn").style.color = "black";
              document.getElementById("btn").style.fontWeight = "bold";
            }}
            onMouseLeave={() => {
              document.getElementById("btn").style.backgroundColor = "#0d47a1";
              document.getElementById("btn").style.color = "white";
              document.getElementById("btn").style.fontWeight = "normal";
            }}
            onClick={() => {
              handleChange("AI/ML");
            }}
          >
            <p>AI/ML</p>
          </div>
          <div
            id="btn1"
            onMouseEnter={() => {
              document.getElementById("btn1").style.backgroundColor = "white";
              document.getElementById("btn1").style.color = "black";
              document.getElementById("btn1").style.fontWeight = "bold";
            }}
            onMouseLeave={() => {
              document.getElementById("btn1").style.backgroundColor = "#0d47a1";
              document.getElementById("btn1").style.color = "white";
              document.getElementById("btn1").style.fontWeight = "normal";
            }}
            onClick={() => {
              handleChange("Android");
            }}
            className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
          >
            <p>Android</p>
          </div>
          <div
            id="btn2"
            onMouseEnter={() => {
              document.getElementById("btn2").style.backgroundColor = "white";
              document.getElementById("btn2").style.color = "black";
              document.getElementById("btn2").style.fontWeight = "bold";
            }}
            onMouseLeave={() => {
              document.getElementById("btn2").style.backgroundColor = "#0d47a1";
              document.getElementById("btn2").style.color = "white";
              document.getElementById("btn2").style.fontWeight = "normal";
            }}
            onClick={() => {
              handleChange("Django");
            }}
            className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
          >
            <p>Django</p>
          </div>
          <div
            id="btn3"
            onMouseEnter={() => {
              document.getElementById("btn3").style.backgroundColor = "white";
              document.getElementById("btn3").style.color = "black";
              document.getElementById("btn3").style.fontWeight = "bold";
            }}
            onMouseLeave={() => {
              document.getElementById("btn3").style.backgroundColor = "#0d47a1";
              document.getElementById("btn3").style.color = "white";
              document.getElementById("btn3").style.fontWeight = "normal";
            }}
            className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
            onClick={() => {
              handleChange("Lamp Stack");
            }}
          >
            <p>Lamp Stack</p>
          </div>
          <div
            id="btn4"
            onMouseEnter={() => {
              document.getElementById("btn4").style.backgroundColor = "white";
              document.getElementById("btn4").style.color = "black";
              document.getElementById("btn4").style.fontWeight = "bold";
            }}
            onMouseLeave={() => {
              document.getElementById("btn4").style.backgroundColor = "#0d47a1";
              document.getElementById("btn4").style.color = "white";
              document.getElementById("btn4").style.fontWeight = "normal";
            }}
            className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
            onClick={() => {
              handleChange("MERN Stack");
            }}
          >
            <p>MERN Stack</p>
          </div>
          <div
            id="btn5"
            onMouseEnter={() => {
              document.getElementById("btn5").style.backgroundColor = "white";
              document.getElementById("btn5").style.color = "black";
              document.getElementById("btn5").style.fontWeight = "bold";
            }}
            onMouseLeave={() => {
              document.getElementById("btn5").style.backgroundColor = "#0d47a1";
              document.getElementById("btn5").style.color = "white";
              document.getElementById("btn5").style.fontWeight = "normal";
            }}
            className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
            onClick={() => {
              handleChange("react.js");
            }}
          >
            <p>react.js</p>
          </div>
          {screen.width <= 1000 && (
            <>
              <div
                id="btn6"
                onMouseEnter={() => {
                  document.getElementById("btn6").style.backgroundColor =
                    "white";
                  document.getElementById("btn6").style.color = "black";
                  document.getElementById("btn6").style.fontWeight = "bold";
                }}
                onMouseLeave={() => {
                  document.getElementById("btn6").style.backgroundColor =
                    "#0d47a1";
                  document.getElementById("btn6").style.color = "white";
                  document.getElementById("btn6").style.fontWeight = "normal";
                }}
                className="boxHolder h-10 border-white border-2  pl-2 pr-2 "
                onClick={() => {
                  handleChange("react.js+Firebase");
                }}
              >
                <p className="mt-1">react.js + Firebase</p>
              </div>
              <div
                id="btn7"
                onMouseEnter={() => {
                  document.getElementById("btn7").style.backgroundColor =
                    "white";
                  document.getElementById("btn7").style.color = "black";
                  document.getElementById("btn7").style.fontWeight = "bold";
                }}
                onMouseLeave={() => {
                  document.getElementById("btn7").style.backgroundColor =
                    "#0d47a1";
                  document.getElementById("btn7").style.color = "white";
                  document.getElementById("btn7").style.fontWeight = "normal";
                }}
                className="boxHolder h-10 border-white border-2  w-24 md:w-24  flex justify-center items-center"
                onClick={() => {
                  handleChange("TS+next.js");
                }}
              >
                <p>TS+next.js</p>
              </div>
              <div
                id="btn8"
                onMouseEnter={() => {
                  document.getElementById("btn8").style.backgroundColor =
                    "white";
                  document.getElementById("btn8").style.color = "black";
                  document.getElementById("btn8").style.fontWeight = "bold";
                }}
                onMouseLeave={() => {
                  document.getElementById("btn8").style.backgroundColor =
                    "#0d47a1";
                  document.getElementById("btn8").style.color = "white";
                  document.getElementById("btn8").style.fontWeight = "normal";
                }}
                className="boxHolder h-10 border-white border-2  w-20 md:w-24 flex justify-center items-center"
                onClick={() => {
                  handleChange("Basic Web");
                }}
              >
                <p>Basic web</p>
              </div>
              <div
                id="btn9"
                onMouseEnter={() => {
                  document.getElementById("btn9").style.backgroundColor =
                    "white";
                  document.getElementById("btn9").style.color = "black";
                  document.getElementById("btn9").style.fontWeight = "bold";
                }}
                onMouseLeave={() => {
                  document.getElementById("btn9").style.backgroundColor =
                    "#0d47a1";
                  document.getElementById("btn9").style.color = "white";
                  document.getElementById("btn9").style.fontWeight = "normal";
                }}
                className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
                onClick={() => {
                  handleChange("Java Spring");
                }}
              >
                <p>Java Spring</p>
              </div>
              <div
                id="btn10"
                onMouseEnter={() => {
                  document.getElementById("btn10").style.backgroundColor =
                    "white";
                  document.getElementById("btn10").style.color = "black";
                  document.getElementById("btn10").style.fontWeight = "bold";
                }}
                onMouseLeave={() => {
                  document.getElementById("btn10").style.backgroundColor =
                    "#0d47a1";
                  document.getElementById("btn10").style.color = "white";
                  document.getElementById("btn10").style.fontWeight = "normal";
                }}
                className="boxHolder h-10 border-white border-2  p-2 md:w-27 flex justify-center items-center"
                onClick={() => {
                  handleChange("UI-Tools");
                }}
              >
                UI-Tools
              </div>

              <div
                id="btn12"
                onMouseEnter={() => {
                  document.getElementById("btn12").style.backgroundColor =
                    "white";
                  document.getElementById("btn12").style.color = "black";
                  document.getElementById("btn12").style.fontWeight = "bold";
                }}
                onMouseLeave={() => {
                  document.getElementById("btn12").style.backgroundColor =
                    "#0d47a1";
                  document.getElementById("btn12").style.color = "white";
                  document.getElementById("btn12").style.fontWeight = "normal";
                }}
                className="boxHolder h-10 border-white border-2  p-2 md:w-27 flex justify-center items-center"
                onClick={() => {
                  setFilterVal("");
                  setFilteredProduct([]);
                }}
              >
                Remove Filters
              </div>
            </>
          )}
        </div>
        <div className="hidden lg:block">
          <div className="boxHolder  h-16 text-white  w-screen flex justify-center items-center gap-x-2">
            <div
              id="btn6"
              onMouseEnter={() => {
                document.getElementById("btn6").style.backgroundColor = "white";
                document.getElementById("btn6").style.color = "black";
                document.getElementById("btn6").style.fontWeight = "bold";
              }}
              onMouseLeave={() => {
                document.getElementById("btn6").style.backgroundColor =
                  "#0d47a1";
                document.getElementById("btn6").style.color = "white";
                document.getElementById("btn6").style.fontWeight = "normal";
              }}
              className="boxHolder h-10 border-white border-2  pl-2 pr-2"
              onClick={() => {
                handleChange("react.js+Firebase");
              }}
            >
              <p className="mt-1">react.js + Firebase</p>
            </div>
            <div
              id="btn7"
              onMouseEnter={() => {
                document.getElementById("btn7").style.backgroundColor = "white";
                document.getElementById("btn7").style.color = "black";
                document.getElementById("btn7").style.fontWeight = "bold";
              }}
              onMouseLeave={() => {
                document.getElementById("btn7").style.backgroundColor =
                  "#0d47a1";
                document.getElementById("btn7").style.color = "white";
                document.getElementById("btn7").style.fontWeight = "normal";
              }}
              className="boxHolder h-10 border-white border-2  w-24 md:w-24  flex justify-center items-center"
              onClick={() => {
                handleChange("TS+next.js");
              }}
            >
              <p>TS+next.js</p>
            </div>
            <div
              id="btn8"
              onMouseEnter={() => {
                document.getElementById("btn8").style.backgroundColor = "white";
                document.getElementById("btn8").style.color = "black";
                document.getElementById("btn8").style.fontWeight = "bold";
              }}
              onMouseLeave={() => {
                document.getElementById("btn8").style.backgroundColor =
                  "#0d47a1";
                document.getElementById("btn8").style.color = "white";
                document.getElementById("btn8").style.fontWeight = "normal";
              }}
              className="boxHolder h-10 border-white border-2  w-20 md:w-24 flex justify-center items-center"
              onClick={() => {
                handleChange("Basic Web");
              }}
            >
              <p>Basic web</p>
            </div>
            <div
              id="btn9"
              onMouseEnter={() => {
                document.getElementById("btn9").style.backgroundColor = "white";
                document.getElementById("btn9").style.color = "black";
                document.getElementById("btn9").style.fontWeight = "bold";
              }}
              onMouseLeave={() => {
                document.getElementById("btn9").style.backgroundColor =
                  "#0d47a1";
                document.getElementById("btn9").style.color = "white";
                document.getElementById("btn9").style.fontWeight = "normal";
              }}
              className="boxHolder h-10 border-white border-2  w-24 md:w-24 flex justify-center items-center"
              onClick={() => {
                handleChange("Java Spring");
              }}
            >
              <p>Java Spring</p>
            </div>
            <div
              id="btn10"
              onMouseEnter={() => {
                document.getElementById("btn10").style.backgroundColor =
                  "white";
                document.getElementById("btn10").style.color = "black";
                document.getElementById("btn10").style.fontWeight = "bold";
              }}
              onMouseLeave={() => {
                document.getElementById("btn10").style.backgroundColor =
                  "#0d47a1";
                document.getElementById("btn10").style.color = "white";
                document.getElementById("btn10").style.fontWeight = "normal";
              }}
              className="boxHolder pb-2 border-white border-2  p-2  flex justify-center items-center"
              onClick={() => {
                handleChange("UI-Tools");
              }}
            >
              UI-Tools
            </div>

            <div
              id="btn12"
              onMouseEnter={() => {
                document.getElementById("btn12").style.backgroundColor =
                  "white";
                document.getElementById("btn12").style.color = "black";
                document.getElementById("btn12").style.fontWeight = "bold";
              }}
              onMouseLeave={() => {
                document.getElementById("btn12").style.backgroundColor =
                  "#0d47a1";
                document.getElementById("btn12").style.color = "white";
                document.getElementById("btn12").style.fontWeight = "normal";
              }}
              className="boxHolder pb-2 border-white border-2  p-2 md:w-27 flex justify-center items-center"
              onClick={() => {
                setFilterVal("");
                setFilteredProduct([]);
              }}
            >
              Remove Filters
            </div>
          </div>
        </div>
        {(filteredProduct.length === 0 && filterVal === "" && (
          <div className="projectsHolder w-screen p-5 flex justify-center items-center flex-wrap gap-y-4 gap-x-10">
            {data.map((val, idx) => (
              <div
                className="projectsBox h-[60vmin]  w-[99vw] md:h-[37vmin] md:w-[64vmin] border-cardBlue border-4 flex items-end"
                style={{
                  backgroundImage: `url(${val.pimage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                onMouseEnter={() => {
                  document.getElementById(idx).innerHTML = ` 
                 <p class="text-xl font-normal p-2">${val.pname}</p>
                  <div class=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>${val.pdetails}</p>
                  </div>
                  <div class="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div class="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div class="h-5 w-5">
                        <img
                          src="./images/live.png"
                          class="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button class=" text-white p-2">
                        <a href=${val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div class="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div class="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          class="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button class=" text-white p-2">
                        <a href=${val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
              `;
                }}
                onMouseLeave={() => {
                  document.getElementById(
                    idx
                  ).innerHTML = `<p class="text-xl font-normal p-2">${val.pname}</p>`;
                }}
              >
                <div
                  id={idx}
                  className="bg-black w-screen opacity-85 text-white"
                >
                  <p className="text-xl font-normal p-2">{val.pname}</p>
                </div>
              </div>
            ))}
          </div>
        )) ||
          (filteredProduct.length === 0 && filterVal != "" && (
            <div className="projectsHolder w-screen flex justify-center items-center h-96">
              <p className="text-3xl text-white font-normal pb-2">
                0 Results Found
              </p>
            </div>
          )) ||
          (filteredProduct.length != 0 && filterVal != "" && (
            <div className="projectsHolder w-screen p-5 flex justify-center items-center flex-wrap gap-y-4 gap-x-10">
              {filteredProduct.map((val, idx) => (
                <div
                  className="projectsBox h-[60vmin]  w-[99vw] md:h-[37vmin] md:w-[64vmin] border-cardBlue border-4 flex items-end"
                  style={{
                    backgroundImage: `url(${val.pimage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  onMouseEnter={() => {
                    document.getElementById(idx).innerHTML = ` 
                 <p class="text-xl font-normal p-2">${val.pname}</p>
                  <div class=" bg-darkwhite w-full text-black p-2 font-normal lg:text-lg text-sm font-oxygen">
                    <p>${val.pdetails}</p>
                  </div>
                  <div class="btnHolder bg-darkwhite w-full text-black p-2 font-semibold flex gap-x-12">
                    <div class="flex gap-x-[1vmin] bg-black p-2 justify-center items-center">
                      <div class="h-5 w-5">
                        <img
                          src="./images/live.png"
                          class="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button class=" text-white p-2">
                        <a href=${val.pLiveLink} target="_blank">
                          Live Link
                        </a>
                      </button>
                    </div>
                    <div class="flex gap-x-[1vmin] bg-black pl-2 justify-center items-center">
                      <div class="h-5 w-5">
                        <img
                          src="./images/giticon.png"
                          class="max-w-full max-h-full object-contain"
                        ></img>
                      </div>
                      <button class=" text-white p-2">
                        <a href=${val.pgitLink} target="_blank">
                          Github Link
                        </a>
                      </button>
                    </div>
                  </div>
              `;
                  }}
                  onMouseLeave={() => {
                    document.getElementById(
                      idx
                    ).innerHTML = `<p class="text-xl font-normal p-2">${val.pname}</p>`;
                  }}
                >
                  <div
                    id={idx}
                    className="bg-black w-screen opacity-85 text-white"
                  >
                    <p className="text-xl font-normal p-2">{val.pname}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
};
export default Moreprojects;
