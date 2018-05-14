import React from 'react';
import styles from './Banner.scss';

const Banner = (props) => {
   return (
      <div className={styles.Box}>
         <h3 className={styles.Title}>{props.title}</h3>
      
         {props.children}
      </div>
   );
}; 

export default Banner;