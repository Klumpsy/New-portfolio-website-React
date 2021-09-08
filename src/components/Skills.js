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
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";


const images = [bootstrap, html, css, javaScript, react, nodeJs, mongoDb, git];


const Skills = () => { 

   
    return (
        <div className = 'skill-slider'>
            {images.map((image, index) => (
                <div>
                    <img className = "skill-img" src={image} index ={index}></img>
                </div>
            ))}
        </div>
    )
}

export default Skills; 