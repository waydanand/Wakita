import React from 'react';
import styles from './Cards.scss';

const Cards = (props) => {
   return (
      <div className={[styles.card, styles[props.cardSize]].join(' ')}>
         <img src={props.image} alt={props.imageInfo} className={[styles.image, styles[props.imageSize]].join(' ')} />
         <div className={[styles.Text1, styles[props.text1]].join(' ')}>
            <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast </p>
         </div>
         <div>
            {props.info2}
         </div>
      </div>
   );
};

export default Cards;