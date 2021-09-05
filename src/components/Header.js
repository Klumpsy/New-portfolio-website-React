import React from "react"

const Header = () => { 
    return (
        <div className="header-container">
            <a className="home-button" href="/">BK</a>
            <div>
                <ul className = "header-menu">
                    <li><a href="">Over</a></li>
                    <li><a href="">Projecten</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;