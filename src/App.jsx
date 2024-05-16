import { Route, Routes, BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import Index from "./components/Index";
import Banner from "./components/Banner";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Banner" element={<Banner />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
