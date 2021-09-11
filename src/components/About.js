import React, { useEffect } from 'react'; 
import Skills from './Skills';
import { motion, useAnimation } from "framer-motion"; 
import profilepicture from "../images/picture.jpg"
import { useInView } from "react-intersection-observer";


const About = () => { 

    const {ref, inView} = useInView();
    const TextAnimation = useAnimation();
    const ImageAnimation = useAnimation(); 

    useEffect(() => { 
        inView ?  
            TextAnimation.start({
                x:0,
                transition: { 
                    type: 'spring', duration: 1, bounce: 0.2
                }
            }) &&
            ImageAnimation.start({
                x: 0,
                opacity: 1,

                transition: {
                    type: "spring", stiffness: 80, damping: 6
                }
            }) 
        : 
            TextAnimation.start({
                x: -40
            }) &&
            ImageAnimation.start({
                x: -360, opacity: 0.1,
            })
    },[inView])
        
    return (
        <div className = "about-container">
             <div ref={ref} className = "about-info">
                 <motion.h1
                 animate = {TextAnimation}
                 
                 >Welkom</motion.h1>
            </div> 
            <motion.img ref={ref} className = "about-picture" src={profilepicture}
            animate= {ImageAnimation}
            />
            <Skills/>
        </div>
    )
};

export default About


