import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavButton.scss';

const NavButton = (props) => {
   return (
      <div>
         <li className={styles.NavItem}>
            <NavLink exact={props.exact} activeClassName={styles.active}
                     to={props.link}>
            {props.children}
            </NavLink>
         </li>         
      </div>
   );
};

export default NavButton;