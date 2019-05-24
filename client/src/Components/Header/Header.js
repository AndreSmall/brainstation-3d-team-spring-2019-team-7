import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <>
            <h2 className="header__title">Sound like the smartest person in the room</h2>
            <p className="header__subTitle">Curated videos that help you break the ice and have a great networking experience.</p>
            <div className="header__button">
                <button className="header__buttonText">
                    Get Started
                </button>
            </div>

        </>
    )
}

export default Header;