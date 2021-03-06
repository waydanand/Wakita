import React from 'react';
import styles from './Button.scss';

const button = (props) => {
   return (
      <div>
         <button disabled={props.disabled}
            className={[styles.Button, styles[props.btnType]].join(' ')}
            onClick={props.clicked}
         >{props.children}</button>
      </div>
   );
};

export default button;