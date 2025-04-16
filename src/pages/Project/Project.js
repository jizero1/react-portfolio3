import './Project.css';
import React, { useState } from 'react';
import projectsData from './projectsData.json';
import { FaTimes } from "react-icons/fa";

const ProjectView = ({ isClick, handleProjectOpenClose, data }) => {

    return (
        <>
            {isClick && (
                <div className="projectView-container-black">
                    <div className="projectView-container-white">
                        <button className="projectView-closeBtn common-flex" onClick={handleProjectOpenClose}><FaTimes /></button>
                        <p>{data}</p>
                    </div>
                </div>
            )}
        </>
    )
}
const ProjectHeader = () => {
    return (
        <div className="project-header-container">
            <p className="headerLine">PROJECTS</p>
            <p className="project-header-text">제가 작업했던 프로젝트 소개와 문제 해결 과정을 담은 공간입니다.</p>
        </div>
    )
}
const Projects = ({handleProjectOpenClose, projectData }) => {
    const projectsLinkClick = (link) => {
        window.open(link, '_blank');
        alert("클릭")
    }
    // 자세히보기 버튼을 누르면 모달창 내부에 전달된 내용들이 떠야함.
    // 자세히보기 함수를 통해 모달창 내용을 전달하고,
    // 그 내용들은 ProjectView 컴포넌트안의 모달창에 떠야함.
    // const projectData = (data) => {
    //     console.log(data);
    // }
    return (
        <div className="projects-container common-flex">
            {projectsData.map(item => (
                <div key={item.id} className="projects-box-container common-flex">
                    <div className="projects-box common-flex">
                        <img className="projects-box-img" src={process.env.PUBLIC_URL + item.projectImg} alt={item.projectName}></img>
                        <div className="projects-box-btn-container common-flex">
                            <button className="projects-box-btn" onClick={() => {
                                handleProjectOpenClose();
                                projectData(item.projectName);
                            }}>자세히보기</button>
                            <button className="projects-box-btn" onClick={() => projectsLinkClick(item.projectLink)}>프로젝트 링크</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
const Project = () => {

    const [isClick, setIsClick] = useState(false);
    const handleProjectOpenClose = () => {
        setIsClick(!isClick);
    }

    const [data, setData] = useState("");
     const projectData = (data) => {
        console.log(data);
        setData(data);
    }
    return (
        <div className="project-container common-background">
            <ProjectView isClick={isClick} handleProjectOpenClose={handleProjectOpenClose} data={data}/>
            <ProjectHeader />
            <Projects handleProjectOpenClose={handleProjectOpenClose} projectData={projectData}/>
        </div>
    )
}

export default Project;