import React, { useState, useRef, useEffect } from 'react';
import './About.css';
import skillsData from './skillsData.json';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { meshStandardMaterial } from 'three';

gsap.registerPlugin(ScrollTrigger);


// 자기소개, 기술소개, 개발자로서 목표와 비전
// 자기소개 : 어떤 사람인지, 어떤 계기로 프론트엔드를 선택했는지 ..
// 기술소개 : html, css, javascript, react, react-native, github, figma
// 개발자로서 목표 : 배우고싶은 기술이나 진행하고싶은 프로젝트 등
// 개발자로서 비전 : 장기적 단기적 설명 / 장기적으로는 사용자경험을 최우선으로 고려한 서비스 개발 또는 글로벌 시장에서 영향력있는 웹 애플리케이션 개발 등
// 예) "앞으로 웹 성능 최적화와 접근성을 중점적으로 공부하여, 더 많은 사람들이 웹을 쉽고 편리하게 사용할 수 있도록 기여하고 싶습니다. 또한, 지속적으로 최신 웹 기술을 배우고 적용하여, 빠르게 발전하는 프론트엔드 기술에 뒤처지지 않도록 노력할 것입니다."


// 자기소개 컴포넌트
const Introduction = () => {
    return (
        <div className="intro-container">
            <div className="common-flex" style={{ flexDirection: 'row' }}>
                <p className="intro-heading">별처럼 빛나는 프론트엔드 개발자가 되겠습니다.</p>
            </div>
            <p className="intro-description">어떤 웹 페이지를 만들지 구상하고, 디자인하고, 코드로 구현 해나갈때 제 눈이 반짝이고 있음을 느꼈습니다. <br />
                처음 코딩이라는 것을 접했을때처럼 여전히 설레고 즐거운 마음으로 프로젝트를 만들고, <br />새로운 기술을 배우고,
                배운 기술을 적용해보고, 문제가 생기면 끈기있게 해결 하려고 합니다. <br />과거의 저는 꿈이 또렷한 사람이 아니었는데
                프론트엔드 개발자라는 직업을 알게된 후에는 꿈이 또렷해졌습니다. <br />제 꿈은 제자리에 머무르지 않고 계속해서
                발전 해나가며 별처럼 빛이나는 프론트엔드 개발자가 되는 것입니다!
            </p>
        </div>
    )
}
// 기술스택 컴포넌트
const Skills = () => {

    return (
        <div className="skills-container">
            <Canvas camera={{ position: [6, 3, 6], fov: 35 }}>
                {/* 확대/축소 비활성, 자동 회전 설정*/}
                <OrbitControls enableZoom={false} autoRotate={true} />
                <mesh>
                    {/* 3D 박스 생성, 크기 설정 */}
                    <boxGeometry args={[3.3, 3, 3]} />
                    {/* meterial을 mesh에 연결*/}
                    <meshStandardMaterial attach="material" color={0xa3b18a} />
                    {/* 전체적으로 균일하게 빛 설정*/}
                    <ambientLight intensity={1} />
                    {/* 빛 방향 설정 및 강도 설정 */}
                    <directionalLight position={[-1, 0, 1]} intensity={0.5} />
                </mesh>
                {skillsData.map((item) => (
                    <Text
                    key={item.id}
                    position={item.position}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.2}
                    rotation={item.rotation}
                    >
                        {item.skillTitle}
                    </Text>
                ))}
                {/* <Text
                    position={[0, 0, 1.6]} // 텍스트의 위치 설정
                    fontSize={0.5} // 텍스트 크기 설정
                    color="black" // 텍스트 색상 설정
                    anchorX="center" // 텍스트의 수평 정렬 (center로 설정)
                    anchorY="middle" // 텍스트의 수직 정렬 (middle로 설정)
                >
                    Box Text
                </Text> */}
            </Canvas>
        </div>
    )
}

const About = () => {

    return (
        <div className="about-container common-background">
            <p className="about-header">ABOUT</p>
            <Introduction />
            <Skills />
        </div>
    )
}

export default About;