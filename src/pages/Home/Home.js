import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";
import Lottie from 'lottie-react';
import shiningStar from '../../assets/lottie/shiningStar.json';

const HomeText = () => {
    return (
        <div className="home-text-container common-flex">
            <div className="home-text-title-container common-flex">
                <p className="common-home-text-title">CHOI JIYOUNG</p>
                <p className="common-home-text-title">PORTFOLIO</p>
                <p className="home-text-title-small">FRONT-END DEVELOPER</p>
            </div>
            <div className="home-text-scrollIcon-container common-flex">
                <FaAngleDoubleDown />
            </div>
            <Lottie
                animationData={shiningStar}
                autoplay
                loop
                className="home-text-shiningStar"
            />
            
        </div>
    )
}
const HomeInfo = () => {
    return (
        <div className="home-info-container">
            <div className="home-info-header">
                <p className="home-info-title">OVERVIEW</p>
                <p className="common-info-text"><span className="common-info-spanText">ABOUT</span>에는 자기소개, 사용하는 기술, 그리고 프론트엔드 개발자로서의 목표와 비전 대한 내용이 담겨있습니다.</p>
                <p className="common-info-text"><span className="common-info-spanText">PROJECTS</span>에는 작업했던 프로젝트 소개와 문제 해결 상황 등에 대해 상세히 설명이 되어있습니다.</p>
                <hr className="home-info-header-line" />
            </div>
            {/* about과 projects 페이지로 이동하는 부분 */}
            <div className="home-info-navigation common-flex">
                <Link to="/about">
                    <div className="common-info-box home-info-about common-flex" >
                        <p className="common-info-box-title">ABOUT</p>
                        <p className="common-info-box-text">자기소개, 사용하는 기술 소개 및 <br />프론트엔드 개발자로서 목표와 비전</p>
                    </div>
                </Link>
                <Link to="/project">
                    <div className="common-info-box home-info-project common-flex">
                        <p className="common-info-box-title">PROJECTS</p>
                        <p className="common-info-box-text">작업했던 프로젝트 소개 및 <br /> 문제 해결 상황 등에 대한 설명</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home-container common-flex common-background">
            <HomeText />
            <HomeInfo />
        </div>
    )
}

export default Home;