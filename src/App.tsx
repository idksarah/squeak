import ReactDOM from "react-dom/client";
import Home from "./pages/Home"
import Overview from "./pages/Overview"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="overview" element={<Overview/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
