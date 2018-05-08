import React from 'react';
import styles from './SideToggle.scss';

const SideToggle = (props) => {
   return (
      <div className={styles.SideToggle} onClick={props.click}>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
};

export default SideToggle;