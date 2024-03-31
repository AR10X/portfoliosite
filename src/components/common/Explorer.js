import React from 'react';
import '../../assets/styles/common/Explorer.css';
import {Link} from 'react-router-dom';
import jsIcon from '../../assets/images/js-icon.jpg';
import pugIcon from '../../assets/images/pug-icon.jpg';
import cssIcon from '../../assets/images/css-icon.jpg';
import jsonIcon from '../../assets/images/json-icon.jpg';


const Explorer = () => {
    return (
      <div className='explorer'>
        <p className='heading-lg'>EXPLORER</p>
        <p className='heading-sm'>PORTFOLIO-APP</p>
        <ul>
          <li>
            <Link to='/'><img src={jsIcon} alt='jsIcon' />Home</Link>
          </li>
          <li>
            <Link to='/about'><img src={pugIcon} alt='pugIcon' />About</Link>
          </li>
          <li>
            <Link to='/Projects'><img src={cssIcon} alt='cssIcon' />Projects</Link>
          </li>
          <li>
            <Link to='/Contact'><img src={jsonIcon} alt='jsonIcon' />Contact</Link>
          </li>
        </ul>
      </div>
    );
};
  
export default Explorer;