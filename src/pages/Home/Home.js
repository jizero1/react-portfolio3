import './Home.css';
import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';

const HomeText = () => {

    return (
        <div className="home-text common-flex">
            <ReactTyped
                strings={["HELLO, I'M JIYOUNG", "FRONT-END DEVELOPER", "VIEW MY PORTFOLIO"]}
                typeSpeed={100} // 타이핑 속도
                backSpeed={70} // 지우는 속도
                backDelay={1200} // 타이핑 후 잠시 대기
                startDelay={500} // 시작 지연
                loop={false} // 무한 반복 설정
            />
        </div>
    )
}
const Home = () => {
    return (
        <div className="home-container common-flex">
            <HomeText />
        </div>
    )
}

export default Home;