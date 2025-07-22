import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const skillsRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const container = skillsRef.current;
        const svg = svgRef.current;

        if (!container || !svg) return;

        svg.innerHTML = `
            <defs>
                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ec4899" />
                    <stop offset="100%" stop-color="#06b6d4" />
                </linearGradient>
                <filter id="simpleGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        `;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('class', 'neon-path');
        path.setAttribute('stroke', 'url(#borderGradient)');
        path.setAttribute('stroke-width', '4');
        path.setAttribute('fill', 'none');
        path.setAttribute('filter', 'url(#simpleGlow)');
        svg.appendChild(path);

        const createBorderPath = () => {
            const { width, height } = container.getBoundingClientRect();
            const r = 40;
            return `M ${r} 0 H ${width - r} Q ${width} 0 ${width} ${r} V ${height - r} Q ${width} ${height} ${width - r} ${height} H ${r} Q 0 ${height} 0 ${height - r} V ${r} Q 0 0 ${r} 0 Z`;
        };

        const update = () => {
            const rect = container.getBoundingClientRect();
            svg.setAttribute('width', rect.width);
            svg.setAttribute('height', rect.height);
            svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
            path.setAttribute('d', createBorderPath());
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <section id="skills" className="skills" ref={skillsRef}>
            {/* SVG неоновая обводка */}
            <svg className="neon-border" ref={svgRef}></svg>

            <div className="skills-content">
                <h2 className="skills-title">Обо мне</h2>
                <div className="skills-grid">
                    <div className="photography-card">
                        <img src="/nksv-folio/assets/images/skills/photography.png" alt="Photography Background" className="skill-bg" />
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
                        <img src="/nksv-folio/assets/images/skills/design.png" alt="Design Background" className="skill-bg" />
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
                        <img src="/nksv-folio/assets/images/skills/frontend.png" alt="Frontend Background" className="skill-bg" />
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
