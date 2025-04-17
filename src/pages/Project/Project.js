import './Project.css';
import React, { useState } from 'react';
import projectsData from './projectsData.json';
import { FaTimes } from "react-icons/fa";

const ProjectView = ({ isClick, handleProjectOpenClose, selectedProject }) => {


    return (
        <>
            {isClick && (
                <div className="projectView-container-black">

                        <div className="projectView-container-white">
                            <button className="projectView-closeBtn common-flex" onClick={handleProjectOpenClose}><FaTimes /></button>
                            {selectedProject.projectReadMore.map((data, index) => (
                                <div key={index}>
                                    <p>{data.name}</p>
                                </div>
                            ))}
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
const Projects = ({ handleProjectOpenClose, setSelectedProject }) => {
    const projectsLinkClick = (link) => {
        window.open(link, '_blank');
        alert("클릭")
    }
    return (
        <div className="projects-container common-flex">
            {projectsData.map(item => (
                <div key={item.id} className="projects-box-container common-flex">
                    <div className="projects-box common-flex">
                        <img className="projects-box-img" src={process.env.PUBLIC_URL + item.projectImg} alt={item.projectName}></img>
                        <div className="projects-box-btn-container common-flex">
                            <button className="projects-box-btn" onClick={() => {
                                handleProjectOpenClose();
                                setSelectedProject(item);
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
        console.log(isClick);
    }

    const [selectedProject, setSelectedProject] = useState(null);

    // const [data, setData] = useState("");
    // const projectData = (data) => {
    //     console.log(data);
    //     setData(data);
    // }
    return (
        <div className="project-container common-background">
            <ProjectView isClick={isClick} handleProjectOpenClose={handleProjectOpenClose} selectedProject={selectedProject}/>
            <ProjectHeader />
            <Projects handleProjectOpenClose={handleProjectOpenClose} setSelectedProject={setSelectedProject}/>
        </div>
    )
}

export default Project;