import React from 'react';

function About() {
    return (
        <section className="content">
             <img src={'/assets/profile-pic.jpeg'} style={{ width: "300px", height: "300px", objectFit: 'contain', borderRadius: "150px", marginTop: "50px"}} alt="face" />
            <h1 style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px"}}> Hi there, I am Zhypara.  I am a UC Berkley Coding Bootcamp graduate. Software Engineer. Outside of tech, I am passionate about living an active lifestyle. I enjoy snowboarding, going to the gym, and dancing! Check out some of my projects below.</h1>
           
        </section>
    )
}

export default About;