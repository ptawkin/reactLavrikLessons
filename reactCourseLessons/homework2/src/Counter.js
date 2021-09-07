import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

Counter.defaultProps = {
    min: 1,
}

function Counter({ min, max, current, onChange }) {
    const [inputValue, setInputValue] = useState(current);

    useEffect(() => setInputValue(current), [current]);

    const inc = () => applyCurrent(current + 1);
    const dec = () => applyCurrent(current - 1);

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const inputBlurHandler = () => {
        const parsedValue = parseInt(inputValue);

        if (isNaN(inputValue)) {
            setInputValue(current);
        } else {
            const nextValue = Math.max(min, Math.min(parsedValue, max));
            current === nextValue ? setInputValue(nextValue) : null;
        }
    }

    const inputKeyPressHandler = (e) => {
        e.key === 'Enter' ? inputBlurHandler() : null;
    }

    const applyCurrent = (number) => {
        const newCurrent = Math.max(min, Math.min(number, max));
        onChange(newCurrent);
    }

    return (
        <div>
            <button
                onClick={dec}
                disabled={current <= min}
            >
                -
            </button>
            &nbsp;

            <input
                type="text"
                value={inputValue}
                size="3"
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                onKeyPress={inputKeyPressHandler}
            />
            &nbsp;

            <button
                onClick={inc}
                disabled={current >= max}
            >
                +
            </button>
        </div>
    )
}

export default Counter;
