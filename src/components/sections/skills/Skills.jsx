import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills-content">
                <h2 className="skills-title">Обо мне</h2>
                <div className="skills-grid">
                    <div className="photography-card">
                        <img src="/assets/images/skills/photography.png" alt="Photography Background" className="skill-bg" />
                        <div className="skill-overlay"></div>
                        <h3 className="skill-title">Фотография</h3>
                        <div className="skill-description">
                            <h3>Фотография</h3>
                            <p>
                                Создаю атмосферные кадры, работаю с портретной, пейзажной и
                                уличной фотографией. Умею работать со светом и композицией,
                                обрабатываю снимки в Adobe Lightroom и Photoshop.
                            </p>
                        </div>
                    </div>
                    <div className="design-card">
                        <img src="/assets/images/skills/design.png" alt="Design Background" className="skill-bg" />
                        <div className="skill-overlay"></div>
                        <h3 className="skill-title">Дизайн</h3>
                        <div className="skill-description">
                            <h3>Графический дизайн</h3>
                            <p>
                                Разрабатываю логотипы, фирменные стили, макеты для веб и печати.
                                Владею принципами типографики, цветоведения и композиции.
                                Работаю в Adobe Creative Suite.
                            </p>
                        </div>
                    </div>
                    <div className="frontend-card">
                        <img src="/assets/images/skills/frontend.png" alt="Frontend Background" className="skill-bg" />
                        <div className="skill-overlay"></div>
                        <h3 className="skill-title">Frontend разработка</h3>
                        <div className="skill-description">
                            <h3>Frontend разработка</h3>
                            <p>
                                Создаю современные веб-интерфейсы с использованием React,
                                JavaScript, HTML5 и CSS3. Умею работать с анимациями,
                                адаптивной версткой и оптимизацией производительности.
                                Следую принципам UX/UI дизайна для создания удобных интерфейсов.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
