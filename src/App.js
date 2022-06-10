import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Resume from "./pages/Home/Resume";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div data-theme={`${darkMode && "night"}`}>
      <div className='max-w-7xl mx-auto'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path={`/details/:id`} element={<Details />}></Route>
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
