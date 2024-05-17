const Experience = () => {
  return (
    <div className="aboutArea w-[100vw] bg-supportBlue">
      <div className="header p-5   flex  gap-x-0 lg:gap-x-3 justify-center h-27">
        <div className="imgHolder p-2  w-28 lg:w-20 flex justify-center items-center h-12/12">
          <img
            src="./images/experience.png"
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <p className="text-center text-white text-4xl lg:text-6xl font-poppins font-bold p-3 lg:ml-[-2vmin]">
          My <span className="text-yellow">Experience</span>
        </p>
      </div>
    </div>
  );
};
export default Experience;
