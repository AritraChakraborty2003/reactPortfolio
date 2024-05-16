/* eslint-disable react/no-unescaped-entities */
import Particle from "./Particle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./overflow.css";

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

      <div className="bannerHolder lg:h-[100vh] w-[100vw] text-white flex flex-wrap">
        {screen.width <= 1700 && (
          <div className="flex  justify-center lg:items-center leftPart w-[100vw] lg:w-[55vw] p-5 border-white border-2">
            <div className="flex flex-col  lg:justify-center lg:items-center  bannerTextholder text-white font-poppins h-[80vmin] w-[95vw] lg:w-[100vmin]  border-white border-2 ">
              <p className="text-7xl font-medium overflow-y-hidden">
                Hey Guest,
              </p>
              <p className="text-5xl font-medium overflow-y-hidden mt-3">
                I'm Aritra{" "}
                <span className="text-mustardyellow font-bold">
                  Chakraborty
                </span>
              </p>
              <p className="mt-5 text-3xl font-oxygen font-medium pb-2">
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
              <div className="btnHolder p-2 bg-mustardyellow font-medium flex gap-x-5 mt-5">
                <img src="./images/resicon.png" height={30} width={30}></img>
                <button className="  text-black text-lg">Resume</button>
              </div>
            </div>
          </div>
        )}

        {(screen.width <= 1700 && (
          <div className="flex  lg:items-center rightPart w-[100vw] lg:w-[45vw] ">
            <div className="flex ml-[3vmin] 2xl:ml-[10vmin] justify-center items-center imgHolder h-[68vmin] w-[68vmin] rounded-ext bg-mustardyellow">
              <div className="imgHolder h-[60vmin] w-[60vmin]">
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
