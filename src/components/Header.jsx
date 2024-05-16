/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Header = () => {
  const [hamsection, setHamsection] = useState(false);

  return (
    <>
      <div className="  bg-mustardyellow p-2 flex">
        <div className="logoHolder flex gap-x-3 lg:gap-x-6 lg:w-[25%]">
          <img src="./images/cartoonFace.png" height={50} width={50}></img>
          <p className="mt-3 font-bold text-[4.5vmin] md:text-[3vmin] font-oxygen">
            Aritra's Portfolio
          </p>
        </div>
        {(screen.width <= 1700 && (
          <div className="supportArea hidden lg:block w-[31%] "></div>
        )) || <div className="supportArea hidden lg:block w-[45%] "></div>}
        {(screen.width <= 1700 && (
          <div className="supportArea hidden lg:block w-[50%] ">
            <div className="sectionHolder font-medium text-lg flex gap-x-6 items-center h-[100%]">
              <p>About-Me</p>
              <p>Skills</p>
              <p>Projects</p>
              <p>Education</p>
              <p>Achievements</p>
              <p>Experience</p>
            </div>
          </div>
        )) || (
          <div className="supportArea hidden lg:block w-[44%] ">
            <div className="sectionHolder font-medium text-lg flex gap-x-6 items-center h-[100%]">
              <p>About-Me</p>
              <p>Skills</p>
              <p>Projects</p>
              <p>Education</p>
              <p>Achievements</p>
              <p>Experience</p>
            </div>
          </div>
        )}
        <div className="hamBox block lg:hidden">
          <div className="hamHolder flex  items-center justify-end w-[40vmin] md:w-[60vmin] mt-3">
            <img
              src="./images/menu.png"
              height={30}
              width={30}
              onClick={() => {
                if (hamsection) {
                  setHamsection(false);
                } else {
                  setHamsection(true);
                }
              }}
            ></img>
          </div>
        </div>
      </div>
      {hamsection && (
        <div className="hamBox block lg:hidden">
          <div className="flex flex-col hamsection w-[100vw]  bg-mustardyellow p-3  mt-[-1vmin]">
            <ul>
              <li className="mt-3 font-poppins font-medium">About-me</li>
              <li className="mt-3 font-poppins font-medium">Skills</li>
              <li className="mt-3 font-poppins font-medium">Projects</li>
              <li className="mt-3 font-poppins font-medium">Education</li>
              <li className="mt-3 font-poppins font-medium">Achievements</li>
              <li className="mt-3 font-poppins font-medium">Experience</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
