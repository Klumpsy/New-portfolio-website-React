import { useState } from 'react'
import ProjectCard from './ProjectCard'

import klumpersWebsiteImage from '../images/akkerbouwbedrijfklumpers.jpg'
import cryptoHeroezBotImage from '../images/cryptoHeroesBot.png'
import weatherappImage from '../images/project-weatherapp-react.jpg'
import chatappImage from "../images/chatApp.jpg"

const projects = 
[
<ProjectCard image = {cryptoHeroezBotImage} 
             name="CryptoHeroez Discord BOT" 
             description = "This bot tracks contents of Cardano wallet addresses. Start bot commands with (!..) and see if your NFT is real and way more!"
             gitLink = "https://github.com/Klumpsy/Crypto-Heroez-Bot"
             liveLink = "https://discord.gg/3AxddtFb"/>,
<ProjectCard image = {klumpersWebsiteImage} 
             name="Akkerbouwbedrijf Klumpers Website" 
             description = "A website I made for our family farm, you can find all the crops we farm and more!"
             gitLink = "https://github.com/Klumpsy/Website-Akkerbouwbedrijf-Klumpers"
             liveLink ="http://www.akkerbouwbedrijfklumpers.nl"/>,
<ProjectCard image = {weatherappImage} 
             name="React WeatherApp" 
             description = "A weatherApp made with react and the openweather API. Search for any city or village you want and check the weather!"
             gitLink = "https://github.com/Klumpsy/react-weatherApp"
             liveLink ="https://klumpsy.github.io/react-weatherApp/"/>,
<ProjectCard image = {chatappImage} 
             name="React Real-time Chat" 
             description = "A chat app I created with React, Chat Engine API and Firebase. You can login with Facebook and Google"
             gitLink = "https://github.com/Klumpsy/REACT-chat-app"
             liveLink ="https://klumpsychat.netlify.app/"/>               
]


const Projects = ({width}) => { 
    const [currentImage, setCurrentImage] = useState(0);
    const length = projects.length

    const nextSlide = () => { 
        setCurrentImage(currentImage === length -1 ? 0 : currentImage + 1)
    }

    const previousSlide = () => { 
        setCurrentImage(currentImage === 0 ? length -1 : currentImage - 1)
    }

    
    return ( 
        
        <div className = "projects-container" id="Projects"> 
            <i className= {width < 600 ? "arrow arrow-left fa fas fa-arrow-circle-left fa-2x": 
            "arrow arrow-left fa fas fa-arrow-circle-left fa-4x"} onClick ={previousSlide}></i>
           {
               projects.map((project, index) => { 
                   return (
                       <div className ={index === currentImage ? 'project active': 'project'} key={index}>
                            {index === currentImage? project : ""}
                        </div>
                   )
               })
           }
            <i className= {width < 600 ? "arrow arrow-right fa fas fa-arrow-circle-right fa-2x" : 
            "arrow arrow-right fa fas fa-arrow-circle-right fa-4x"} onClick = {nextSlide}></i>
        </div>
    );
};

export default Projects; 