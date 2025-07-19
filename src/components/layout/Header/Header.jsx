import React, { useState } from 'react';
import { handleSmoothNavigation } from '../../../utils/smoothScroll';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileNavClick = (e, targetId) => {
        handleSmoothNavigation(e, targetId);
        toggleMobileMenu();
    };

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="logo-section">
                        <img src="/nksv-folio/assets/svg/dark-nksv-logo.svg" alt="NKSV Logo" className="logo" draggable="false" />
                        <span className="brand-name">NKSV_ILYA</span>
                    </div>
                    <nav className="nav-section">
                        <a href="#home" className="nav-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'home')}><span>Главная</span></a>
                        <a href="#skills" className="nav-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'skills', 200)}><span>Обо мне</span></a>
                        <a href="#projects" className="nav-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'projects')}><span>Проекты</span></a>
                        <a href="#contact" className="nav-link" draggable="false" onClick={(e) => handleSmoothNavigation(e, 'contact')}><span>Контакты</span></a>
                        <button className="cta-button">
                            <img src="/nksv-folio/assets/svg/logo-telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                            <span>Связаться со мной</span>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Мобильная кнопка бургер-меню */}
            <button
                className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Открыть меню"
            >
                <div className="burger-lines">
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </div>
            </button>

            {/* Мобильное меню */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <a href="#home" className="mobile-nav-link" onClick={(e) => handleMobileNavClick(e, 'home')}>Главная</a>
                    <a href="#about" className="mobile-nav-link" onClick={(e) => handleMobileNavClick(e, 'about')}>Обо мне</a>
                    <a href="#projects" className="mobile-nav-link" onClick={(e) => handleMobileNavClick(e, 'projects')}>Проекты</a>
                    <a href="#contact" className="mobile-nav-link" onClick={(e) => handleMobileNavClick(e, 'contact')}>Контакты</a>
                    <button className="mobile-cta-button" onClick={toggleMobileMenu}>
                        <img src="/nksv-folio/assets/svg/telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                        Связаться со мной
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
