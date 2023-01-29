import React from "react";
import photo from "../images/photo.jpg"

const About = () => {
  return (
    <div className="App-about">
        <h1 className="section-title">About Me</h1>
        <img src={photo} alt='My photo' className='my-photo'/>
        <div className="container">
            <p>
                I'm a developer with a passion for solving problems and creating innovative solutions 💡. 
                I'm always learning 🤓 and striving to improve my skills, and I'm excited to be a part of the development community 🌟. 
                I believe that collaboration 🤝 and continuous learning 🧠 are key to success in this field, and I'm eager to work with others 🤝 to build something great 🚀.
            </p>
        </div>
    </div>
  );
};

export default About;