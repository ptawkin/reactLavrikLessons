import React, { useState } from 'react';

function CounterFn({ max }) {
    let [ clicks, setClicks ] = useState(0);
    let inc = () =>(clicks <= max) ? setClicks(clicks++) : null;

    return (
        <span onClick={inc}>
                { clicks } &nbsp;
            <button disabled={clicks >= max}>
                +
            </button>
        </span>
    )
}

export default CounterFn;
