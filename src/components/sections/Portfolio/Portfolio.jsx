import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    const portfolioData = [
        {
            id: 1,
            title: "E-commerce платформа",
            category: "web",
            categoryName: "Веб-разработка",
            description: "Современная платформа электронной коммерции с адаптивным дизайном и интуитивным интерфейсом. Полная интеграция с системами оплаты и управления заказами.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/assets/images/portfolio/ecommerce-project.svg",
            year: "2024",
            status: "Завершён",
            hasViewButton: true,
            hasLearnMoreButton: true
        },
        {
            id: 2,
            title: "Мобильное приложение банка",
            category: "design",
            categoryName: "UI/UX Дизайн",
            description: "Дизайн мобильного банковского приложения с фокусом на безопасность и удобство использования. Создан полный пользовательский путь и система компонентов.",
            technologies: ["Figma", "Prototyping", "User Research"],
            image: "/assets/images/portfolio/banking-app.svg",
            year: "2024",
            status: "В разработке",
            hasViewButton: false,
            hasLearnMoreButton: true
        },
        {
            id: 3,
            title: "Корпоративный сайт",
            category: "web",
            categoryName: "Веб-разработка",
            description: "Многостраничный корпоративный сайт с системой управления контентом и аналитикой. Полная SEO-оптимизация и высокая производительность.",
            technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
            image: "/assets/images/portfolio/corporate-website.svg",
            year: "2023",
            status: "Завершён",
            hasViewButton: true,
            hasLearnMoreButton: false
        },
        {
            id: 4,
            title: "Фотопроект 'Городские истории'",
            category: "photography",
            categoryName: "Фотография",
            description: "Серия фотографий, рассказывающая истории людей в городской среде. Документальная фотография с художественным подходом к композиции и свету.",
            technologies: ["Canon EOS R5", "Lightroom", "Photoshop"],
            image: "/assets/images/portfolio/photography-project.svg",
            year: "2023",
            status: "Опубликован",
            hasViewButton: true,
            hasLearnMoreButton: true
        },
        {
            id: 5,
            title: "Система управления",
            category: "web",
            categoryName: "Веб-разработка",
            description: "Административная панель для управления контентом с расширенными возможностями аналитики и мониторинга.",
            technologies: ["React", "TypeScript", "PostgreSQL"],
            image: "/assets/images/portfolio/ecommerce-project.svg",
            year: "2023",
            status: "В разработке",
            hasViewButton: false,
            hasLearnMoreButton: true
        },
        {
            id: 6,
            title: "Мобильное приложение для фитнеса",
            category: "design",
            categoryName: "UI/UX Дизайн",
            description: "Дизайн мобильного приложения для отслеживания тренировок и достижения фитнес-целей.",
            technologies: ["Figma", "After Effects", "Principle"],
            image: "/assets/images/portfolio/banking-app.svg",
            year: "2022",
            status: "Завершён",
            hasViewButton: true,
            hasLearnMoreButton: false
        },
        {
            id: 7,
            title: "Мобильное приложение для фитнеса",
            category: "design",
            categoryName: "UI/UX Дизайн",
            description: "Дизайн мобильного приложения для отслеживания тренировок и достижения фитнес-целей.",
            technologies: ["Figma", "After Effects", "Principle"],
            image: "/assets/images/portfolio/banking-app.svg",
            year: "2022",
            status: "Завершён",
            hasViewButton: true,
            hasLearnMoreButton: false
        },
        {
            id: 8,
            title: "Мобильное приложение для фитнеса",
            category: "design",
            categoryName: "UI/UX Дизайн",
            description: "Дизайн мобильного приложения для отслеживания тренировок и достижения фитнес-целей.",
            technologies: ["Figma", "After Effects", "Principle"],
            image: "/assets/images/portfolio/banking-app.svg",
            year: "2022",
            status: "Завершён",
            hasViewButton: true,
            hasLearnMoreButton: false
        }
    ];

    const categories = [
        { id: 'all', name: 'Все категории' },
        { id: 'web', name: 'Веб-разработка' },
        { id: 'design', name: 'UI/UX Дизайн' },
        { id: 'photography', name: 'Фотография' }
    ];

    const filteredProjects = activeCategory === 'all'
        ? portfolioData
        : portfolioData.filter(project => project.category === activeCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.portfolio');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    useEffect(() => {
        setActiveProject(0);
    }, [activeCategory]);

    const handleProjectChange = (index) => {
        setActiveProject(index);
    };

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    return (
        <section id="portfolio" className={`portfolio ${isVisible ? 'portfolio--visible' : ''}`}>
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Мои работы</h2>
                    <p className="portfolio-subtitle">
                        Избранные проекты, созданные с вниманием к деталям и пользовательскому опыту
                    </p>
                </div>

                <div className="portfolio-categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="portfolio-content">
                    <div className="portfolio-navigation">
                        {filteredProjects.map((project, index) => (
                            <button
                                key={project.id}
                                className={`portfolio-nav-item ${activeProject === index ? 'active' : ''}`}
                                onClick={() => handleProjectChange(index)}
                            >
                                <div className="nav-content">
                                    <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                                    <div className="nav-info">
                                        <span className="nav-title">{project.title}</span>
                                        <span className="nav-category">{project.categoryName}</span>
                                        <span className="nav-year">{project.year}</span>
                                    </div>
                                    <span className="nav-status">{project.status}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="portfolio-showcase">
                        <div className="showcase-image">
                            <div className="image-wrapper">
                                <img
                                    key={`${filteredProjects[activeProject]?.id}-${activeProject}`}
                                    src={filteredProjects[activeProject]?.image}
                                    alt={filteredProjects[activeProject]?.title}
                                    className="project-image"
                                />
                                <div className="image-overlay">
                                    <span className="project-year">{filteredProjects[activeProject]?.year}</span>
                                </div>
                            </div>
                        </div>

                        <div className="showcase-details">
                            <div className="project-header">
                                <div className="project-meta">
                                    <span className="project-category">{filteredProjects[activeProject]?.categoryName}</span>
                                    <span className="project-status">{filteredProjects[activeProject]?.status}</span>
                                </div>
                                <h3 className="project-title">{filteredProjects[activeProject]?.title}</h3>
                            </div>

                            <p className="project-description">{filteredProjects[activeProject]?.description}</p>

                            <div className="project-technologies">
                                <span className="tech-label">Технологии</span>
                                <div className="tech-list">
                                    {filteredProjects[activeProject]?.technologies.map((tech, index) => (
                                        <span key={index} className="tech-item">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-actions">
                                {filteredProjects[activeProject]?.hasViewButton && (
                                    <button className="project-button primary">
                                        <span>Посмотреть проект</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                )}
                                {filteredProjects[activeProject]?.hasLearnMoreButton && (
                                    <button className="project-button secondary">
                                        <span>Узнать больше</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
