import React from 'react';
import '../../pages/About/SkillComp.css';

const SkillComp = ({ logo, heading, description }) => {
  return (
    <div className='skill-main'>
        <div className='about-txt-9-top'>
            <img src={logo} alt={`${heading} logo`} />
            <div className='about-txt-9-top-inner'>
                <div>{heading}</div>
            </div>
        </div>
        <div className='about-txt-9-bottom'>
            <div className='about-txt-9-bottom-inner'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
};

export default SkillComp;
