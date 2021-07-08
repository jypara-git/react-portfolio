import React from 'react';
import ProjectList from '../../ProjectList';


function Project(props) {
    return (
        <div className="project">
            <h2>{props.name}</h2>
            <a href={props.liveUrl} target="_blank">
                <h3>Live Url</h3>
            </a>
            <div>
                <a href={props.github} target="_blank">
                <img src={props.image} className="image" />
                </a>
            </div>
        </div>
    )
}

export default Project;