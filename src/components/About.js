import React from 'react'; 
import profilepicture from "../images/picture.jpg"

const About = () => { 
    return (
        <div className = "about-container">
             <div className = "about-info">
                 <h1>Welkom</h1>
                 <p>Ik ben Bart Klumpers, 29 jaar en ik houd enorm van programmeren!</p>
            </div> 
            <img className = "about-picture" src={profilepicture}/>
        </div>
    )
};

export default About


