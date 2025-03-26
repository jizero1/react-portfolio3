import './Home.css';
import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';
import { FaAngleDown, FaStar } from "react-icons/fa";

const HomeStarIcon = ({ scrollIcon }) => {

    // 스크롤아이콘이 뜨면 돋보기와 별 아이콘(이미지)띄운다.
    const [starIconLeft, setStarIconLeft] = useState(false);
    const [starIconRight, setStarIconRight] = useState(false);

    useEffect(() => {
        if (scrollIcon) {
            setStarIconLeft(true);
            setStarIconRight(true);
        }
    }, [scrollIcon]);

    return (
        <div className="home-starIcon-container">
            <div className="home-starIcon-left common-home-starIcon" style={{ opacity: scrollIcon ? 1 : 0 }} >
                <FaStar />
            </div>
            <div className="home-starIcon-right common-home-starIcon" style={{ opacity: scrollIcon ? 1 : 0 }} >
                <FaStar />
            </div>
        </div>
    )
}

const TextTyping = ({ text, onComplete }) => {
    return (
        <ReactTyped
            strings={[text]}
            typeSpeed={100}
            startDelay={500}
            loop={false}
            showCursor={false}
            onComplete={onComplete}
        >
        </ReactTyped>
    )
}

const HomeText = ({ scrollIcon, handleTypingComplete }) => {
    const [firstText, setFirstText] = useState(false);
    const [secondText, setSecondText] = useState(false);
    const handleFirstText = () => {
        setFirstText(true);
    }
    const handleSecondText = () => {
        setSecondText(true);
    }
    const nextText = (next) => {
        next(true);
    }
    const handleThirdText = () => {

    }
    return (
        <div className="home-text-container common-flex">
            <div className="home-text">
                <TextTyping text={"HELLO, I'M JIYOUNG"} onComplete={()=> nextText(setFirstText)}></TextTyping>
                {firstText && (
                    <TextTyping text={"FRONT-END DEVELOPER"} onComplete={() => nextText(setSecondText)}></TextTyping>
                )}
                {secondText && (
                    <TextTyping text={"VIEW MY PORTFOLIO"} onComplete={handleThirdText}></TextTyping>
            
                )}
            </div>
            {scrollIcon && (
                <FaAngleDown className="home-scrollIcon" />
            )}
        </div>
    )
}
const Home = () => {
    const [scrollIcon, setScrollIcon] = useState(false);
    const handleTypingComplete = () => {
        setScrollIcon(true);
    }
    return (
        <div className="home-container common-flex">
            <HomeStarIcon scrollIcon={scrollIcon} />
            <HomeText scrollIcon={scrollIcon} handleTypingComplete={handleTypingComplete} />
        </div>
    )
}

export default Home;