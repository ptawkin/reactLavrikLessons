import React from 'react';

import Counter from './Counter/Counter'


function Cart({ products, onChangeCnt, onConfirm, onRemove }) {
    let total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

    let productsRows = products.map(pr => (
        <tr key={ pr.id }>
            <td>{ pr.title }</td>
            <td>{ pr.price }</td>
            <td>
                <Counter
                    max={ pr.rest }
                    current={ pr.cnt }
                    onChange={ val => onChangeCnt(pr.id, val) }
                    key={ pr.rest }
                />
            </td>
            <td>{ pr.price * pr.cnt }</td>
            <td>
                <button type="button" onClick={ () => onRemove(pr.id) }>X</button>
            </td>
        </tr>
    ));

    return <div className='container'>
        <h1>Cart</h1>
        <hr/>
        <table>
            <thead>
            <tr>
                <td>Title</td>
                <td>Price</td>
                <td>Count</td>
                <td>Total</td>
            </tr>
            </thead>
            <tbody>
            { productsRows }
            </tbody>
        </table>
        <hr/>

        <div>
            <strong>{ total }</strong>
        </div>
        <hr/>

        <button
            type='button'
            className='btn btn-success'
            onClick={ onConfirm }
        >
            Next
        </button>
        <hr/>
    </div>
}

export default Cart;