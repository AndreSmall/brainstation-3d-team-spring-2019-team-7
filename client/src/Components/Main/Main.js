import React from 'react';
import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';

const Main = (props) =>{
    return (
        <div className="main__container">
            <h1>Great Conversation Starters </h1>
            <p>Tried, tested and true videos to help you break the ice</p>
            <MainVideo />
        </div>
    )
}

export default Main;