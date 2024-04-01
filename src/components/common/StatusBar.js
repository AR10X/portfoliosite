import React from 'react';
import '../../assets/styles/common/StatusBar.css';
import dArrow from '../../assets/images/status-icons/double-arrow.svg';
import giticon from '../../assets/images/status-icons/github.svg';
import syncicon from '../../assets/images/status-icons/sync-icon.svg';
import bell from '../../assets/images/status-icons/bell.svg';
import prettier from '../../assets/images/status-icons/prett-icon.svg';


const StatusBar = () => {
    return (
      <div className='status'>
        <div className='status-left'>
          <img className='double-arrow' src={dArrow} alt='double arrow'></img>
          <img className='git-icon' src={giticon} alt='git icon'></img>
          <div>main*</div>
          <img className='sync-icon' src={syncicon} alt='sync icon'></img>
        </div>
        <div className='status-right'>
          <div className='status-txt'>UTF-8</div>
          <div className='status-txt'>CRLF</div>
          <img src={prettier} alt='prettier icon'></img>
          <div className='pretty-txt'>Prettier</div>
          <img className='bell' src={bell} alt='sync icon'></img>
          
        </div>
      </div>
    );
};
  
export default StatusBar;