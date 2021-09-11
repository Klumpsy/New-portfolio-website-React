import React, { useState } from "react"
import NavItem from "./NavItem";



const Header = ({width}) => { 

    const [openMobile, setOpenMobile] = useState(false)

   
    return (
        <div className="header-container">
            <a className="home-button" href="/">BK</a>
            {width < 480 ? 
            <nav className = "mobile-nav-container">
                <button onClick={() => setOpenMobile(!openMobile)} 
                className="hamburger-button"><i className={openMobile ? "fa fas fa-times fa-lg" : "fa fas fa-bars fa-lg"}></i></button>

                {!openMobile ? 
                <ul className = "mobile-menu mobile-menu-close">
                    <NavItem text="Over" pageId='about'/>
                    <NavItem text="Projecten" pageId='projects'/>
                    <NavItem text="Contact" pageId='contact'/>
                </ul>
                :
                <ul className = "mobile-menu mobile-menu-open">
                <NavItem text="Over" pageId='about'/>
                <NavItem text="Projecten" pageId='projects'/>
                <NavItem text="Contact" pageId='contact'/>
                </ul>
                }
            </nav>
            :
            <nav>
                <ul className = "header-menu">
                    <NavItem text="About" pageId='about'/>
                    <NavItem text="Projects" pageId='projects'/>
                    <NavItem text="Contact" pageId='contact'/>
                </ul>
            </nav>}
        </div>
    )
}

export default Header;