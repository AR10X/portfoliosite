import React from 'react';
import '../../assets/styles/common/Explorer.css';
import {Link} from 'react-router-dom';



const Explorer = () => {
    return (
      <div className='explorer'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    );
};
  
export default Explorer;