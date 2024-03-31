import React from 'react';
import '../../assets/styles/common/MenuBar.css';
import logo from '../../assets/images/logo-vscode.png';
import RightIcons from '../../assets/images/menubar-right.png'

const MenuBar = () => {
    return (
      <div className="menubar">
        <div className='menu-left'>
          <div className='logo'>
              <img src={logo} alt='vs code logo' />
          </div>
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
          </ul>
        </div>
        <div className='menu-right'>
          <img src={RightIcons} alt='Right icons' />
        </div>
      </div>
    );
};
  
export default MenuBar;