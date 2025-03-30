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
            <div className="home-circle-box"></div>
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

    // const [infoHover, setInfoHover] = useState(false);
    // const handleInfoHover = () => {
    //     setInfoHover(true);
    // }
    // const handleInfoLeave = () => {
    //     setInfoHover(false);
    // }
    return (
        <div className="home-info-container common-flex">
            <div className="home-info-header">
                <p className="home-info-title">OVERVIEW</p>
                <p className="common-info-text"><span className="common-info-spanText">ABOUT</span>에는 자기소개, 사용하는 기술, 그리고 프론트엔드 개발자로서의 목표와 비전 대한 내용이 담겨있습니다.</p>
                <p className="common-info-text"><span className="common-info-spanText">PROJECTS</span>에는 작업했던 프로젝트 소개와 문제 해결 상황 등에 대해 상세히 설명이 되어있습니다.</p>
                <hr className="home-info-header-line"/>
            </div>
            {/* about과 projects 페이지로 이동하는 부분 */}
            <div className="home-info-navigation common-flex">
                {/* 위쪽+왼쪽 그림자 주기 */}
                <div className="common-info-box home-info-about common-flex" >
                    <p className="common-info-box-title">ABOUT</p>
                    <p className="common-info-box-text">자기소개, 사용하는 기술, 프론트엔드 개발자로서 목표와 비전</p>
                </div>
                <div className="common-info-box home-info-project common-flex">
                    <p className="common-info-box-title">PROJECTS</p>
                    <p className="common-info-box-text">프로젝트 소개 및 문제 해결에 대한 설명</p>
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