import React, { useState } from 'react'; 
import Skills from './Skills';
import { motion } from "framer-motion"; 
import profilepicture from "../images/picture.jpg"

const About = () => { 

    const [isAnimating, setIsAnimating] = useState(true);

    return (
        <div className = "about-container">
             <div className = "about-info">
                 <motion.h1
                 animate = {{
                     x: 0
                 }}
                 initial = {{
                     x: -40
                 }}
                 >Welkom</motion.h1>
            </div> 
            <motion.img className = "about-picture" src={profilepicture}
            animate= {{
                x: 0,
                rotate: 360,
                opacity: 1
            }}
            initial = {{ 
                x: -460,
                opacity: 0.1
            }}
            transition = {{
                type: "spring",
                stiffness: 70,
                damping: 5
            }}
            
            />
            <Skills/>
        </div>
    )
};

export default About


