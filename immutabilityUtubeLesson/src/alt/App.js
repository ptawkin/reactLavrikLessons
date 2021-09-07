import React from 'react';
import store from './store';
import { observer } from 'mobx-react';

@observer class App extends React.Component {
    render() {
        const numbersList = this.state.numbers.map((number, i) => {
            return (
                <li className='list-group-item'
                    key={ i }
                    onClick={ () => store.double(i) }
                >
                    { number.value }
                </li>
            )
        });

        return (
            <div>
                <button type='button'
                        className='btn btn-primary'
                        onClick={ store.add() }
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

export default App;