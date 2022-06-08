import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div data-theme={`${darkMode && 'dark'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
