import "./portfolio.css";

import IMG1 from "../../assets/CRM.avif";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/intake cal app.png";
import IMG4 from "../../assets/CCTV-.jpg";
import IMG5 from "../../assets/ToDoList.webp";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Togile(CRM)",
      img: IMG1,
      description: "A CRM website built using the MERN stack offers a robust, scalable solution for managing customer relationships with MongoDB, Express.js, React, and Node.js.",
      technologies: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      
      github: "https://github.com/kommineni-venkat/CRM_LoginSignup",
    },
    {
      id: 2,
      title: "CCTV- Facial Recognition",
      img: IMG4,
      description:"Creating a CCTV system with real-time Facial Recognition using Python (OpenCV) backend and JavaScript (React) frontend for enhanced surveillance.",
      technologies: "MERN, Python, Opencv",

      github: "https://github.com/kommineni-venkat/CCTV--Facial-Recognition-in-Motion",
    },
    {
      id: 3,
      title: "Hospital reservation form",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      
      github: "",
    },
    {
      id: 4,
      title: "Intake Calorie Tracker App",
      img: IMG3,
      description:"Intake Calorie Tracker: User-friendly React frontend, Node.js with Express.js backend, facilitating meal logging, calorie tracking, and nutritional data visualization.",
     
    },
    {
      id: 5,
      title: "To-do-List",
      img: IMG5,
      description: "A to-do list can include anything, but simply writing tasks down doesn't ensure its usefulness. Effectively tracking deadlines helps prioritize and complete important work efficiently.",
      technologies: "Html | CSS | Javascript",
      
      
      github: "",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
