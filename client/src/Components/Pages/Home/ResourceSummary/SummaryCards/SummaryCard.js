import React, {Component} from "react";
import styles from "./SummaryCard.scss";
import 'font-awesome/css/font-awesome.min.css';

const SummaryCard = (props) => (
    <div className="cardContainer">
        <div className={[classes.card, classes.cardNum]}>
                <div className={styles.vectorGraphic}>
                    <i className={props.icon}></i>
                </div>
                <h2 className="resourceTitle">{props.children}</h2>
        </div>
    </div>
);

export default SummaryCard;
