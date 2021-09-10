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

    const boxVariant = { 
        hidden: { 
            y: 50
        },
        visible: { 
            y: 0,
            transition: { 
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const skillVariant = { 
        hidden: { 
            y: 40,
            opacity: 0
        },
        visible: { 
            y: 0,
            opacity: 1,
            delay: 0.2
        }
    }


    return (
        <motion.div className = 'skill-slider'
        className = "skill-slider"
        variants = {boxVariant}
        animate = "visible"
        initial = "hidden"
        >
               
            {images.map((image, index) => (
            <motion.div className ="skill-item"
            className = "skill-item"
            variants = {skillVariant}
            animate = "visible"
            initial = "hidden"
                >
                <img className = "skill-img" src={image} index ={index}/>
            </motion.div>
            ))}
        </motion.div>
    )
}

export default Skills; 