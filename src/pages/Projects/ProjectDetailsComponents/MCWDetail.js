import React from 'react';
import screenshot2 from '../../../assets/images/projects/Project-readme/mcw/mcw-home.jpg'; 
import screenshot3 from '../../../assets/images/projects/Project-readme/mcw/mcw-explore.jpg'; 
import screenshot1 from '../../../assets/images/projects/Project-readme/mcw/mcw-login.jpg'; 

const MCWDetail = () => (
  <div>
    <h2>ManipalCourseWare (MCW)</h2>
    <p>ManipalCourseWare (MCW) is a video streaming platform for online classes recorded during the COVID pandemic. It is a Node.js website built with Express and EJS, and uses MongoDB as the database.</p>
    <h3>Project Highlights</h3>
    <ul>
        <li>Designed and Developed a full stack web application, ManipalCourseWare (MCW), a video curation platform for online classes recorded during the COVID pandemic.</li>
        <li>Implemented features for curating and organizing videos of online classes for every branch, section, and subject of the second year students of BTech MIT Manipal (Batch 2023) with edit, delete, and add functionality, as well as utilizing JS modals.</li>
        <li>Microsoft login: To access the platform, users must log in to their Microsoft learner account and have access to the organization whose classes are being recorded.</li>
        <li>Class organization: The platform allows users to easily browse and find videos for the classes they are enrolled in.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>EJS</li>
        <li>MongoDB</li>
        <li>PassportJS</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="MCW Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot2} alt="MCW Screenshot 2" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot3} alt="MCW Screenshot 3" style={{ width: '70%', height: 'auto', marginBottom: '20px'  }} />
    </div>
  </div>
);

export default MCWDetail;
