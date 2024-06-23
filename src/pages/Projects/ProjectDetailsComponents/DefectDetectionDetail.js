// DefectDetectionDetail.js
import React from 'react';
import screenshot1 from '../../../assets/images/projects/Project-readme/defect/result-defect.jpg'; 
import screenshot2 from '../../../assets/images/projects/Project-readme/defect/result-ok.jpg'; 
import screenshot3 from '../../../assets/images/projects/Project-readme/defect/defect-1.jpg'; 
import screenshot4 from '../../../assets/images/projects/Project-readme/defect/defect-2.jpg'; 
import screenshot5 from '../../../assets/images/projects/Project-readme/defect/defect-3.jpg'; 
import screenshot6 from '../../../assets/images/projects/Project-readme/defect/defect-4.jpg'; 

const DefectDetectionDetail = () => (
  <div>
    <p>
      The objective of this project was to develop a deep learning model for image classification. 
      A Convolutional Neural Network (CNN) was implemented and trained using TensorFlow and Keras 
      to classify images into target classes. The data was pre-processed and transformed to prepare 
      it for model training.
    </p>
    <h3>Project Highlights</h3>
    <ul className="bullet-points">
      <li>Developed a defect detection web application utilizing a Convolutional Neural Network (CNN) model to identify defects in PP woven fabric.</li>
      <li>Collected and pre-processed PP woven fabric dataset v1, trained & evaluated a CNN model using TensorFlow and Keras.</li>
      <li>Achieved an accuracy of 92% and F1 score of 0.86.</li>
      <li>Deployed the model in a web application created with Flask (Python), allowing for easy and efficient defect detection for end-users.</li>
    </ul>
    <h3>Technologies Used</h3>
    <ul className="technologies-used">
      <li>TensorFlow</li>
      <li>Keras</li>
      <li>Flask</li>
      <li>Python</li>
    </ul>
    <h3>Visual Overview</h3>
    <div>
        <img src={screenshot1} alt="defect Screenshot 1" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot2} alt="defect Screenshot 2" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot3} alt="defect Screenshot 3" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot4} alt="defect Screenshot 4" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot5} alt="defect Screenshot 5" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
        <img src={screenshot6} alt="defect Screenshot 6" style={{ width: '70%', height: 'auto', marginBottom: '20px' }} />
    </div>
  </div>
);

export default DefectDetectionDetail;
