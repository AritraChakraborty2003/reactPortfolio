/* eslint-disable react/jsx-no-undef */
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import Index from "./components/Index";
import Moreprojects from "./components/Moreprojects";
import Banner from "./components/Banner";
import AboutSec from "./components/AboutSec";
import Bannersocials from "./components/Bannersocials";
import Education from "./components/Education";

import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Achieve2 from "./components/Achieve2";
import Achieve3 from "./components/Achieve3";
import TimeLine from "./components/TimeLine";
import CBot from "./CBot";
import Achieve1 from "./components/Achieve1";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Banner" element={<Banner />}></Route>
          <Route path="/About" element={<AboutSec />}></Route>
          <Route path="/BannerSocials" element={<Bannersocials />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Achievements" element={<Achievement />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/TimeLine" element={<TimeLine />}></Route>{" "}
          <Route path="/moreprojects" element={<Moreprojects />}></Route>{" "}
          <Route path="/Achieve1" element={<Achieve1 />}></Route>{" "}
          <Route path="/Achieve2" element={<Achieve2 />}></Route>{" "}
          <Route path="/Achieve3" element={<Achieve3 />}></Route>{" "}
        </Routes>
      </BrowserRouter>
      <CBot />
    </>
  );
};

export default App;
