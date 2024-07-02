import React from 'react';
import './Projects.css'; // Import your CSS file for styling
import mcwImage from '../../assets/images/projects/project-thumbnails/mcw.jpg';
import defectDetectionImage from '../../assets/images/projects/project-thumbnails/defect-home.jpg';
import WeatherML from '../../assets/images/projects/project-thumbnails/weatherML.png';
import textUtilsImage from '../../assets/images/projects/project-thumbnails/textutils.jpg';
import codefolioImage from '../../assets/images/projects/project-thumbnails/codefolio.jpg';
import appleImage from '../../assets/images/projects/project-thumbnails/apple.jpg';
import ambrosiaImage from '../../assets/images/projects/project-thumbnails/ambrosia.jpg';
import cardchessImage from '../../assets/images/projects/project-thumbnails/card-chess.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      name: 'ManipalCourseWare (MCW)',
      description: 'A video streaming platform for online classes recorded during the COVID pandemic.',
      image: mcwImage,
      url: '/projects/manipalcourseware', 
    },
    {
      id: 2,
      name: 'Defect Detection with Neural Networks',
      description: 'Defect detection web application utilizing a Convolutional Neural Network (CNN) model to identify defects in PP woven fabric.',
      image: defectDetectionImage,
      url: '/projects/defect-detection', 
    },
    {
      id: 3,
      name: 'WeatherML',
      description: 'Weather Report Forecasting Analysis and Visualization using Python, SQL, and PowerBI, with predictive models for future trends.',
      image: WeatherML,
      url: '/projects/weather-ml', 
    },
    {
      id: 4,
      name: 'Codefolio',
      description: 'A developer portfolio website inspired by the sleek design of the VS Code editor.',
      image: codefolioImage,
      url: '/projects/codefolio',
    },
    {
      id: 5,
      name: 'TextUtils',
      description: 'A React-based static website offering essential text tools such as word counting, text case conversion, and text clearing.',
      image: textUtilsImage,
      url: '/projects/text-utils', 
    },
    {
      id: 6,
      name: 'Apple Clone',
      description: 'A replica of the Apple India website using frontend technologies to mirror its design and functionality.',
      image: appleImage,
      url: '/projects/apple', 
    },
    {
      id: 7,
      name: 'Ambrosia',
      description: 'A visually appealing mockup for Ambrosia, a meal replacement product.',
      image: ambrosiaImage,
      url: '/projects/ambrosia', 
    },
    {
      id: 8,
      name: 'Card Chess',
      description: 'Designed cards for a chess app featuring a medieval theme, enhancing the game aesthetic with historical elements.',
      image: cardchessImage,
      url: '/projects/card-chess', 
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map(project => (
        <Link to={project.url} className="project-card" key={project.id} style={{ textDecoration: 'none' }}>
          <div>
            <img className="project-image" src={project.image} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Link to={project.url} className="learn-more-button">Learn More</Link>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};
  
export default Projects;

