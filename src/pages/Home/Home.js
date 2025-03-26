import './Home.css';
import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';
import { FaAngleDown, FaStar } from "react-icons/fa";

const TextIcon = ({firstIcon, secondIcon, thirdIcon}) => {
    return (
        <div>  
            {firstIcon && (
                <p>첫번째 아이콘!</p>
            )}
            {secondIcon && (
                <p>두번째 아이콘!</p>
            )}
            {thirdIcon && (
                <p>세번째 아이콘@</p>
            )}
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

const HomeText = ({handleFirstText, handleSecondText, handleThridText}) => {
    const [firstText, setFirstText] = useState(false);
    const [secondText, setSecondText] = useState(false);
    const [scrollIcon, setScrollIcon] = useState(false);

    const nextText = (next) => {
        next(true);
    }

    
    const thirdScrollIcon = () => {
        setScrollIcon(true); // 마지막 텍스트까지 출력되면 스크롤아이콘 띄우기
    }
    return (
        <div className="home-text-container common-flex">
            <div className="home-text">
                <TextTyping text={"HELLO, I'M JIYOUNG"} onComplete={() => {nextText(setFirstText); handleFirstText();}}></TextTyping>
                <br></br>
                {firstText && (
                    <TextTyping text={"FRONT-END DEVELOPER"} onComplete={() => {nextText(setSecondText); handleSecondText();}}></TextTyping>
                )}
                <br></br>
                {secondText && (
                    <TextTyping text={"VIEW MY PORTFOLIO"} onComplete={() => {thirdScrollIcon(); handleThridText();}}></TextTyping>

                )}
            </div>
            {scrollIcon && (
                <FaAngleDown className="home-scrollIcon" />
            )}
        </div>
    )
}
const Home = () => {

    const [firstIcon, setFirstIcon] = useState(false);
    const [secondIcon, setSecondIcon] = useState(false);
    const [thirdIcon, setThirdIcon] = useState(false);
    const handleFirstText = () => {
        // 첫번째 텍스트 타이핑 완료되면 아이콘 띄우기
        // firstIcon을 true로 설정하고, icon컴포넌트에서 해당 아이콘을 화면에 표시함
        setFirstIcon(true);
    }
    const handleSecondText = () => {
        setSecondIcon(true);
    }
    const handleThridText = () => {
        setThirdIcon(true);
    }
    return (
        <div className="home-container common-flex">
            <TextIcon firstIcon={firstIcon} secondIcon={secondIcon} thirdIcon={thirdIcon}/>
            <HomeText handleFirstText={handleFirstText} handleSecondText={handleSecondText} handleThridText={handleThridText}/>
        </div>
    )
}

export default Home;