import ReactDOM from "react-dom/client";
import Home from "./pages/Home"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Design from "./pages/Design";
import Requirements from "./pages/Requirements";
import Faq from "./pages/Faq";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="design" element={<Design/>}/>
          <Route path="requirements" element={<Requirements/>}/>
          <Route path="faq" element={<Faq/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
