import React, { useState } from "react"
import NavItem from "./NavItem";

const Header = ({width}) => { 

    const [openMobile, setOpenMobile] = useState(false)

   
    return (
    <div className="header-container">
    
        <a className="home-button" href="/">BK</a>
        {width < 780 ?
        <nav className = "mobile-nav-container">
            <button onClick={() => setOpenMobile(!openMobile)}
            className="hamburger-button"><i className={openMobile ? "fa fas fa-times fa-lg" : "fa fas fa-bars fa-lg"}></i></button>
            {!openMobile ?
            <ul className = "mobile-menu mobile-menu-close">
                <NavItem text="Home"/>
                <NavItem text="Over"/>
                <NavItem text="Projecten"/>
                <NavItem text="Contact"/>
            </ul>
            :
            <ul className = "mobile-menu mobile-menu-open">
            <NavItem text="Home"/>
            <NavItem text="About"/>
            <NavItem text="Projects"/>
            <NavItem text="Contact"/>
            </ul>
            }
        </nav>
        :
        <nav>
            <ul className = "header-menu">
                <NavItem text="Home"/>
                <NavItem text="About"/>
                <NavItem text="Projects"/>
                <NavItem text="Contact"/>
            </ul>
        </nav>}
   
    </div>
    )
}

export default Header;