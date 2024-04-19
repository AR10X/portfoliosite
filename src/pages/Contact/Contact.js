import React from 'react';
import Terminal from '../../components/utilities/Terminal';
import './Contact.css';
import NumImg from '../../assets/images/home/home-line.jpg';

const Contact = () => {
  const socialData = {
    email: {
      username: 'arehamanofficial@gmail.com',
      link: ''
    },
    twitter: {
      username: 'rehamanium',
      link: 'https://twitter.com/rehamanium'
    },
    instagram: {
      username: 'rehamanium',
      link: 'https://www.instagram.com/rehamanium?igsh=MmQzOWlsaDBvZmtr'
    },
    linkedin: {
      username: 'arehaman706',
      link: 'https://www.linkedin.com/in/arehaman706/'
    },
    github: {
      username: 'AR10X',
      link: 'https://github.com/AR10X'
    }
  };  

  return (
    <div>
      <div className='contact-main'>
        <div>
          <img src={NumImg} alt='numbers' />
        </div>
        <div className="contact-container">
          <div className="json-data">
            
              <code>
                {"{"}
                {Object.entries(socialData).map(([key, { username, link }], index) => (
                  <React.Fragment key={index}>
                    <div className="json-item">
                      <span className="key">"{key}":</span>
                      <a href={link} className="value">
                        {username}
                      </a>
                      {index !== Object.keys(socialData).length - 1 && ','}
                    </div>
                  </React.Fragment>
                ))}
                {"}"}
              </code>
            
          </div>
        </div>
      </div>
      <Terminal />
    </div>
  );
};
  
export default Contact;
