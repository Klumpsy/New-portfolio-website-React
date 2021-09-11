import { useState } from 'react'
import ProjectCard from './ProjectCard'
import weatherAppImage from '../images/WeatherApp.png'
import klumpersWebsiteImage from '../images/akkerbouwbedrijfklumpers.jpg'
import cryptoHeroezBotImage from '../images/cryptoHeroesBot.png'

const projects = 
[
<ProjectCard image = {weatherAppImage} 
             name="WeatherApp" 
             description = "A weatherApp where I use the openWeather API with Animated weather icons"
             gitLink = ""
             liveLink =""/>,
<ProjectCard image = {cryptoHeroezBotImage} 
             name="CryptoHeroez Discord BOT" 
             description = "I made a Discord bot to track contents of Cardano(ADA) wallet adresses. Users can give the bot commands with (!..) and see if their NFT's are real and the bot assigns them a role accordingly"
             gitLink = "https://github.com/Klumpsy/Crypto-Heroez-Bot"
             liveLink = "https://discord.gg/3AxddtFb"/>,
<ProjectCard image = {klumpersWebsiteImage} 
             name="Akkerbouwbedrijf Klumpers Website" 
             description = "A website I made for our family farm, you can find all the crops we farm and more!"
             gitLink = "https://github.com/Klumpsy/Website-Akkerbouwbedrijf-Klumpers"
             liveLink ="http://www.akkerbouwbedrijfklumpers.nl"/>
]


const Projects = () => { 
    const [currentImage, setCurrentImage] = useState(0);
    const length = projects.length

    const nextSlide = () => { 
        setCurrentImage(currentImage === length -1 ? 0 : currentImage + 1)
    }

    const previousSlide = () => { 
        setCurrentImage(currentImage === 0 ? length -1 : currentImage - 1)
    }

    
    return ( 
        
        <div className = "projects-container" id="projects"> 
            <i className="arrow fa fas fa-arrow-circle-left fa-4x" onClick ={previousSlide}></i>
           {
               projects.map((project, index) => { 
                   return (
                       <div className ={index === currentImage ? 'project active': 'project'} key={index}>
                            {index === currentImage? project : ""}
                        </div>
                   )
               })
           }
            <i className="arrow fa fas fa-arrow-circle-right fa-4x" onClick = {nextSlide}></i>
        </div>
    );
};

export default Projects; 