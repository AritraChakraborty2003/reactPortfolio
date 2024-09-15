/* eslint-disable no-unused-vars */
import Banner from "./Banner";
import Skills from "./Skills";
import Header from "./Header";
import AboutSec from "./AboutSec";
import Education from "./Education";
import Projects from "./Projects";
import Achievement from "./Achievement";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Experience from "./Experience";
import Footer from "./Footer";
const Index = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FFD300");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {status === false ? (
        <div className="w-[100vw] h-[100vh] bg-supportBlue  flex justify-center items-center">
          <ClipLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <>
          <Header />
          <Banner />
          <AboutSec />
          <Skills />
          <Education />
          <Projects />
          <Achievement />
          <Experience />
          <Footer />
        </>
      )}
    </>
  );
};
export default Index;
