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
                 <p>Ik ben Bart, 29 jaar en mijn focus en interesse <br/> 
                    liggen voornamelijk bij het ontwikkelen <br/> 
                    van frontend apps met Javascript. <br/> 
                    Sinds kort ben ik voornamelijk met React bezig <br/>
                    en lees ik zoveel mogelijk over UI/UX design en<br/>
                    probeer ik me alle facetten van de MERN stack <br/>
                    meester te maken!<br/>
                    <br/>
                    Gelukkig heb ik daar nog veel in te leren :) <br/>
                    <br/>
                    Kijk gerust op mijn LinkedIn en Github! 
                 </p>
                 <Socials/>
            </div> 
        </div>
    )
}

export default About;