import React, {Component} from 'react';
import SideVideo from '../SideVideo/SideVideo';

export default class SideVideoList extends Component{
    render(){
        return (
            <>
                {this.props.videoList.map(video => <SideVideo id={video.id} url={video.url}/>)}
            </>
        )
    }
}