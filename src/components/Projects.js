import ProjectCard from './ProjectCard'
import weatherAppImage from '../images/WeatherApp.png'
import klumpersWebsiteImage from '../images/akkerbouwbedrijfklumpers.jpg'
import cryptoHeroezBotImage from '../images/cryptoHeroesBot.png'


const Projects = () => { 
    return ( 
        <div className = "projects-container"> 
            <ProjectCard image = {weatherAppImage} name="WeatherApp" description = "A weatherApp where I use the openWeather API with Animated weather icons"/>
            <ProjectCard image = {cryptoHeroezBotImage} name="CryptoHeroez Discord BOT" description = "I made a Discord bot to track contents of Cardano(ADA) wallet adresses. Users can give the bot commands with (!..) and see if their NFT's are real and the bot assigns them a role accordingly"/>
            <ProjectCard image = {klumpersWebsiteImage} name="Akkerbouwbedrijf Klumpers Website" description = "A website I made for our family farm, you can find all the crops we farm and more!"/>
        </div>
    )
}

export default Projects; 