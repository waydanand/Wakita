import React from 'react';
import NavButton from './NavButton/NavButton';
import styles from './NavItems.scss';

const NavItems = () => {
   return (
      <div>
         <ul className={styles.NavItems}>

            <NavButton link='/' exact>Home</NavButton>
            <NavButton link='/agents' exact>Agents</NavButton>
            <NavButton link='/listings' exact>Listings</NavButton>
            {/* add more nav links if needed */}
         </ul>
      </div>
   );
};


export default NavItems;