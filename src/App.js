 import logo from './logo.svg';
import './App.css';
//import About from './components/About';

import Navbar from './components/Navbar';

import Textform from './components/Textform';
import { useState } from 'react';
function App() {
  return (
    // const[darkMode,setDarkMode]=useState(false);
   
   <>
  <Navbar title="Textutils" aboutext="about1"/>
  <div className="container my-3">
  <Textform heading="Enter the Text to Analyze"/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
