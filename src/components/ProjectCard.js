import Button from "./Button";
import { motion, useMotionValue, useTransform } from "framer-motion"

const ProjectCard = ({name, description, image, gitLink, liveLink}) => { 
    const x = useMotionValue(0); 
    const y = useMotionValue(0); 
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]); 

    return (
        <div className = "card-wrapper">
             <motion.div className = "project-card" 
                         style={{x, y, rotateX, rotateY, z: 100}} 
                         drag 
                         dragElastic={0.16} 
                         dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                         whileTap={{cursor: "grabbing"}}>
            <h2>{name}</h2>
            <div className ="project-image">
                <img src={image}/>
            </div>
            <div className = "project-links">
                <p>{description}</p>
                <div className="project-button-container">
                    <a href= {liveLink} target = "_blank" >Check Live</a>
                    <a href={gitLink} target = "_blank" >Check Code</a>
                </div>
            </div>
        </motion.div>
        </div>
    )
}

export default ProjectCard 