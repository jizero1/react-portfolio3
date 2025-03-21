import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaStickyNote } from "react-icons/fa";

const MenuNav = () => {
    return (
        <nav className="menu-nav">
            <ul className="menu-ul common-flex">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/project">PROJECT</Link></li>
            </ul>
        </nav>
    )
}
const MenuContact = () => {
    return (
        <div className="menu-contact common-flex">
            <FaEnvelope className="common-icon" />
            <FaStickyNote className="common-icon" />
            <FaGithub className="common-icon" />
        </div>
    )
}
const Menu = () => {
    const [mouseHover, setMouseHover] = useState(false);

    return (
        <div className={`menu-container common-flex ${mouseHover ? 'custom-cursor-hover' : 'custom-cursor'}`}
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}>
            <MenuNav />
            <MenuContact />
        </div>
    )
}

export default Menu;