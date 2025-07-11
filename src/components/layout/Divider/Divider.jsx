import React from 'react';
import './Divider.css';

const Divider = () => {
    return (
        <section className="divider">
            <div className="divider-container">
                <div className="divider-line">
                    <div className="divider-center">
                        <div className="divider-dot"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Divider;
