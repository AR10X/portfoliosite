import React, {useState} from 'react';
import '../../assets/styles/common/ActivityBar.css';
import {Link} from 'react-router-dom';
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
  const [selectImg, setSelectImg] = useState('Explorer');   

  const handleImgClick = (imgState) => {
    setSelectImg(imgState);
  }

  return (
      <div className='activitybar'>
        <div className='top'>
          <Link to='/'>
            <img src={selectImg === 'Explorer' ? ExplorerWhite : ExplorerGrey} alt='explorer' onClick={() => handleImgClick('Explorer')} />
          </Link>
          <Link to='/about'>
            <img src={selectImg === 'About' ? AboutWhite : AboutGrey} alt='about' onClick={() => handleImgClick('About')} />
          </Link>
          <Link to='/projects'>
            <img src={selectImg === 'Projects' ? ProjectsWhite : ProjectsGrey} alt='projects' onClick={() => handleImgClick('Projects')} />
          </Link>
          <Link to='/contact'>
            <img src={selectImg === 'Contact' ? ContactWhite : ContactGrey} alt='contact' onClick={() => handleImgClick('Contact')} />
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