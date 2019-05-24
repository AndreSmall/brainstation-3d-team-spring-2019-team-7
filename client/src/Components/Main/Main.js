import React, {Component} from 'react';
import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';
import videoData from '../../data/videos.json';
import SideVideoList from '../SideVideoList/SideVideoList';

class Main extends Component{
    state={
        initialMainVideo: videoData[0]
    }

    render(){
        return (
            <div className="main__container">
                <h1>Great Conversation Starters </h1>
                <p>Tried, tested and true videos to help you break the ice</p>
                <MainVideo />
                <SideVideoList videoList={videoData.filter(video => video.url !== this.state.initialMainVideo)} />
                {console.log(videoData)}
            </div>
        )
    }
}

export default Main;