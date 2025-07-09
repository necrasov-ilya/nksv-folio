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
                        <img src="/assets/svg/black-nksv-logo.svg" alt="NKSV Logo" className="logo" />
                        <span className="brand-name">NKSV_ILYA</span>
                    </div>
                    <nav className="nav-section">
                        <button className="nav-button">Главная</button>
                        <button className="nav-button">Обо мне</button>
                        <button className="nav-button">Проекты</button>
                        <button className="nav-button">Контакты</button>
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
                    <button className="mobile-nav-button" onClick={toggleMobileMenu}>Главная</button>
                    <button className="mobile-nav-button" onClick={toggleMobileMenu}>Обо мне</button>
                    <button className="mobile-nav-button" onClick={toggleMobileMenu}>Проекты</button>
                    <button className="mobile-nav-button" onClick={toggleMobileMenu}>Контакты</button>
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
