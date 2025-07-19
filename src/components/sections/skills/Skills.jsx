import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const skillsRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const skillsElement = skillsRef.current;
        const svg = svgRef.current;

        if (!skillsElement || !svg) return;

        // Функция для создания пути обводки
        const createBorderPath = () => {
            // const rect = skillsElement.getBoundingClientRect();
            // const topRadius = 70;
            // const bottomRadius = 0;
            // const offset = 0;

            // const x = offset;
            // const y = offset;
            // const width = rect.width - offset * 2;
            // const height = rect.height - offset * 2;
            // const rTop = topRadius;
            // const rBottom = bottomRadius;

            // // Создаем путь с разными радиусами сверху и снизу
            // const pathData = `
            //     M ${x + rTop} ${y}
            //     L ${x + width - rTop} ${y}
            //     Q ${x + width} ${y} ${x + width} ${y + rTop}
            //     L ${x + width} ${y + height - rBottom}
            //     ${rBottom > 0 ? `Q ${x + width} ${y + height} ${x + width - rBottom} ${y + height}` : `L ${x + width} ${y + height}`}
            //     L ${x + rBottom} ${y + height}
            //     ${rBottom > 0 ? `Q ${x} ${y + height} ${x} ${y + height - rBottom}` : `L ${x} ${y + height}`}
            //     L ${x} ${y + rTop}
            //     Q ${x} ${y} ${x + rTop} ${y}
            //     Z
            // `;

            // return pathData.trim();
        };

        // // Устанавливаем размеры SVG
        // const updateSVG = () => {
        //     const rect = skillsElement.getBoundingClientRect();
        //     svg.setAttribute('width', rect.width);
        //     svg.setAttribute('height', rect.height);
        //     svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);

        //     const pathData = createBorderPath();

        //     // Обновляем все пути
        //     const paths = svg.querySelectorAll('path');
        //     paths.forEach(path => {
        //         path.setAttribute('d', pathData);
        //     });

        //     // Обновляем градиенты для нового размера
        //     animateGradients();
        // };

        // Анимация градиентов
        const animateGradients = () => {
            let angle = 0;
            const speed = 0.5; // Медленная скорость для приятного эффекта

            const animate = () => {
                angle += speed;
                if (angle >= 360) angle = 0;

                // Обновляем позицию градиентов
                const gradients = svg.querySelectorAll('linearGradient');
                gradients.forEach((gradient, index) => {
                    const offsetAngle = angle + (index * 90); // Смещение для каждого градиента
                    const radians = (offsetAngle * Math.PI) / 180;

                    const x1 = 50 + 50 * Math.cos(radians);
                    const y1 = 50 + 50 * Math.sin(radians);
                    const x2 = 50 - 50 * Math.cos(radians);
                    const y2 = 50 - 50 * Math.sin(radians);

                    gradient.setAttribute('x1', `${x1}%`);
                    gradient.setAttribute('y1', `${y1}%`);
                    gradient.setAttribute('x2', `${x2}%`);
                    gradient.setAttribute('y2', `${y2}%`);
                });

                requestAnimationFrame(animate);
            };

            animate();
        };

        const createSVGContent = () => {
            svg.innerHTML = `
                <defs>
                    <!-- Радиальные градиенты для неравномерного свечения -->
                    <radialGradient id="neonSpot1" cx="50%" cy="50%" r="30%">
                        <stop offset="0%" style="stop-color: #ec4899; stop-opacity: 1" />
                        <stop offset="40%" style="stop-color: #ec4899; stop-opacity: 0.8" />
                        <stop offset="80%" style="stop-color: #8b5cf6; stop-opacity: 0.4" />
                        <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
                    </radialGradient>
                    
                    <radialGradient id="neonSpot2" cx="50%" cy="50%" r="35%">
                        <stop offset="0%" style="stop-color: #06b6d4; stop-opacity: 1" />
                        <stop offset="30%" style="stop-color: #06b6d4; stop-opacity: 0.9" />
                        <stop offset="70%" style="stop-color: #8b5cf6; stop-opacity: 0.5" />
                        <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
                    </radialGradient>
                    
                    <radialGradient id="neonSpot3" cx="50%" cy="50%" r="25%">
                        <stop offset="0%" style="stop-color: #8b5cf6; stop-opacity: 1" />
                        <stop offset="35%" style="stop-color: #8b5cf6; stop-opacity: 0.7" />
                        <stop offset="75%" style="stop-color: #a855f7; stop-opacity: 0.3" />
                        <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
                    </radialGradient>
                    
                    <radialGradient id="neonSpot4" cx="50%" cy="50%" r="40%">
                        <stop offset="0%" style="stop-color: #fb7185; stop-opacity: 0.8" />
                        <stop offset="30%" style="stop-color: #fb7185; stop-opacity: 0.6" />
                        <stop offset="70%" style="stop-color: #fbbf24; stop-opacity: 0.3" />
                        <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
                    </radialGradient>

                    <!-- Фильтры для реалистичного неонового свечения -->
                    <filter id="neonGlow" x="-300%" y="-300%" width="700%" height="700%">
                        <feGaussianBlur stdDeviation="2" result="innerGlow"/>
                        <feGaussianBlur stdDeviation="8" result="midGlow"/>
                        <feGaussianBlur stdDeviation="20" result="outerGlow"/>
                        <feGaussianBlur stdDeviation="40" result="atmosphereGlow"/>
                        
                        <feColorMatrix in="innerGlow" type="matrix" 
                                     values="1 0 1 0 0
                                             0 0.5 1 0 0
                                             1 0 1 0 0
                                             0 0 0 1 0"/>
                        
                        <feMerge> 
                            <feMergeNode in="atmosphereGlow"/>
                            <feMergeNode in="outerGlow"/>
                            <feMergeNode in="midGlow"/>
                            <feMergeNode in="innerGlow"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    <filter id="atmosphericGlow" x="-400%" y="-400%" width="900%" height="900%">
                        <feGaussianBlur stdDeviation="60" result="hugeglow"/>
                        <feColorMatrix in="hugeglow" type="matrix" 
                                     values="1 0 0.5 0 0
                                             0 0.3 1 0 0
                                             0.5 0 1 0 0
                                             0 0 0 0.6 0"/>
                        <feMerge> 
                            <feMergeNode in="hugeglow"/>
                        </feMerge>
                    </filter>
                    
                    <!-- Анимированная маска для создания движущихся пятен -->
                    <mask id="movingMask">
                        <rect width="100%" height="100%" fill="black"/>
                        <circle r="60" fill="url(#neonSpot1)" opacity="0.8">
                            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                                <mpath href="#borderPath"/>
                            </animateMotion>
                        </circle>
                        <circle r="80" fill="url(#neonSpot2)" opacity="0.6">
                            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="2s">
                                <mpath href="#borderPath"/>
                            </animateMotion>
                        </circle>
                        <circle r="45" fill="url(#neonSpot3)" opacity="0.9">
                            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="4s">
                                <mpath href="#borderPath"/>
                            </animateMotion>
                        </circle>
                        <circle r="70" fill="url(#neonSpot4)" opacity="0.7">
                            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="1s">
                                <mpath href="#borderPath"/>
                            </animateMotion>
                        </circle>
                    </mask>
                </defs>
                
                <!-- Путь для анимации (невидимый) -->
                <path id="borderPath" stroke="none" fill="none" opacity="0"/>
                
                <!-- Атмосферное розовое свечение -->
                <path stroke="#ec4899" stroke-width="45" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#atmosphericGlow)" opacity="0.12" />
                
                <!-- Атмосферное фиолетовое свечение -->
                <path stroke="#8b5cf6" stroke-width="35" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#atmosphericGlow)" opacity="0.15" />
                
                <!-- Слабое оранжевое свечение -->
                <path stroke="#fbbf24" stroke-width="30" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#atmosphericGlow)" opacity="0.08">
                      <animate attributeName="opacity" values="0.05;0.12;0.05" dur="4s" repeatCount="indefinite"/>
                </path>
                
                <!-- Основной слой свечения -->
                <path stroke="#06b6d4" stroke-width="25" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#neonGlow)" opacity="0.4" mask="url(#movingMask)" />
                
                <!-- Розовый неоновый слой -->
                <path stroke="#ec4899" stroke-width="18" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#neonGlow)" opacity="0.5">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
                </path>
                
                <!-- Средний неоновый слой -->
                <path stroke="#3b82f6" stroke-width="15" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#neonGlow)" opacity="0.6">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                </path>
                
                <!-- Фиолетовый внутренний слой -->
                <path stroke="#a855f7" stroke-width="10" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#neonGlow)" opacity="0.7">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.8s" repeatCount="indefinite"/>
                </path>
                
                <!-- Яркий внутренний слой (фиолетово-голубой) -->
                <path stroke="url(#neonSpot2)" stroke-width="8" fill="none" 
                      stroke-linecap="round" stroke-linejoin="round" 
                      filter="url(#neonGlow)" opacity="0.8">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                </path>
                
                <!-- Основная четкая линия -->
                <path stroke="#ffffff" stroke-width="2" fill="none"
                      stroke-linecap="butt" stroke-linejoin="miter" 
                      opacity="0.9">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
                </path>
            `;
        };

        // Инициализация
        createSVGContent();
        // updateSVG();

        // Обновляем при изменении размера окна
        const handleResize = () => {
            // updateSVG();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
