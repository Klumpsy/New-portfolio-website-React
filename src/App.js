import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Over from "./components/Over"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './index.css';

//https://www.youtube.com/watch?v=1vKiPwEYbyk
//https://www.framer.com/docs/animation/          ANIMATION

function App() {

  const [width, setWidth] = useState(window.innerWidth); 

  useEffect(() => { 
    window.addEventListener('resize', () => setWidth(window.innerWidth)); 
  }, []);
  
  return (
    <div className="App">
     <Header width = {width}/>
     <About />
     <Over/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
