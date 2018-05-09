import React from 'react';
import styles from './Logo.scss';
import img from '../../Assets/logo.png';

const Logo = () => {
   return (
      <div className={styles.Logo}>
          <img src={img} alt='Wakita Logo'/> 
      </div>
   );
};


export default Logo;