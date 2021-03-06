import React from 'react';
import Contact from '../../UI/ContactForm/ContactForm';
import Copy from './Copy/Copy'
import AnimateInfo from './AnimateInfo/AnimateInfo';
import ListingsCarousel from '../../ListingsCarousel/Carousel';
import Banner from './../../UI/Banner/Banner';
import Card from './../../UI/Cards/Cards';

import styles from './Home.scss';


const Home = () => {
   return (
      <div>

        <ListingsCarousel className={styles.listOnGrid}/>
        <Copy />
        <AnimateInfo />
        <Banner title="Blog">
            <Card/>
        </Banner>
        <Banner title="Testimonials"/>
        <Contact title='Have any Questions?'/>
     
      </div>
   );
};

export default Home;