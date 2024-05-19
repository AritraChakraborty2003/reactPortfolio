/* eslint-disable react/no-unescaped-entities */
import Particle from "./Particle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./overflow.css";
import Bannersocials from "./Bannersocials";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Development",
      "Backend Development",
      "AI/ML Projects",
      "Fullstack Development",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });

  return (
    <>
      <Particle />

      <div className="bannerHolder lg:h-[100vh] w-[100vw] text-white flex flex-wrap-reverse  ">
        {(screen.width >= 750 && screen.width <= 950 && (
          <div className="flex  justify-center lg:items-center leftPart w-[100vw] lg:w-[55vw] p-5 ">
            <div className="flex flex-col  lg:justify-center lg:items-center  bannerTextholder text-white font-poppins w-[95vw] lg:w-[100vmin]   ">
              <p className="text-7xl lg:text-7xl font-medium overflow-y-hidden">
                Hey Guest,
              </p>
              <p className="text-6xl lg:text-5xl font-medium overflow-y-hidden mt-3">
                I'm Aritra{" "}
                <span className="text-mustardyellow font-bold">
                  Chakraborty
                </span>
              </p>
              <p className="mt-5 text-4xl lg:text-4xl font-oxygen font-medium pb-2">
                I like{" "}
                <span style={{ color: "yellow", fontWeight: "bold" }}>
                  {" "}
                  {text}
                </span>
                <span style={{ color: "yellow" }}>
                  {" "}
                  <Cursor cursorStyle="|" />
                </span>
              </p>
              <div className="btnHolder p-2 bg-mustardyellow font-medium flex justify-center  gap-x-3 mt-5 w-[40vw] lg:w-[30vmin]">
                <img src="./images/resicon.png" height={30} width={30}></img>
                <button className="  text-black text-lg">My Resume</button>
              </div>

              <div className="socialsHolder mt-5 lg:mt-16">
                <Bannersocials />
              </div>
            </div>
          </div>
        )) ||
          (screen.width <= 1700 && (
            <div className="flex  justify-center lg:items-center leftPart w-[100vw] lg:w-[55vw] p-5 ">
              <div className="flex flex-col  lg:justify-center lg:items-center  bannerTextholder text-white font-poppins w-[95vw] lg:w-[100vmin]   ">
                <p className="text-4xl lg:text-7xl font-medium overflow-y-hidden">
                  Hey Guest,
                </p>
                <p className="text-3xl lg:text-5xl font-medium overflow-y-hidden mt-3">
                  I'm Aritra{" "}
                  <span className="text-mustardyellow font-bold">
                    Chakraborty
                  </span>
                </p>
                <p className="mt-5 text-2xl lg:text-4xl font-oxygen font-medium pb-2">
                  I like{" "}
                  <span style={{ color: "yellow", fontWeight: "bold" }}>
                    {" "}
                    {text}
                  </span>
                  <span style={{ color: "yellow" }}>
                    {" "}
                    <Cursor cursorStyle="|" />
                  </span>
                </p>
                <div className="btnHolder p-2 bg-mustardyellow font-medium flex justify-center  gap-x-3 mt-5 w-[60vw] lg:w-[30vmin]">
                  <img src="./images/resicon.png" height={30} width={30}></img>
                  <button className="  text-black text-lg">My Resume</button>
                </div>

                <div className="socialsHolder mt-5 lg:mt-16">
                  <Bannersocials />
                </div>
              </div>
            </div>
          )) || (
            <div className="flex  justify-center lg:items-center leftPart w-[100vw] lg:w-[55vw] p-5 ">
              <div className="flex flex-col  lg:justify-center lg:items-center  bannerTextholder text-white font-poppins w-[95vw] lg:w-[100vmin]   ">
                <p className="text-4xl lg:text-8xl font-medium overflow-y-hidden">
                  Hey Guest,
                </p>
                <p className="text-3xl lg:text-7xl font-medium overflow-y-hidden mt-3">
                  I'm Aritra{" "}
                  <span className="text-mustardyellow font-bold">
                    Chakraborty
                  </span>
                </p>
                <p className="mt-5 text-3xl lg:text-5xl font-oxygen font-medium pb-2">
                  I like{" "}
                  <span style={{ color: "yellow", fontWeight: "bold" }}>
                    {" "}
                    {text}
                  </span>
                  <span style={{ color: "yellow" }}>
                    {" "}
                    <Cursor cursorStyle="|" />
                  </span>
                </p>
                <div className="btnHolder p-2 bg-mustardyellow font-medium flex justify-center  gap-x-3 mt-5 w-[40vw] lg:w-[30vmin]">
                  <img src="./images/resicon.png" height={40} width={40}></img>
                  <button className="  text-black text-xl">My Resume</button>
                </div>

                <div className="socialsHolder mt-5 lg:mt-16">
                  <Bannersocials />
                </div>
              </div>
            </div>
          )}

        {(screen.width <= 1700 && (
          <div className="flex  lg:items-center rightPart w-[100vw] lg:w-[45vw] mt-10 lg:mt-0 justify-center lg:justify-start">
            <div className="flex lg:mt-[-5vmin] ml-[3vmin] 2xl:ml-[5vmin] justify-center items-center imgHolder h-[68vmin] w-[68vmin] rounded-ext bg-mustardyellow">
              <div className="imgHolder h-[68vmin] w-[68vmin] mt-[-2vmin] flex justify-center items-center">
                <img
                  src="./images/cartoonFace.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
            </div>
          </div>
        )) || (
          <div className="flex  lg:items-center rightPart w-[100vw] lg:w-[45vw] ">
            <div className="flex ml-[1vmin] 2xl:ml-[10vmin] justify-center items-center imgHolder h-[56vmin] w-[56vmin] rounded-ext1 bg-mustardyellow">
              <div className="imgHolder h-[50vmin] w-[50vmin]">
                <img
                  src="./images/cartoonFace.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Banner;
