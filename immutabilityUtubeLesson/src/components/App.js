import React from 'react';
import { number } from "prop-types";

export default class App extends React.PureComponent {
    state = {
        numbers: [],
    }

    add = () => {
        const numbers = [...this.state.numbers];
        const value = Math.floor(Math.random() * 10) + 1;
        const obj = {
            value,
            someProp: 1,
            otherProp: 2,
        };

        numbers.push(obj);
        this.setState({ numbers });
    }

    double(i) {
        const numbers = [...this.state.numbers];
        numbers[i] = {
            ...numbers[i],
            value: numbers[i].value * 2
         };

        this.setState({
            numbers,
        })
    }

    render() {
        const numbersList = this.state.numbers.map((number, i) => {
            return (
                <li className='list-group-item'
                    key={ i }
                    onClick={ () => this.double(i) }
                >
                    { number.value }
                </li>
            )
        });

        return (
            <div>
                <button type='button'
                        className='btn btn-primary'
                        onClick={ this.add }
                >
                    Add
                </button>
                <hr/>
                <ul className='list-group'>
                    { numbersList }
                </ul>
            </div>
        )
    }
}
