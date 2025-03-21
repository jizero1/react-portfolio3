import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/project">PROJECT</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;