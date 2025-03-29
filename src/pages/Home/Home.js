import './Home.css';
import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';
import { FaAngleDown, FaStar } from "react-icons/fa";

// 텍스트 타이핑 효과 컴포넌트
const TextTyping = ({ text, onComplete }) => {
    return (
        <ReactTyped
            strings={text} // 타이핑 텍스트
            typeSpeed={90} // 타이핑 속도
            backSpeed={50} // 지우기 속도
            backDelay={500} // 지운 후 대기 시간
            startDelay={500} // 시작 전 대기 시간
            loop={false} // 반복 표시여부
            showCursor={true} // 커서 표시여부
            onComplete={onComplete} // 타이핑 완료되면 실행되는 콜백함수
        >
        </ReactTyped>
    )
}

// 홈화면에 텍스트를 티이핑하고, 완료되면 스크롤 아이콘을 표시하는 컴포넌트
const HomeText = () => {
    const [scrollIcon, setScrollIcon] = useState(false);
    const handleTypingComplete = () => {
        setScrollIcon(true); // 마지막 텍스트까지 출력되면 스크롤아이콘 띄우기
    }

    const text = [
        "HELLO, I'M JIYOUNG",
        "FRONT-END DEVELOPER",
        "VIEW MY PORTFOLIO"
    ]
    return (
        <div className="home-text-container common-flex">
            <div className="home-text">
                <TextTyping text={["HELLO, I'M JIYOUNG", "FROUNT-END DEVELOPER", "VIEW MY PORTFOLIO"]}
                    onComplete={() => handleTypingComplete()}></TextTyping>
            </div>
            {scrollIcon && (
                <FaAngleDown className="home-scrollIcon" style={{ opacity: scrollIcon ? 1 : 0 }} />
            )}
        </div>
    )
}

const HomeInfo = () => {
    return (
        <div className="home-info-container">
            <div className="home-info">
                <img src="" alt="별 아이콘" className="home-info-img"></img>
                <p className="home-info-title">별처럼 빛나는 사람이 되겠습니다.</p>
                <p className="common-infoText">ABOUT에는 자기소개, 사용하는 기술, 그리고 프론트엔드 개발자로서의 목표와 비전 대한 내용이 담겨있습니다.</p>
                <p className="common-infoText">PROJECTS에는 작업했던 프로젝트 소개와 사용한 기술에 대해 상세히 설명이 되어있습니다.</p>
            </div>
            {/* about과 projects 페이지로 이동하는 부분 */}
            <div className="home-info-navigation">
                <div className="home-info-about">
                    <p>ABOUT</p>
                </div>
                <div className="home-info-project">
                    <p>PROJECTS</p>
                </div>
            </div>
        </div>
    )
}

const Home = () => {

    return (
        <div className="home-container common-flex">
            <HomeText />
            <HomeInfo />
        </div>
    )
}

export default Home;