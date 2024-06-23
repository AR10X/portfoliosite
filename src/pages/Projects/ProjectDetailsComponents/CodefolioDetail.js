// CodefolioDetail.js
import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/codefolio/1.jpg'; 

const CodefolioDetail = () => (
  <div>
    <p>
      Codefolio is a developer portfolio website inspired by the sleek design of the VS Code editor. It showcases projects, skills, and experiences in a familiar coding environment, providing a unique and visually appealing way to present a developer's portfolio.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Designed and developed a portfolio website with a VS Code editor theme.</li>
      <li>Implemented interactive features to showcase projects and skills.</li>
      <li>Ensured the website is responsive and optimized for various devices and screen sizes.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">
      <li><strong>React:</strong> For building the user interface and managing state.</li>
      <li><strong>HTML:</strong> For structuring the content on the website.</li>
      <li><strong>CSS:</strong> For styling the website and ensuring responsiveness.</li>
      <li><strong>JavaScript:</strong> For adding interactivity and dynamic content to the website.</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="defect Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
    </div>
  </div>
);

export default CodefolioDetail;
