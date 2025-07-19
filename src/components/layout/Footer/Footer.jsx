import React from 'react';
import { handleSmoothNavigation } from '../../../utils/smoothScroll';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Верхняя секция с брендом и навигацией */}
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo-section">
                                <img src="/nksv-folio/assets/svg/light-nksv-logo.svg" alt="NKSV Logo" className="footer-logo" draggable="false" />
                                <span className="footer-brand-name">NKSV_ILYA</span>
                            </div>

                            <nav className="footer-nav">
                                <a href="#home" className="footer-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'home')}><span>Главная</span></a>
                                <a href="#skills" className="footer-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'skills', 200)}><span>Обо мне</span></a>
                                <a href="#projects" className="footer-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'projects')}><span>Проекты</span></a>
                                <a href="#contact" className="footer-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'contact')}><span>Контакты</span></a>
                            </nav>
                        </div>

                        <div className="footer-actions">
                            <button className="footer-contact-btn">
                                <img src="/nksv-folio/assets/svg/light-telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                                <span>Связаться со мной</span>
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
