import React from 'react';
import Contact from '../../UI/ContactForm/ContactForm';
import ListingsCarousel from '../../ListingsCarousel/Carousel';
import styles from './Home.scss';

const Home = () => {
   return (
      <div>
        <ListingsCarousel className={styles.listOnGrid}/>
        <Contact title='Have any Questions?'/>
      </div>
   );
};

export default Home;