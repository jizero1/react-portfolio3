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
                        {/* Projects 컴포넌트 내에서 현재 클릭한 프로젝트 데이터를 selectedProject에 저장했고, 해당 데이터를 map함수를 이용하여 출력함 */}
                        {selectedProject.projectReadMore.map((data, index) => (
                            <div key={index} className="readMore-container common-flex">
                                <div className="readMore-title-container common-flex" style={{ backgroundColor: data.titleColor, color: data.titleTextColor }}>
                                    <p className="readMore-name">{data.name}</p>
                                    <p className="readMore-date">{data.date}</p>
                                </div>
                                <div className="common-readMore-text-container">
                                    <p className="common-readMore-text-title">📌 프로젝트 소개</p>
                                    <p className="readMore-description common-readMore-text">{data.description}</p>
                                </div>
                                <div className="common-readMore-text-container">
                                    <p className="common-readMore-text-title">👩‍💻 개발자</p>
                                    <p className="common-readMore-text">{data.developer}</p>
                                </div>
                                <div className="common-readMore-text-container">
                                    <p className="common-readMore-text-title">🛠 개발 기술</p>
                                    <p className="common-readMore-text">{data.tools}</p>
                                </div>
                                <div className="common-readMore-text-container">
                                    <p className="common-readMore-text-title">✨ 주요 기능</p>
                                    {data.functions.map((functionNumber, index) => (
                                        <div key={index}>
                                            <p className="common-readMore-text-number">{functionNumber.number}</p>
                                            <p className="functionNumber-text common-readMore-text">{functionNumber.content}</p>
                                        </div>

                                    ))}

                                </div>
                                <div className="readMore-image-container common-readMore-text-container common-flex">
                                    {data.images.map((image, index) => (
                                        <div key={index}>
                                            <img src={process.env.PUBLIC_URL + image.img} alt={image.name} style={{ width: '96%', height: '175px' }}></img>
                                        </div>
                                    ))}
                                </div>
                                <div className="common-readMore-text-container">
                                    <p className="common-readMore-text-title">🧩 문제 해결 경험 / 배운 점</p>
                                    {data.challenges.map((challenge, index) => (
                                        <div key={index}>
                                            <p className="common-readMore-text-number">{challenge.number}</p>
                                            <p className="common-readMore-text">{challenge.content}</p>
                                        </div>

                                    ))}

                                </div>
                                <div className="common-readMore-text-container">
                                    <p className="common-readMore-text-title">🔗 링크 모음</p>
                                    <div style={{ display: 'flex' }}>
                                        <button className="readMore-linkBtn"><a href={data.githubLink} target="_blank">깃허브 링크</a></button>
                                        <button className="readMore-linkBtn"><a href={data.projectLink} target="_blank">프로젝트 링크</a></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div >
            )}
        </>
    )
}
const ProjectHeader = () => {
    return (
        <div className="project-header-container">
            <p className="headerLine">PROJECTS</p>
            <p className="project-header-text">제가 작업했던 프로젝트 소개와 문제 해결 과정을 담은 공간입니다. <br /> 자세히보기를 클릭하시면 프로젝트에 대해 더 자세하게 확인 하실 수 있습니다.</p>
        </div>
    )
}
const Projects = ({ handleProjectOpenClose, setSelectedProject }) => {
    const projectsLinkClick = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className="projects-container common-flex">
            {projectsData.map(item => (
                <div key={item.id} className="projects-box-container common-flex">
                    <div className="projects-box common-flex">
                        <img className="projects-box-img" src={process.env.PUBLIC_URL + item.projectImg} alt={item.projectName}></img>
                        <div className="proejcts-box-content">
                            <p className="project-box-name">{item.projectName}</p>
                            <p className="project-box-shortDescription">{item.shortDescription}</p>
                            <div className="project-box-toolsContainer">
                                {item.projectTools.map((tools, index) => (
                                    <p key={index} className="project-box-tools">{tools.tool}</p>
                                ))}
                            </div>
                            <div className="projects-box-btn-container common-flex">
                                <button className="projects-box-btn" onClick={() => {
                                    handleProjectOpenClose();
                                    setSelectedProject(item);
                                }}>자세히보기</button>
                                <button className="projects-box-btn" onClick={() => projectsLinkClick(item.projectLink)}>프로젝트 링크</button>
                            </div>
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
            <ProjectView isClick={isClick} handleProjectOpenClose={handleProjectOpenClose} selectedProject={selectedProject} />
            <ProjectHeader />
            <Projects handleProjectOpenClose={handleProjectOpenClose} setSelectedProject={setSelectedProject} />
        </div>
    )
}

export default Project;