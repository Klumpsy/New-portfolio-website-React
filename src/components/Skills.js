import React, { useState } from "react";
import Slider from "react-slick"; 
import bootstrap from "../images/Bootstrap-01.png"; 
import html from "../images/HTML-5-01.png"; 
import css from "../images/CSS-3-01.png"; 
import javaScript from "../images/JavaScript-01.png"; 
import react from "../images/React-01.png"; 
import nodeJs from "../images/Node-JS-02.png"; 
import mongoDb from "../images/Mongodb-02.png"; 
import git from "../images/Git-06.png"; 
import { motion } from "framer-motion";


const images = [bootstrap, html, css, javaScript, react, nodeJs, mongoDb, git];


const Skills = () => { 


    return (
        <motion.div className = 'skill-slider'
        animate = {{
            y: 0,
            staggerChilderen: 0.2
        }}
        initial = {{
            y: 60
        }}
        transition = {{
           type: "spring",
        }}>
               
            {images.map((image, index) => (
                <motion.div
                animate={{
                    y: 0
                }}
                initial = {{
                    y: 20
                }}
                >
                    <img className = "skill-img" src={image} index ={index}/>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Skills; 