import React, { useState } from "react";
import { Link } from "react-scroll";

const NavItem = ({text}) => { 

    return ( 
        <>
        <Link to ={text} smooth ={true} className ="nav-item">{text}</Link>
        </>
    )
}

export default NavItem