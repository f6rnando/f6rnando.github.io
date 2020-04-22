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

        for (let i = 0; i < 100; i++) {
            array.push(randomNumbers(5, 1000));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <>
                {array.map((value, index) => (
                    <div className="array-bar" key={index}>
                        {value}
                    </div>
                ))}
            </>
        );
    }
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}