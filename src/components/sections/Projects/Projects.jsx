import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects-content">
                <h2 className="projects-title">Мои проекты</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Проект 1</h3>
                        <p>Описание проекта будет здесь</p>
                    </div>
                    <div className="project-card">
                        <h3>Проект 2</h3>
                        <p>Описание проекта будет здесь</p>
                    </div>
                    <div className="project-card">
                        <h3>Проект 3</h3>
                        <p>Описание проекта будет здесь</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
