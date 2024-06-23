// CardChessDetail.js
import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/cardchess/1.jpg'; 

const CardChessDetail = () => (
  <div>
    <p>
      Card Chess is a project focused on designing cards for a chess app with a medieval theme, enhancing the game's aesthetic with historical elements. The design aims to bring an immersive and engaging experience for the users by incorporating medieval styles and motifs.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Designed a complete set of chess cards with a medieval theme, ensuring each piece is distinct and visually appealing.</li>
      <li>Incorporated historical elements and motifs to enhance the game's aesthetic and user experience.</li>
      <li>Utilized Figma for creating detailed and high-quality card designs, ensuring consistency and visual harmony.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">
      <li><strong>Figma:</strong> For designing the chess cards and creating interactive prototypes.</li>
      <li><strong>Design Principles:</strong> Applied best practices in design for aesthetics and usability.</li>
      <li><strong>Medieval Theme:</strong> Integrated historical elements to create an immersive experience.</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="defect Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
    </div>
  </div>
);

export default CardChessDetail;
