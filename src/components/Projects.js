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
             description = "Discord bot to track contents of Cardano wallet adresses. Start bot commands with (!..) and see if your NFT is real. Let the bot assigns you a role accordingly"
             gitLink = "https://github.com/Klumpsy/Crypto-Heroez-Bot"
             liveLink = "https://discord.gg/3AxddtFb"/>,
<ProjectCard image = {klumpersWebsiteImage} 
             name="Akkerbouwbedrijf Klumpers Website" 
             description = "A website I made for our family farm, you can find all the crops we farm and more!"
             gitLink = "https://github.com/Klumpsy/Website-Akkerbouwbedrijf-Klumpers"
             liveLink ="http://www.akkerbouwbedrijfklumpers.nl"/>
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