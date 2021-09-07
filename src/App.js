import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import './index.css';



function App() {

  const [width, setWidth] = useState(window.innerWidth); 

  useEffect(() => { 
    window.addEventListener('resize', () => setWidth(window.innerWidth)); 
  }, []);
  
  return (
    <div className="App">
     <Header width = {width}/>
     <About />
    </div>
  );
}

export default App;
