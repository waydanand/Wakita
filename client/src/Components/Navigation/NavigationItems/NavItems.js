import React from 'react';
import NavButton from './NavButton/NavButton';
import styles from './NavItems.scss';

const NavItems = () => {
   return (
      <div>
         <ul className={styles.NavItems}>

            <NavButton link='/' exact>Home</NavButton>
            <NavButton link='/propertysearch' exact>Property Seach</NavButton>
            <NavButton link='/sold' exact>Sold</NavButton>
            <NavButton link='/about' exact>About</NavButton>
            <NavButton link='/contact' exact>Contact</NavButton>
         </ul>
      </div>
   );
};


export default NavItems;