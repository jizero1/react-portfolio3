import React, { useRef } from 'react';
import './About.css';
import skillsData from './skillsData.json';
import visionData from './visionData.json';
import { FaCircle } from "react-icons/fa";
import emailjs from 'emailjs-com';

// 자기소개 컴포넌트
const Introduction = () => {
    return (
        <div className="intro-container">
            <p className="intro-heading">별처럼 빛나는 프론트엔드 개발자가 되겠습니다.</p>
            <p className="intro-description">어떤 웹 페이지를 만들지 구상하고, 디자인하고, 코드로 구현 해나갈때 제 눈이 반짝이고 있음을 느꼈습니다.
                처음 코딩이라는 것을 접했을때처럼 여전히 설레고 즐거운 마음으로 프로젝트를 만들고, 새로운 기술을 배우고,
                배운 기술을 적용해보고, 문제가 생기면 끈기있게 해결 하려고 합니다. 과거의 저는 꿈이 또렷한 사람이 아니었는데
                프론트엔드 개발자라는 직업을 알게된 후에는 꿈이 또렷해졌습니다. 제 꿈은 제자리에 머무르지 않고 계속해서
                발전 해나가며 별처럼 빛이나는 프론트엔드 개발자가 되는 것입니다!
            </p>
        </div>
    )
}
// 기술스택 컴포넌트
const Skills = () => {

    return (
        <div className="skills-container">
            <p className="common-header">SKILLS</p>
            <p className="common-header-detailText"><FaCircle style={{ marginRight: 10, fontSize: 6 }} />프론트엔드에 대해 공부하며 배운 스킬 소개</p>
            <div className="skills-boxContainer common-flex">
                {skillsData.map(item => (
                    <div key={item} className="skills-box">
                        <p className="skills-boxSkillTitle common-flex"> {item.skillTitle}</p>
                        <div className="skills-boxSkillsContainer common-flex">
                            {item.skills.map((skill, index) => (
                                <div key={index} className="skills-boxSkills common-flex">
                                    <img className="skills-boxSkillsImg" src={process.env.PUBLIC_URL + skill.image} alt={skill.name}></img>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Vision = () => {
    return (
        <div className="vision-container">
            <p className="common-header">VISION</p>
            <p className="common-header-detailText" style={{ marginBottom: 20 }}><FaCircle style={{ marginRight: 10, fontSize: 6 }} />프론트엔드 개발자로서의 단기 및 장기 목표 소개</p>
            <div className="vision-boxContainer common-flex">
                {visionData.map(item => (
                    <div className="vision-box">
                        <p className="vision-title">{item.visionType}</p>
                        {item.vision.map((vision, index) => (
                            <div key={index} className="vision-text">
                                <p>{vision.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault(); // 전송 버튼 누를때 새로고침 되는걸 방지함.
        emailjs.sendForm(
            'wlduddl4101@gmail.com',
            'template_7fnp05r',
            form.current,
            'c_dLDW_nZl8DJ_1ir'
        )
            .then((result) => {
                console.log(result.text);
                alert("메일 전송 성공!");
                form.current.reset();

            }, (error) => {
                console.log(error.text);
                alert("메일 전송 실패");
            });
    };

    return (
        <div className="contact-container">
            <p className="common-header">CONTACT</p>
            <div className="contact-formAndinfoCard common-flex">
                <form ref={form} onSubmit={sendEmail} className="contact-form common-flex">
                    <p className="contact-title">Contact Me</p>
                    <div className="common-contact common-flex">
                        <label className="common-contact-label common-flex">성함</label>
                        <input type="text" name="from_name" placeholder='성함을 입력 해주세요.' required className="contact-input common-contact-write " />
                    </div>
                    <div className="common-contact common-flex">
                        <label className="common-contact-label common-flex">이메일</label>
                        <input type="email" name="email" placeholder='이메일을 입력 해주세요.' required className="contact-input common-contact-write" />
                    </div>
                    <div className="common-contact common-flex">
                        <label className="common-contact-label common-flex">내용</label>
                        <textarea name="message" placeholder='보내실 내용을 입력 해주세요.' required className="contact-textarea common-contact-write" />
                    </div>

                    <button type="submit" className="contact-submitBtn">전송하기</button>
                </form>
                <div className="contact-infoCard common-flex">
                    <img src={process.env.PUBLIC_URL+"/images/cursorStar.png"} style={{marginBottom: 20}}></img>
                    <p style={{lineHeight: 1.7}}>제 포트폴리오에 대해 더 궁금하신 점이 있으시다면 언제든지 연락 주세요. 성실히 답변 드리겠습니다. 감사합니다!</p>
                </div>
            </div>

        </div >
    )
}

const About = () => {

    return (
        <div className="about-container common-background">
            <p className="about-header headerLine">ABOUT</p>
            <Introduction />
            <Skills />
            <Vision />
            <Contact />
        </div>
    )
}

export default About;