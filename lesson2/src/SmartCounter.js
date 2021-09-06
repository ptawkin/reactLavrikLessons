import React, { useState } from 'react';
import PropTypes, {number} from 'prop-types';

function SmartCounter({ min, max }) {
    let [ clicks, setClicks ] = useState(0);
    let [ inputValue, setInputValue ] = useState(clicks);

    const dec = () =>{
        (clicks > min) ? setClicks(clicks - 1): null;
        setInputValue(inputValue = clicks);
    }

    const inc = () => {
        (clicks < max) ? setClicks(clicks++) : null;
        setInputValue(inputValue = clicks);
}


    const inputHandler = (e) => {
        let value = parseInt(e.target.value);

        if (!isNaN(value)) {
            if (value !== clicks) {
                if (value >= min && value <= max) {
                    setClicks(clicks = value)
                    setInputValue(clicks);
                    value = clicks;

                } else if (value < min) {
                    expressChange(min, min, value)

                } else {
                    expressChange(max, max, value)
                }
            }
        } else {
            setClicks(clicks = min);
            setInputValue(inputValue = clicks);
        }
    }

    const expressChange = (firstValue, secondValue, value) => {
        setInputValue(inputValue = max);
        setClicks(clicks = max);
        value = clicks;
    }

    return (
        <div>
            <button
                onClick={dec}
                disabled={clicks <= min}
            >
                -
            </button>
            &nbsp;

            <input
                type="text"
                placeholder={clicks}
                onChange={inputHandler}
                value={inputValue}
            />
            &nbsp;

            <button
                onClick={inc}
                disabled={clicks >= max}
            >
                +
            </button>
        </div>
    )
}

SmartCounter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default SmartCounter;
