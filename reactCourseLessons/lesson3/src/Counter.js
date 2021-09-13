import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from '../hooks/useWindowSize';

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
    let { width } = useWindowSize();
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

    // change from parent side
    useEffect(() => {
        updInp(current);
    }, [current]);

    return <div>
        <button type="button" onClick={ dec } disabled={ current <= min }>-</button>
        &nbsp;
        <input ref={ inp } defaultValue={ current } onBlur={ applyStrValue } size={ width > 500 ? 5 : 2 }/>&nbsp;
        <button type="button" onClick={ inc } disabled={ current >= max }>+</button>
    </div>
}

export default Counter;
