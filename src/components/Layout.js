import React from 'react';
import '../assets/styles/Layout.css';
import { Outlet } from 'react-router-dom';
import MenuBar from './common/MenuBar';
import ActivityBar from './common/ActivityBar';
import Explorer from './common/Explorer';
import TabBar from './common/TabBar';
import StatusBar from './common/StatusBar';



const Layout = () => {
    return (
      <div className='container'>
        <MenuBar />
        <div className='content'>
          <ActivityBar />
          <Explorer />
          <div >
            <TabBar />
            <div className='outlet'>
              <Outlet />
            </div>
          </div>
        </div>
        <StatusBar />
      </div>
    );
};
  
export default Layout;