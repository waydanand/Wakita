import React from 'react';
import Contact from '../../UI/ContactForm/ContactForm';
import Copy from './Copy/Copy'
import AnimateInfo from './AnimateInfo/AnimateInfo';

const Home = () => {
   return (
      <div>
        <Copy />
        <AnimateInfo />
        <Contact title='Have any Questions?'/>
      </div>
   );
};

export default Home;