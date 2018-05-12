import React from 'react';
import styles from './Copy.scss'

const Copy = () => {
   return (
      <div className={styles.copy}>
        <h1 className={styles.copyHeader}>Sold works</h1>
        <br />
        <p>Thank you for visiting our site. We hope that we can assist you with all your 
        real estate queries and needs. Each associate is committed to helping you make 
        the best real estate decisions. Our team of real estate professionals is here for you!
        </p>

        <p>
        Wakita & Associates has been serving the South Bay and the greater San Diego area
        since 1989. Since our start we have based our company on the same four basic principles:
        </p>
        <ul>
          <li>Service</li>
          <li>Dedication</li>
          <li>Knowledge</li>
          <li>Experience</li>
        </ul>

        <p>With these four principles and years of experience in the field, we have grown as a 
          company and have a better understanding of your needs, the market, and how to best 
          sell your current home or find your new dream home.
        </p>
      </div>
   );
};



export default Copy;