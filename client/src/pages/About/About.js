import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import aboutImg from "../../assets/profile.jpg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={aboutImg}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Welcome to my portfolio! I'm Maharshi Shukla, a dedicated MERN stack developer with a passion for creating dynamic and efficient web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I build innovative solutions that drive both business success and exceptional user experiences. My approach combines clean, scalable code with responsive design to craft intuitive interfaces and robust backend systems. I thrive on transforming ideas into impactful digital products, and I'm excited to showcase how my skills and creativity can bring your next project to life. Take a look around to see what I've been working on and how I can help make your vision a reality.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
