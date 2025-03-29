import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaStickyNote } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";


const MenuNav = () => {
    return (
        <nav className="menu-nav">
            <ul className="menu-ul common-flex">
                <li><Link to="/"  className="common-link">HOME</Link></li>
                <li><Link to="/about" className="common-link">ABOUT</Link></li>
                <li><Link to="/project" className="common-link">PROJECTS</Link></li>
            </ul>
        </nav>
    )
}

const MenuContact = () => {
    // 메뉴아이콘을 클릭하면, 해당아이콘에 맞는 링크를 menuLink안에 보여준다.
    const [menuLinkText, setMenuLinkText] = useState('');
    const [menuLinkOpen, setMenuLinkOpen] = useState(false);
    const handleMenuLink = (text) => {
        setMenuLinkOpen(!menuLinkOpen);
        setMenuLinkText(text);
        // menuLinkOpen이 true인 상태에서 새로운 text가 들어오면 false로 변경하지 않는다
        if (menuLinkOpen === true) {
            if (menuLinkText !== text) {
                setMenuLinkOpen(true);
                setMenuLinkText(text);
            }
        }
    }

    // 컨택메뉴에서 복사버튼 클릭시 링크 복사 함수
    const handleCopy = () => {
        // 복사하려는 url은 menuLinkText에 저장되어있음
        navigator.clipboard.writeText(menuLinkText)
        .then(() => {
            alert("링크가 복사되었습니다.");
            console.log("링크복사 성공");
        })
        .catch(() => {
            console.log("링크복사 실패");
        });
    }
    return (
        <div className="menu-contact-container common-flex">
            <div className="menu-icons common-flex">
                <FaEnvelope className="common-icon" onClick={() => handleMenuLink("wlduddl4101@gmail.com")} />
                <FaStickyNote className="common-icon" onClick={() => handleMenuLink("https://blog.naver.com/jibbbang2")} />
                <FaGithub className="common-icon" onClick={() => handleMenuLink("https://github.com/jizero1")} />
            </div>
            {menuLinkOpen && (
                <div className="menuLinkContainer common-flex">
                    <p className="menuLink">{menuLinkText}</p>
                    <button onClick={handleCopy} className="menuLink-copyBtn common-flex"><FaCopy/></button>
                </div>
            )}
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