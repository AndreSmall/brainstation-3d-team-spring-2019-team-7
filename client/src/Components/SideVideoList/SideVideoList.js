import React, {Component} from 'react';
import SideVideo from '../SideVideo/SideVideo';

export default class SideVideoList extends Component{
    render(){
        return (
            <>
                {this.props.videoList.map(video => <SideVideo url={video.url}/>)}
            </>
        )
    }
}