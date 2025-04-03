import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { FaAngleDown } from "react-icons/fa";


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

// 홈화면에 텍스트를 타이핑하고, 완료되면 스크롤 아이콘을 표시하는 컴포넌트
const HomeText = () => {
    const [scrollIcon, setScrollIcon] = useState(false);
    const handleTypingComplete = () => {
        setScrollIcon(true); // 마지막 텍스트까지 출력되면 스크롤아이콘 띄우기
    }

    const imgSrc = [
        '🥳',
        '💻',
        '🔍'
    ];
    const [homeImg, setHomeImg] = useState(imgSrc[0]); // 초기 이미지
    const [homeImgIndex, setHomeImgIndex] = useState(0); // 이미지 인덱스 상태 추가

    useEffect(() => {
        const imgInterval = setInterval(() => {
            setHomeImgIndex((prevIndex) => {
                // 이전 인덱스를 받아와 prevIndex를 사용해 새로운 인덱스를 계산함.
                // imgSrc 배열 길이에 맞게 인덱스를 순차적으로 증가시킴.
                const nextIndex = (prevIndex + 1) % imgSrc.length; // 배열 순환
                console.log(nextIndex);
                if (nextIndex === 2) {
                    clearInterval(imgInterval); // nextIndex가 0이면 반복을 중지
                }
                setHomeImg(imgSrc[nextIndex]); // 새로운 이미지 설정
                return nextIndex; // 인덱스 업데이트
            });
        }, 4400);
        return () => clearInterval(imgInterval); // 컴포넌트 언마운트 시 interval 정리
    }, []); // 빈 배열 넣으면 처음 마운트될 때만 실행

return (
    <div className="home-text-container common-flex">
        <div className="home-circle-box common-flex">
            <p className="home-circle-box-img">{homeImg}</p>
        </div>
        <div className="home-text">
            <TextTyping text={["HELLO, I'M JIYOUNG", "FRONT-END DEVELOPER", "VIEW MY PORTFOLIO"]}
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
        <div className="home-info-container common-flex">
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