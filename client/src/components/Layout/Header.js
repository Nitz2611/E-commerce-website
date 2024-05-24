import React from 'react'
import { NavLink, Link } from "react-router-dom";
// import logoImg from '../../../public/img/logo.png'
const Header = () => {
    return (
        <div id="header" className="flex align-center">
            <Link to='/' >
                <img src='/img/logo.png' className="logo" alt="logo" />
            </Link>
            <div>
                <ul id="navbar" className="flex align-center justify-center">
                    <li>
                        <NavLink to='/' className="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact us</NavLink>
                    </li>
                    <li id="bag1">
                        <NavLink to='/cart'>
                            <i className="fa-solid fa-bag-shopping" />
                        </NavLink>
                    </li>
                    <a href="/" id="close">
                        {" "}
                        <i className="fa-solid fa-xmark" />{" "}
                    </a>
                </ul>
            </div>
            <div id="mobile">
                <NavLink to='/cart'>
                    <i className="fa-solid fa-bag-shopping" />
                </NavLink>
                <i id="bar" className="fas fa-outdent" />
            </div>
        </div>

    )
}

export default Header
