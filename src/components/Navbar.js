import React from 'react'
//Import do CSS
import "./Navbar.css"

//Import do react router
import {Link, NavLink} from "react-router-dom"

//Import icons
import { AiFillHome, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            <NavLink to="/menu"><AiFillHome/></NavLink>
            <NavLink to="/search"><AiOutlineSearch/></NavLink>
            <NavLink to="/cart"><AiOutlineShoppingCart/></NavLink>
            <NavLink to="/profile"><BsFillPeopleFill/></NavLink>
        </div>
    </div>
  )
}

export default Navbar