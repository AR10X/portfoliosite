import React, {useContext} from 'react';
import '../../assets/styles/common/ActivityBar.css';
import {Link} from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import {
  ExplorerWhite,
  ExplorerGrey,
  AboutWhite,
  AboutGrey,
  ProjectsWhite,
  ProjectsGrey,
  ContactWhite,
  ContactGrey,
  ProfileWhite,
  ProfileGrey,
  SettingWhite,
  SettingGrey
} from '../../assets/images/activity-icons';



const ActivityBar = () => {
  const { selectedItem, handleItemClick } = useContext(AppContext);

  return (
      <div className='activitybar'>
        <div className='top'>
          <Link to='/' onClick={() => handleItemClick('Explorer')}>
            <img src={selectedItem === 'Explorer' ? ExplorerWhite : ExplorerGrey} alt='explorer' />
          </Link>
          <Link to='/about' onClick={() => handleItemClick('About')}>
            <img src={selectedItem === 'About' ? AboutWhite : AboutGrey} alt='about' />
          </Link>
          <Link to='/projects' onClick={() => handleItemClick('Projects')}>
            <img src={selectedItem === 'Projects' ? ProjectsWhite : ProjectsGrey} alt='projects' />
          </Link>
          <Link to='/contact' onClick={() => handleItemClick('Contact')}>
            <img src={selectedItem === 'Contact' ? ContactWhite : ContactGrey} alt='contact' />
          </Link>
        </div>
        <div className='bottom'>
            <img src={ProfileGrey} alt='profile' />
            <img src={SettingGrey} alt='setting' />
        </div>
      </div>
    );
};
  
export default ActivityBar;