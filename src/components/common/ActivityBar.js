import React, { useContext, useState } from 'react';
import '../../assets/styles/common/ActivityBar.css';
import { Link } from 'react-router-dom';
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
  const [hoveredItem, setHoveredItem] = useState(null);

  const getIcon = (item, whiteIcon, greyIcon) => {
    if (selectedItem === item || hoveredItem === item) {
      return whiteIcon;
    }
    return greyIcon;
  };

  return (
    <div className='activitybar'>
      <div className='top'>
        <Link to='/' onClick={() => handleItemClick('Explorer')}>
          <img
            src={getIcon('Explorer', ExplorerWhite, ExplorerGrey)}
            alt='explorer'
            onMouseEnter={() => setHoveredItem('Explorer')}
            onMouseLeave={() => setHoveredItem(null)}
          />
        </Link>
        <Link to='/about' onClick={() => handleItemClick('About')}>
          <img
            src={getIcon('About', AboutWhite, AboutGrey)}
            alt='about'
            onMouseEnter={() => setHoveredItem('About')}
            onMouseLeave={() => setHoveredItem(null)}
          />
        </Link>
        <Link to='/projects' onClick={() => handleItemClick('Projects')}>
          <img
            src={getIcon('Projects', ProjectsWhite, ProjectsGrey)}
            alt='projects'
            onMouseEnter={() => setHoveredItem('Projects')}
            onMouseLeave={() => setHoveredItem(null)}
          />
        </Link>
        <Link to='/contact' onClick={() => handleItemClick('Contact')}>
          <img
            src={getIcon('Contact', ContactWhite, ContactGrey)}
            alt='contact'
            onMouseEnter={() => setHoveredItem('Contact')}
            onMouseLeave={() => setHoveredItem(null)}
          />
        </Link>
      </div>
      <div className='bottom'>
        <img
          src={getIcon('Profile', ProfileWhite, ProfileGrey)}
          alt='profile'
          onMouseEnter={() => setHoveredItem('Profile')}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <img
          src={getIcon('Setting', SettingWhite, SettingGrey)}
          alt='setting'
          onMouseEnter={() => setHoveredItem('Setting')}
          onMouseLeave={() => setHoveredItem(null)}
        />
      </div>
    </div>
  );
};

export default ActivityBar;
