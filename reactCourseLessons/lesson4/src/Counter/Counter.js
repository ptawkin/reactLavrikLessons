import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';
import SettingsContext from '../contexts/userSettings';

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

Counter.defaultProps = {
    min: 1
}

function Counter({ min, max, current, onChange }) {
    let inp = useRef();
    let updInp = num => inp.current.value = num;

    let dec = () => applyCurrent(current - 1);
    let inc = () => applyCurrent(current + 1);

    let applyStrValue = (e) => {
        let val = parseInt(e.target.value);
        applyCurrent(isNaN(val) ? min : val);
    }

    let applyCurrent = (number) => {
        let newCurrent = Math.max(min, Math.min(number, max));
        updInp(number);

        if (current !== newCurrent) {
            onChange(newCurrent);
        }
    }

    let settings = useContext(SettingsContext);
    console.log(settings);

    // change from parent side
    useEffect(() => {
        updInp(current);
    }, [current]);

    //derived state from prop update. mb better in parent with key

    return <div>
        <button
            className='btn btn-danger'
            type="button"
            onClick={ dec }
            disabled={ current <= min }
            title={ settings.lang === 'ru' ? 'уменьшить' : 'deccrease' }
        >
            -
        </button>
        &nbsp;
        <input ref={ inp } defaultValue={ current } onBlur={ applyStrValue }
               className={ `counter ${ styles.modalBox }` }/>&nbsp;
        <button
            className='btn btn-success'
            type="button"
            onClick={ inc }
            disabled={ current >= max }
            title={ settings.lang === 'ru' ? 'увеличить' : 'increase' }
        >
            +
        </button>
    </div>
}

export default Counter;
