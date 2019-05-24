import React from 'react';
import './Header.scss';
import logo from '../assets/ted-three-letter-logo-svg@3x.jpg';
let bg=require('../assets/photo-1543269865-cbf-427-effbad.jpg');

const Header = (props) => {
    return (
        <main className="header" style={{backgroundImage: "url("+bg+")"}}>
            <image className="header__logo" src={logo} />
            <h2 className="header__title">Be the smartest person in the room</h2>
            <p className="header__subTitle">Curated TED Talks that help you break the ice and have a great networking experience.</p>
            <div className="header__button">
                <div className="header__buttonText">
                    Get Started
                </div>
            </div>
        </main>
    )
}

export default Header;