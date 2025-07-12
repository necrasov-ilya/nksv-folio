import React from 'react';
import './Services.css';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Веб-разработка",
            description: "Создание современных адаптивных веб-сайтов и веб-приложений с использованием актуальных технологий",
            image: "/assets/images/services/web-development.png",
            details: "React, Vue.js, Node.js"
        },
        {
            id: 2,
            title: "UI/UX Дизайн",
            description: "Проектирование интуитивных пользовательских интерфейсов с фокусом на удобство и эстетику",
            image: "/assets/images/services/ux-ui-design.png",
            details: "Figma, Adobe XD, Sketch"
        },
        {
            id: 3,
            title: "Техническая консультация",
            description: "Помощь в выборе технологий, архитектуры проекта и оптимизации существующих решений",
            image: "/assets/images/services/consulting.png",
            details: "Анализ, планирование, рекомендации"
        }
    ];

    return (
        <section id="services" className="services">
            <div className="services-container">
                <div className="services-content">
                    <h2 className="services-title">Чем могу вам помочь?</h2>

                    <div className="services-grid">
                        {servicesData.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} draggable="false" />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <button className="service-button">
                                        <span>Подробнее</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
