import React, { useState } from 'react';
import Project from '../Project';
const ProjectList = (props) => {
    const [projects] = useState([
        {
            name: 'Monstera',
            image: '/assets/images/monstera.png',
            description: 'The application to prevent domestic violence, where the user is able create a profile, add friends, and in emergency situations send their location.',
            github: 'https://github.com/down-dive/monstera',
            liveUrl: 'https://monstera2.herokuapp.com/signin'
        },
        {
            name: 'Password generator',
            image: '/assets/images/password-generator.png',
            description: 'Web application that allows to generate passwords automatically.',
            github: 'https://github.com/jypara-git/password-generator',
            liveUrl: 'https://jypara-git.github.io/password-generator/'
        },
        {
            name: 'Weather or not',
            image: '/assets/images/project 1.png',
            description: 'Web app that recommends events depending on weather.',
            github: 'https://github.com/kingkevin05/weather-or-not',
            liveUrl: 'https://kingkevin05.github.io/weather-or-not/'
        },
        {
            name: 'Team profile generator',
            image: '/assets/images/teamprofile.png',
            description: 'The command line application that takes in information about employees on a team and generates summaries for each person',
            github: 'https://github.com/jypara-git/Team-Profile-Generator',
            liveUrl: 'https://drive.google.com/file/d/1Edz1oV9N-GSwPFvLm75A5O6Gr7MHKokJ/view'
        },
        {
            name: 'Vibe',
            image: '/assets/images/vibe.png',
            description: 'The app that allows to track your mood and post thoughs.',
            github: 'https://github.com/armyofunicorns/vibe',
            liveUrl: 'https://pacific-lake-95898.herokuapp.com/'
        },
        {
            name: 'Work-day scheduler',
            image: '/assets/images/work-day-scheduler.png',
            description: 'A web application which allows to plan and add events to a work-day schedule.',
            github: 'https://github.com/jypara-git/work-day-scheduler',
            liveUrl: 'https://jypara-git.github.io/work-day-scheduler/'
        }
    ]);


    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {projects.map((project, i) => {
                return (
                    <Project name={project.name} image={project.image} description={project.description} github={project.github} liveUrl={project.liveUrl} />
                )
            })}
        </div>
    )
}


export default ProjectList;