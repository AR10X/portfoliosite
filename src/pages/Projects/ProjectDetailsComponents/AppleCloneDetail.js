// AppleCloneDetail.js
import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/apple/apple.jpg'; 
import screenshot2 from '../../../assets/images/projects/Project-readme/apple/apple-2.jpg'; 
import screenshot3 from '../../../assets/images/projects/Project-readme/apple/apple-3.jpg'; 

const AppleCloneDetail = () => (
  <div>
    <h2>Apple Clone</h2>
    <p>
      A replica of the Apple India website using frontend technologies to mirror its design and functionality. This project showcases the ability to recreate a complex and visually appealing website, ensuring that it is responsive and user-friendly.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Recreated the design and functionality of the Apple India website using modern frontend technologies.</li>
      <li>Ensured the website is responsive, adapting to various screen sizes and devices for an optimal user experience.</li>
      <li>Utilized CSS for styling, ensuring the visual appeal matches that of the original website.</li>
      <li>Demonstrated proficiency in front-end development, showcasing skills in React and CSS.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">

      <li><strong>HTML:</strong> For structuring the content on the website.</li>
      <li><strong>CSS:</strong> For styling the website and ensuring responsiveness.</li>
      <li><strong>JavaScript:</strong> For adding interactivity and dynamic content to the website.</li>
      <li><strong>Git & GitHub:</strong> For version control and codebase management.</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="defect Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot3} alt="defect Screenshot 2" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot2} alt="defect Screenshot 3" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
    </div>
  </div>
);

export default AppleCloneDetail;
