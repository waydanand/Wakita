import React, { Component } from 'react';
import styles from './Animate.scss';
import { Link } from "react-router-dom";
import KUTE from 'kute.js';

class AnimateInfo extends Component {
    state={

    }


    circleAnimation = e => {
        e.preventDefault();
        const leftCircle = document.querySelector('styles.leftCircle')
        console.log(leftCircle)
        // KUTE.to('leftCircle', {borderRadius: '100%'}).start();
    }

    render() {
        return (
            <div>
                <h2>How Can We Help you?</h2>

                <div className={styles.buyers}>
                    <h3 className="wow fadeInLeft">Buyers</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed et aliquam nisl. Nullam fermentum sodales elit nec 
                    laoreet. In ac interdum ligula. Duis egestas quis ex pulvinar 
                    dapibus.
                    </p>
                </div>

                <div className={styles.circleDiv}>
                    <Link to="">
                        <div className={styles.leftCircle} onClick={e => this.circleAnimation(e)}>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                    </Link>
                    <Link to="/seller">
                        <div className={styles.rightCircle}>
                            <i className="fas fa-home"></i>
                        </div>
                    </Link>
                </div>


                <div className={styles.sellers}>
                    <h3>Sellers</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed et aliquam nisl. Nullam fermentum sodales elit nec 
                    laoreet. In ac interdum ligula. Duis egestas quis ex pulvinar 
                    dapibus.
                    </p>
                </div>
            </div>
        );
    }
}

export default AnimateInfo;