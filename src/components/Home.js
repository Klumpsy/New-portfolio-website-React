import React, { useEffect } from 'react'; 
import Skills from './Skills';
import { motion, useAnimation } from "framer-motion"; 
import profilepicture from "../images/picture.jpg"
import { useInView } from "react-intersection-observer";


const Home = ({width}) => { 

    const {ref, inView} = useInView();
    const TextAnimation = useAnimation();
   

    useEffect(() => { 
        inView ?  

            TextAnimation.start({
                x: 0
            }) 
        :   
            TextAnimation.start({
                x: -40
            }) 
    },[inView])
        
    return (
        <div className = "home-container" id="Home">
             <div ref={ref} className = "about-info">
                 <motion.h1
                 animate = {TextAnimation}>
                 Welkom
                 </motion.h1>
            </div> 
            <img ref={ref} className = "about-picture" src={profilepicture}
            />
            <Skills/>
        </div>
    )
};

export default Home


