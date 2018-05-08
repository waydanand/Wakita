import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavItems';
import SideToggle from '../SideBar/SideToggle';
import styles from './Toolbar.scss';

const Toolbar = (props) => {
   return (
      <div className={styles.Toolbar}>
         <SideToggle click={props.barToggleClicked} />
         <div className={styles.Logo}>
            <Logo />
         </div>
         <nav className={styles.DesktopOnly}>
            <Navigation />
         </nav>
      </div>
   );
};

export default Toolbar;