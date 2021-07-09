import React from 'react';


function Resume() {
 return(
     <div>
         <h1>My resume</h1>
         <button className="container"><a className="resume" href={'assets/resume.docx'} target="_blank" rel="noreferrer">Resume</a></button>
         <h1>Technical Skills:</h1>
         <div style={{width: "100%", alignItems: "center",  justifyContent: "center", display: "flex"}}>
            <div className="skillslist">
                <p> Git, HTML5, CSS, JavaScript, JQuery,
                    Bootstrap, MySQL, Express.js, Node.js,
                    Sequelize, React, Handlebars.js, MERN,
                    MongoDB, NoSQL
                </p>
            </div>
        </div>
     </div>
 )
}

export default Resume;