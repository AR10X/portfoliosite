import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/textutils/textutils.jpg'; 

const TextUtilsDetail = () => (
  <div>
    <p>
      This is a static website built with React, HTML, and CSS, which provides various text utility features like word 
      counter, uppercase converter, lowercase converter, and clear text. The site also features a toggle button that 
      allows users to switch between light and dark themes.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Developed a static website using React, HTML, and CSS to provide useful text utility features like word counting, text case conversion, and text clearing.</li>
      <li>Implemented responsive design techniques to ensure the website is optimized for a variety of screen sizes and devices.</li>
      <li>Demonstrated proficiency in front-end development and version control by utilizing Git and GitHub.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">
      <li><strong>React:</strong> For building the user interface and managing state.</li>
      <li><strong>HTML:</strong> For structuring the content on the website.</li>
      <li><strong>CSS:</strong> For styling the website and implementing responsive design.</li>
      <li><strong>Git & GitHub:</strong> For version control and codebase management.</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="MCW Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
    </div>
  </div>
);

export default TextUtilsDetail;
