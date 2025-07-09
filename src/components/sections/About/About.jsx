import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-title">Илья Некрасов</h2>
                    <p className="about-description">
                        Lorem Ipsum Lorem ipsumLorem Ipsum Lorem ipsumLorem Ipsum Lorem ipsum
                        Lorem Ipsum Lorem ipsumLorem Ipsum
                    </p>
                    <button className="about-cta-button">
                        <img src="/assets/svg/telegram-logo.svg" alt="Telegram" className="telegram-icon" />
                        Связаться со мной
                    </button>
                </div>
                <div className="about-image">
                    <img src="/assets/images/nksv-portrait.png" alt="Портрет NKSV" className="portrait" />
                </div>
            </div>
        </section>
    );
};

export default About;
