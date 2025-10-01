import React from 'react';
import { useParams } from 'react-router-dom';
import mcwImage from '../../assets/images/projects/icons/mcw.svg';
import defectDetectionImage from '../../assets/images/projects/icons/defect.svg';
import WeatherML from '../../assets/images/projects/icons/weather.svg';
import codefolioImage from '../../assets/images/projects/icons/codefolio.svg';
import appleImage from '../../assets/images/projects/icons/apple.svg';
import ambrosiaImage from '../../assets/images/projects/icons/ambrosia.svg';
import cardchessImage from '../../assets/images/projects/icons/card-chess.svg';
import textUtilsImage from '../../assets/images/projects/icons/textutils.svg';
import splitcartImage from '../../assets/images/projects/icons/splitcart.svg';

import MCWDetail from './ProjectDetailsComponents/MCWDetail';
import DefectDetectionDetail from './ProjectDetailsComponents/DefectDetectionDetail';
import WeatherMLDetail from './ProjectDetailsComponents/WeatherMLDetail';
import CodefolioDetail from './ProjectDetailsComponents/CodefolioDetail';
import TextUtilsDetail from './ProjectDetailsComponents/TextUtilsDetail';
import AppleCloneDetail from './ProjectDetailsComponents/AppleCloneDetail';
import AmbrosiaDetail from './ProjectDetailsComponents/AmbrosiaDetail';
import CardChessDetail from './ProjectDetailsComponents/CardChessDetail';
import SplitcartDetail from './ProjectDetailsComponents/SplitcartDetail';


import './ProjectDetail.css';

const projectDetails = {
  'splitcart': {
    name: 'Splitcart – Real-time Group Cart',
    version: '1.0.0',
    url: 'https://splitcart.vercel.app/',
    description: 'A collaborative shopping cart enabling multiple users to add/remove items simultaneously with real-time sync (<1s latency) using React, Firebase, and Context API.',
    tags: ['React', 'Firebase', 'Context API', 'Realtime'],
    image: splitcartImage,
    details: <SplitcartDetail />,
  },
  'manipalcourseware': {
    name: 'ManipalCourseWare (MCW)',
    version: '2.1.0',
    url: 'https://manipalcourseware.onrender.com/',
    description: 'A video streaming platform for online classes recorded during the COVID pandemic.',
    tags: ['frontend', 'nodejs', 'backend', 'MongoDB', 'PassportJS'],
    image: mcwImage,
    details: <MCWDetail />,
  },
  'defect-detection': {
    name: 'Defect Detection with Neural Networks',
    version: '1.2.0',
    url: 'https://github.com/AR10X/defect_detector_cnn_model',
    description: 'Defect detection web application utilizing a Convolutional Neural Network (CNN) model to identify defects in PP woven fabric.',
    tags: ['Deep Learning', 'Python', 'tensorflow', 'keras'],
    image: defectDetectionImage,
    details: <DefectDetectionDetail />,
  },
  'weather-ml': {
    name: 'WeatherML',
    version: '1.0.0',
    url: 'https://github.com/AR10X/data-analysis',
    description: 'Weather Report Forecasting Analysis and Visualization using Python, SQL, and PowerBI, with predictive models for future trends.',
    tags: ['Python', 'SQL', 'PowerBI', 'Machine Learning'],
    image: WeatherML,
    details: <WeatherMLDetail />,
  },
  'codefolio': {
    name: 'Codefolio',
    version: '1.0.0',
    url: 'https://abdulrehaman.onrender.com/',
    description: 'A developer portfolio website inspired by the sleek design of the VS Code editor.',
    tags: ['frontend', 'react'],
    image: codefolioImage,
    details: <CodefolioDetail />,
  },
  'text-utils': {
    name: 'TextUtils',
    version: '2.1.0',
    url: 'https://textutils-react.onrender.com/',
    description: 'A React-based static website offering essential text tools such as word counting, text case conversion, and text clearing.',
    tags: ['frontend', 'react','Responsive CSS'],
    image: textUtilsImage,
    details: <TextUtilsDetail />,
  },
  'apple': {
    name: 'Apple Clone',
    version: '1.0.0',
    url: 'https://ar10x.github.io/apple-clone/',
    description: 'A replica of the Apple India website using frontend technologies to mirror its design and functionality.',
    tags: ['frontend', 'react', 'CSS'],
    image: appleImage,
    details: <AppleCloneDetail />,
  },
  'ambrosia': {
    name: 'Ambrosia',
    version: '1.0.0',
    url: 'https://www.figma.com/file/pVc5IgYDFLat2f0gVRnu9C/Ambrosia-Meal-replacement-product-mockup?node-id=0:1&t=qqToUqbYs62Xka4B-1',
    description: 'A visually appealing mockup for Ambrosia, a meal replacement product.',
    tags: ['Design', 'Mockup', 'Product'],
    image: ambrosiaImage,
    details: <AmbrosiaDetail />,
  },
  'card-chess': {
    name: 'Card Chess',
    version: '1.0.0',
    url: 'https://www.figma.com/file/4ko33BFYyuC0YdBhxkgQd5/card-chess-pieces?node-id=0:1&t=ApA5oapjpCZGlywa-1',
    description: 'Designed cards for a chess app featuring a medieval theme, enhancing the game aesthetic with historical elements.',
    tags: ['Design', 'Chess', 'Medieval Theme'],
    image: cardchessImage,
    details: <CardChessDetail />,
  },
};


const tagColors = [
  '#e57373', 
  '#f06292', 
  '#ba68c8', 
  '#9575cd', 
  '#7986cb', 
  '#64b5f6', 
  '#4fc3f7', 
  '#4db6ac', 
  '#81c784', 
  '#aed581', 
  '#dce775', 
  '#fff176', 
  '#ffd54f', 
  '#ffb74d', 
  '#ff8a65', 
];

function ProjectDetail() {
  const { projectName } = useParams();
  const project = projectDetails[projectName];


  return (
    <div className="detail-container">
      <div className="detail-card">
        <img className="detail-image" src={project.image} alt={project.name} />
        <div className="detail-info">
          <h3>
            {project.name}
            <span className="version"> v{project.version}</span>
          </h3>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-url">
            {project.url}
          </a>
          <p className="project-description">{project.description}</p>
          {/* <p>{project.fullDescription}</p> */}
          
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span
                key={tag}
                className="tag"
                style={{ backgroundColor: tagColors[index % tagColors.length] }}
              >
                {tag}
              </span>
            ))}
          </div>
          <button onClick={() => window.open(project.url, '_blank')} className="visit-site-button">
            Visit Site
          </button>
        </div>
      </div>
      <div className="details-option-menu">
        <span className="details-op-term">details</span>
        <span className="details-option">features</span>
      </div>
      <div style={{ marginLeft: '130px', paddingTop: '10px', paddingBottom: '30px' }}>
        {project.details}
      </div>
    </div>
  );
}

export default ProjectDetail;
