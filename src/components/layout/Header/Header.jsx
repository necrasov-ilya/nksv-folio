import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="logo-section">
                        <img src="/assets/svg/dark-nksv-logo.svg" alt="NKSV Logo" className="logo" />
                        <span className="brand-name">NKSV_ILYA</span>
                    </div>
                    <nav className="nav-section">
                        <a href="#home" className="nav-link">Главная</a>
                        <a href="#about" className="nav-link">Обо мне</a>
                        <a href="#projects" className="nav-link">Проекты</a>
                        <a href="#contact" className="nav-link">Контакты</a>
                        <button className="cta-button">
                            <img src="/assets/svg/telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                            Связаться со мной
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
                    <a href="#home" className="mobile-nav-link" onClick={toggleMobileMenu}>Главная</a>
                    <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>Обо мне</a>
                    <a href="#projects" className="mobile-nav-link" onClick={toggleMobileMenu}>Проекты</a>
                    <a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Контакты</a>
                    <button className="mobile-cta-button" onClick={toggleMobileMenu}>
                        <img src="/assets/svg/telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                        Связаться со мной
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
