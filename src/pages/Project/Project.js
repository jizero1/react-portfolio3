import './Project.css';
import React from 'react';

const ProjectHeader = () => {
    return (
        <div className="project-header-container">
            <p className="headerLine">PROJECTS</p>
            <p className="project-header-text">제가 작업했던 프로젝트 소개와 문제 해결 과정을 담은 공간입니다.</p>
        </div>
    )
}
const Project = () => {
    return (
        <div className="project-container common-background">
            <ProjectHeader/>
        </div>
    )
}

export default Project;