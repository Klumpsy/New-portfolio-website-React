import React, { useState } from "react"
import {Link, animateScroll} from 'react-scroll';

const NavItem = ({text, pageId}) => { 
 console.log(pageId)
    return ( 
        <>
        <Link
            className = "nav-link"
            activeClass="active"
            to={pageId}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >{text}</Link>
        </>
    )
}

export default NavItem