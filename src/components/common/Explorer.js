import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/common/Explorer.css';
import {Link} from 'react-router-dom';
import jsIcon from '../../assets/images/tech-icons/js-icon-new.jpg';
import pugIcon from '../../assets/images/tech-icons/pug-new.jpg';
import cssIcon from '../../assets/images/tech-icons/css-new.jpg';
import jsonIcon from '../../assets/images/tech-icons/json-new.jpg';


const Explorer = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='explorer'>
        <p  className='heading-1' >EXPLORER</p>
        <p className='heading-2' onClick={toggleOptions} >{isOpen ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} />
        )}<span className='span-space'></span>PORTFOLIO-APP
        </p>
        {isOpen && (
        <ul>
          <li>
            <Link to='/'><img src={jsIcon} alt='jsIcon' /><span className='span-space'></span>Home.js</Link>
          </li>
          <li>
            <Link to='/about'><img src={pugIcon} alt='pugIcon' /><span className='span-space'></span>About.pug</Link>
          </li>
          <li>
            <Link to='/Projects'><img src={cssIcon} alt='cssIcon' /><span className='span-space'></span>Projects.css</Link>
          </li>
          <li>
            <Link to='/Contact'><img src={jsonIcon} alt='jsonIcon' /><span className='span-space'></span>Contact.json</Link>
          </li>
        </ul>
        )}
      </div>
    );
};
  
export default Explorer;