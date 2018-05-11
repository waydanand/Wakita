import React, { Component } from 'react';
import ReactSiema from 'react-siema'
import styles from './Carousel.scss';

class Carousel extends Component {

constructor(props) {
    super(props);

    this.state = {

    }
}

Slide = (props) => <img {...props} alt='slide' />;

render() {
    let slider;
    let autoSlide = () => setInterval(() => slider.next(), 6000);
    const Slide = (props) => <img {...props} alt='slide' />;
    const options = {
            resizeDebounce: 250,
            duration: 1000,
            easing: 'ease-in',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            threshold: 20,
            loop: true
    };
    autoSlide();   

        return (
            
            <div className={styles.siemaCarousel}>
                <ReactSiema {...options} ref={siema => slider = siema}>
                    <Slide src='http://sandiegodreamrealestate.com/wp-content/uploads/sites/208/2018/04/6326-lake-athabaska-pl-007-1024x683.jpg' />
                    <Slide src='http://sandiegodreamrealestate.com/wp-content/uploads/sites/208/2018/04/6326-lake-athabaska-pl-007-1024x683.jpg' />
                    <Slide src='http://sandiegodreamrealestate.com/wp-content/uploads/sites/208/2018/04/6326-lake-athabaska-pl-007-1024x683.jpg' />
                    <Slide src='http://sandiegodreamrealestate.com/wp-content/uploads/sites/208/2018/04/6326-lake-athabaska-pl-007-1024x683.jpg' />
                </ReactSiema>

                <button className={styles.prev} onClick={() => slider.prev()}>prev</button>
                <button className={styles.next} onClick={() => slider.next()}>next</button>
            </div>

        );
    }
}

export default Carousel;