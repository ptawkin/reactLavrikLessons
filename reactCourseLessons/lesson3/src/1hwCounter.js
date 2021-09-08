import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired
}

Counter.defaultProps = {
	min: 1
}

function Counter({ min, max }){
	let [ current, setCurrent ] = useState(min);
	let dec = () => applyCurrent(current - 1);
	let inc = () => applyCurrent(current + 1);
	let inpStr = (e) => {
		let val = parseInt(e.target.value);
		applyCurrent(isNaN(val) ? min : val);
	}

	let applyCurrent = (number) => {
		let newCurrent = Math.max(min, Math.min(number, max));
		setCurrent(newCurrent);
	}

	return <div>
		<button type="button" onClick={dec} disabled={current <= min}>-</button>&nbsp;
		<input value={current} onChange={inpStr}/>&nbsp;
		<button type="button" onClick={inc} disabled={current >= max}>+</button>
	</div>
}

export default Counter;

/* 
let mult = function(a, b){
	return a * b;
}

let double = mult.bind(null, 2);
double(4) */