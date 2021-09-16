import Socials from "./Socials"
import { useEffect } from "react";
import {motion, useAnimation} from 'framer-motion'; 
import { useInView } from "react-intersection-observer";

//About section 
const About = () => { 

//Animation with framer-motion
    const {ref, inView} = useInView();
    const TextAnimation = useAnimation();

    useEffect(() => { 
        inView ?  
            TextAnimation.start({
                y:0,
                transition: { 
                    type: 'spring', duration: 1, bounce: 0.2
                }
            }) 
        :   
            TextAnimation.start({
                y: -40
            }) 
          
    },[inView])

    return (
        <div className="about-page" id='About'>
            <div className = "over-info" ref ={ref}>
                 <motion.h1 animate={TextAnimation}>About</motion.h1>
                 <p>Hi there! I'm Bart, 29 years old and I love to
                     create clean and solid frond-end projects with
                     JavaScript! 
                    <br/>
                    <br/>
                    At this point in time I'm working alot with React, 
                    also I'm reading about UI/UX design and I try to master
                    all aspects of the MERN stack. 
                    <br/>
                    <br/> 
                    Luckily I still have a lot to learn :) 
                    <br/>
                    <br/>
                    Feel free to check my Github and LinkedIn or contact
                    me directly with the contact form.
                 </p>
                 <Socials/>
            </div> 
        </div>
    )
}

export default About;