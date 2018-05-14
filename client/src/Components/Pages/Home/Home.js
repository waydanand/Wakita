import React from 'react';
import Contact from '../../UI/ContactForm/ContactForm';
import ListingsCarousel from '../../ListingsCarousel/Carousel';
import Banner from './../../UI/Banner/Banner';
import Card from './../../UI/Cards/Cards';

const Home = () => {
   return (
      <div>
        <ListingsCarousel />
        <Banner title="Blog">
            <Card/>
        </Banner>
         
        <Banner title="Testimonials"/>
        <Contact title='Have any Questions?'/>
      </div>
   );
};

export default Home;