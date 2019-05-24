import React from 'react';
import './SideVideo.scss';

export default function SideVideo(props) {
    return (
        <div>
            <video src={props.url} controls></video>
        </div>
    )
}
