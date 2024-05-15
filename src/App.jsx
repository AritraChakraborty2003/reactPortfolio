import { Route, Routes, BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import Index from "./components/Index";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
