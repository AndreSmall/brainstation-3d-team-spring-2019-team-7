import React from 'react';
import './SideVideo.scss';
import {Link} from 'react-router-dom';

export default function SideVideo(props) {
    console.log('SideVideo', props);
    return (
        <div>
            <Link to={`/${props.id}`}>
                <video src={props.url} controls></video>
            </Link>
        </div>
    )
}
