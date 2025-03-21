import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


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
const Menu = () => {
    return (
        <div className="menu-container common-flex">
            <MenuNav/>
        </div>
    )
}

export default Menu;