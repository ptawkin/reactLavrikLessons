import React from 'react';

function Result({ products, userName }) {
    let total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

    return <div className='container'>
        <h1>Congrats, { userName }</h1>
        <hr/>
        <div>
            <strong>{ total }</strong>
        </div>
        <hr/>
    </div>
}

export default Result;