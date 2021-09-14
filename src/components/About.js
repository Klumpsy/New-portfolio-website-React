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
                    van frontend apps met Javascript en <br/> 
                    sinds kort voornamelijk met React. 
                 </p>
                 <Socials/>
            </div> 
        </div>
    )
}

export default About;