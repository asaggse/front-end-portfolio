import React from "react";
import projects from "./projectData";

const renderProjects = projects => {
    return projects.map(project => {
        return (
            <div key={project.title} className="container">
                <h1 className="preview-title">{project.title}</h1>
                <div className="preview">
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <img src={project.image} alt={project.title} className="my-project" />
                    </a>
                </div>
            </div>
        );
    });
};

const Projects = () => {
    return (
        <div className="App-projects">
            <h1 className="section-title">Projects</h1>
            {renderProjects(projects)}
        </div>
    );
};

export default Projects;
