import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Верхняя секция с брендом и навигацией */}
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo-section">
                                <img src="/assets/svg/light-nksv-logo.svg" alt="NKSV Logo" className="footer-logo" />
                                <span className="footer-brand-name">NKSV_ILYA</span>
                            </div>

                            <nav className="footer-nav">
                                <a href="#home" className="footer-link">Главная</a>
                                <a href="#about" className="footer-link">Обо мне</a>
                                <a href="#projects" className="footer-link">Проекты</a>
                                <a href="#contact" className="footer-link">Контакты</a>
                            </nav>
                        </div>

                        <div className="footer-actions">
                            <button className="footer-contact-btn">
                                <img src="/assets/svg/telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                                Связаться со мной
                            </button>
                            <div className="footer-status">
                                <span className="status-text">Следите за обновлениями</span>
                            </div>
                        </div>
                    </div>

                    {/* Нижняя секция */}
                    <div className="footer-bottom">
                        <p className="footer-copyright">© {currentYear} NKSV_ILYA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
