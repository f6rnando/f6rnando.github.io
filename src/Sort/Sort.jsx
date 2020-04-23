import React from 'react';
import './Sort.css';

export default class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {array: []};
    }

    componentDidMount() {
        this.reset();
    }

    reset() {
        const array = [];

        for (let i = 0; i < 140; i++) {
            array.push(randomNumbers(5, 800));
        }
        this.setState({array});
    }

    mergeSort() {
        
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, index) => (
                    <div className="array-bar" key={index} style={{height: `${value}px`}}></div>
                ))}
                <div className="sorting-buttons">
                    <button className="reset-button" onClick={() => this.reset()}>New Array</button>
                    <button className="reset-button" onClick={() => this.mergeSort()}>Merge Sort</button>
                </div>
            </div>
        );
    }
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}