import React, {Component} from 'react';
import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';
import videoData from '../../data/videos.json';
import SideVideoList from '../SideVideoList/SideVideoList';

class Main extends Component{
    state={
        initialMainVideo: videoData[0]
    }



    componentDidUpdate(){

        console.log('mmm', this.props.match.params.id, this.state.initialMainVideo.id);
        
       if(this.props.match.params.id !== (this.state.initialMainVideo && this.state.initialMainVideo.id)){ 
        const video = {initialMainVideo: videoData.find(video => video.id === this.props.match.params.id)};

        console.log('updated')

        this.setState(video);
       }
            
    }
    render(){
        //console.log(this.state)
        return (
            <div className="main__container">
                {console.log(this.props)}
                <h1>Great Conversation Starters </h1>
                <p>Tried, tested and true videos to help you break the ice</p>
                <MainVideo video={this.state.initialMainVideo}/>
                <SideVideoList videoList={videoData.filter(video => video.url !== this.state.initialMainVideo)} />
            </div>
        )
    }
}

export default Main;