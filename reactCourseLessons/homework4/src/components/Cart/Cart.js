import React, { useContext, useState } from 'react';

import Counter from '../counter/Counter.js';


import styles from './cart.module.css';
import OrderContext from "../../contexts/orderContext";


function Cart({ buttonAction, updateAction }) {
    const orderContext = useContext(OrderContext);
    const productsData = orderContext.cart.products;
    const page = orderContext.page;

    const [products, setProducts] = useState(productsData);

    const total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

    const changeCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id !== id ? pr : { ...pr, cnt }));
    }

    const remove = (id) => {
        setProducts(products.filter(pr => pr.id !== id));
    }

    const productsRows = products.map(pr => (
        <tr key={ pr.id }>
            <td>{ pr.title }</td>
            <td>{ pr.price }</td>
            <td>
                <Counter
                    max={ pr.rest }
                    current={ pr.cnt }
                    onChange={ val => changeCnt(pr.id, val) }
                    key={ pr.rest }
                />
            </td>
            <td>
                { pr.price * pr.cnt }
            </td>
            <td>
                <button type="button" onClick={ () => remove(pr.id) }>X</button>
            </td>
        </tr>
    ));

    const submitAction = () => {
        const data = {
            products,
            productsLength: products.length,
            total: total,
        }

        updateAction(data);
        buttonAction('order');
    }


    return (
        page === 'cart' && (
            <div className={ `container ${ styles.cart }` }>
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
                <br/>
                <br/>
                <div>
                    <strong>In cart:{ products.length }</strong>
                </div>
                <div>
                    <strong>Total:{ total }</strong>
                </div>
                <br/>
                <button
                    className='btn btn-success'
                    type='button'
                    onClick={ submitAction }
                >
                    Send
                < /button>
            </div>
        )
    )
}

export default Cart;
