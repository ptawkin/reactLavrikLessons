import React from 'react';
import {observer} from 'mobx-react-lite';

import orderStore from './store/order';


function Result({ products }) {
    let total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

    return <div className='container'>
        <h1>Congrats, { orderStore.userName }</h1>
        <hr/>
        <div>
            <strong>{ total }</strong>
        </div>
        <hr/>
    </div>
}

export default observer(Result);