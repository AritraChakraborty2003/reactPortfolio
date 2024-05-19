/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <>
      <div className="bg-darkwhite">
        <div className="font-roboto footer w-12/12 bg-darkBlue p-5 flex flex-wrap">
          <div className="w-[100vw] lg:w-1/3 pb-3 flex flex-col justify-center   text-white">
            <p className="text-2xl md:text-[4vmin] font-bold pb-2 font-poppins">
              Aritra's Portfolio
            </p>
            <p className="mt-1 text-md md:text-[2.75vmin]">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>
          <div className="w-[100vw] lg:w-1/3 mt-1 ">
            <ul className="flex flex-col justify-center w-12/12 h-12/12 lg:mt-[1vmin] lg:ml-[10vmin] text-white">
              <li className="text-[6vmin] md:text-[3.45vmin] font-bold text-white">
                Quick Links
              </li>
              <li className=" text-[4vmin] md:text-[2.75vmin] mt-3 ">
                About me
              </li>
              <li className=" text-[4vmin] md:text-[2.75vmin] mt-1">
                Projects
              </li>
              <li className=" text-[4vmin] md:text-[2.75vmin] mt-1">Skills</li>
              <li className=" text-[4vmin] md:text-[2.75vmin] mt-1">
                Education
              </li>
              <li className=" text-[4vmin] md:text-[2.75vmin] mt-1">
                Experience
              </li>
            </ul>
          </div>
          <div className="mt-1 w-[100vw] lg:w-1/3 pb-2 text-white font-poppins  font-bold ">
            <p className="mt-4 font-roboto md:text-[4vmin]">Contact Info</p>
            <ul className="mt-[4vmin] text-white md:mt-4 font-poppins font-medium">
              <div className="flex gap-x-2">
                <img src="./images/phone.webp" height={25} width={25}></img>
                <li className=" text-[4vmin] md:text-[2.35vmin] mt-2">
                  +91 7585824862
                </li>
              </div>
              <li className=" text-[4vmin] lg:text-[2.35vmin] mt-2 ml-[-0.35vmin]">
                <div className="flex gap-x-2">
                  <img src="./images/mail3.png" height={40} width={40}></img>
                  <li className=" text-[4vmin] md:text-[2.35vmin] mt-2">
                    aritra.chakraborty203@gmail.com
                  </li>
                </div>
              </li>
              <li className=" text-[4vmin] lg:text-[2.35vmin] mt-2">
                <div className="flex gap-x-2">
                  <img src="./images/globe1.png" height={30} width={35}></img>
                  &nbsp;
                  <li className=" text-[4vmin] md:text-[2.35vmin] mt-2">
                    www.aritraportfolio.com
                  </li>
                </div>
              </li>
            </ul>
          </div>
          <div className="lastSection w-screen border-supportBlue border-t-4 mt-3">
            <p className="text-center mt-4 text-white text-md">
              Thanks for visiting my website 🙏
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
