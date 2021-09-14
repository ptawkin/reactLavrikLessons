import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

CounterState.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

CounterState.defaultProps = {
	min: 1
}

function CounterState({ min, max, current, onChange }){
	let [value, setValue] = useState((current));
	let inpStr = (e) => setValue(e.target.value);

	let dec = () => applyCurrent(current - 1);
	let inc = () => applyCurrent(current + 1);

	let applyStrValue = () => {
		let val = parseInt(value);
		applyCurrent(isNaN(val) ? min : val);
	}

	let applyCurrent = (number) => {
		let newCurrent = Math.max(min, Math.min(number, max));
		onChange(newCurrent);
		setValue(newCurrent);
	}

	useEffect(() => {
		setValue(current);
	}, [current]);

	return <div>
		<button type="button" onClick={dec} disabled={current <= min}>-</button>&nbsp;
		<input value={value} onChange={inpStr} onBlur={applyStrValue}/>&nbsp;
		<button type="button" onClick={inc} disabled={current >= max}>+</button>
	</div>
}

export default CounterState;
