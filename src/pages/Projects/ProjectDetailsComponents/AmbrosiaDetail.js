// AmbrosiaDetail.js
import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/ambrosia/1.jpg'; 

const AmbrosiaDetail = () => (
  <div>
    <p>
      Ambrosia is a visually appealing mockup for a meal replacement product, designed as a Figma design project. The project focuses on the aesthetics and usability of the product, ensuring it is both attractive and functional for potential users.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Created a comprehensive mockup for a meal replacement product using Figma.</li>
      <li>Focused on both aesthetics and usability to create an appealing product design.</li>
      <li>Ensured the design was responsive and adaptable to various screen sizes and devices.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">
      <li><strong>Figma:</strong> For designing the product mockup and creating interactive prototypes.</li>
      <li><strong>Design Principles:</strong> Applied best practices in design for aesthetics and usability.</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="defect Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
    </div>
  </div>
);

export default AmbrosiaDetail;
