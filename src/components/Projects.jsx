const Projects = () => {
  return (
    <div className="aboutArea w-[100vw] bg-supportBlue">
      <div className="header p-5   flex  gap-x-0 lg:gap-x-1 justify-center h-27">
        <div className="imgHolder p-2  w-28 lg:w-44 flex justify-center items-center h-12/12 mt-[-1vmin]">
          <img
            src="./images/project.png"
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <p className="text-center text-white text-4xl lg:text-6xl font-poppins font-bold p-3 lg:ml-[-2vmin]">
          My <span className="text-yellow">Projects</span>
        </p>
      </div>
    </div>
  );
};
export default Projects;
