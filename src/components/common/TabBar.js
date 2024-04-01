import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import '../../assets/styles/common/TabBar.css';
import {Link} from 'react-router-dom';
import jsIcon from '../../assets/images/tech-icons/js-icon-new.jpg';
import pugIcon from '../../assets/images/tech-icons/pug-new.jpg';
import cssIcon from '../../assets/images/tech-icons/css-new.jpg';
import jsonIcon from '../../assets/images/tech-icons/json-new.jpg';


const TabBar = () => {
  const { selectedItem, handleItemClick } = useContext(AppContext);  
  return (
      <div className='tabbar'>
        <ul>
          <li className={selectedItem === 'Explorer' ? 'selected' : ''} onClick={() => handleItemClick('Explorer')}>
            <Link to='/'><img src={jsIcon} alt='jsIcon' /><span className='span-space'></span>Home.js</Link>
          </li>
          <li className={selectedItem === 'About' ? 'selected' : ''} onClick={() => handleItemClick('About')}>
            <Link to='/about'><img src={pugIcon} alt='pugIcon' /><span className='span-space'></span>About.pug</Link>
          </li>
          <li className={selectedItem === 'Projects' ? 'selected' : ''} onClick={() => handleItemClick('Projects')}>
            <Link to='/projects'><img src={cssIcon} alt='cssIcon' /><span className='span-space'></span>Projects.css</Link>
          </li>
          <li className={selectedItem === 'Contact' ? 'selected' : ''} onClick={() => handleItemClick('Contact')}>
            <Link to='/contact'><img src={jsonIcon} alt='jsonIcon' /><span className='span-space'></span>Contact.json</Link>
          </li>
        </ul>
      </div>
    );
};
  
export default TabBar;