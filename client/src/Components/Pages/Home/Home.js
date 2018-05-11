import React from 'react';
import Contact from '../../UI/ContactForm/ContactForm';
import ListingsCarousel from '../../ListingsCarousel/Carousel';

const Home = () => {
   return (
      <div>
        <ListingsCarousel />
        <Contact title='Have any Questions?'/>
      </div>
   );
};

export default Home;