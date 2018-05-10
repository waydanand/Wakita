import React, { Component } from 'react';
import "./ResourceSummary.scss";
import 'font-awesome/css/font-awesome.min.css';

class ResourceSummary extends Component {
    // constructor (props) {
    //     super(props);

    //     this.state = {
    //         cards: [
    //             {id: 1, graphic: "Image", more: "link"},
    //             {id: 2, graphic: "Image_2", more: "link_2"}
    //         ],
    //         currentCard: {}
    //     }
    // }

    // componentWillMount () {
    //     const currentCards = this.state.cards;

    //     this.setState({
    //         cards: currentCards,
    //         currentCard: this.currentCard
    //     })
    // }

    render() {
        return (
          <div>
            <div className="row">
                <SummaryCard
                icon="far fa-money-bill-alt"
                card="card"
                cardNum="cardOne">Finance</SummaryCard>
                <SummaryCard
                icon="fas fa-search"
                card="card"
                cardNum="cardTwo">Property Search</SummaryCard>
                <SummaryCard
                icon="fas fa-book"
                card="card"
                cardNum="cardThree">Finance</SummaryCard>
            </div>
            <div className="row">
                <SummaryCard
                icon="fas fa-home"
                card="card"
                cardNum="cardFour">Home Buying 101</SummaryCard>
                <SummaryCard
                icon="far fa-money-bill-alt"
                card="card"
                cardNum="cardFive">Finance</SummaryCard>
            </div>
          </div>
        )
    }
}
