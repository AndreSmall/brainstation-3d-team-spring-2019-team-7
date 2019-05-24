import React, {Component} from 'react';

export default class MainVideo extends Component{
    render(){
        return (
            <>
                <video src={this.props.video.url} controls></video>
            </>
        )
    }
}
