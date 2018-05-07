import React from 'react';
import styles from './Backdrop.scss';

const Backdrop = (props) => {
   return (
      props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
   );
};

export default Backdrop;