import React, { useContext, useState } from 'react';

import Counter from '../counter/Counter.js';


import styles from './cart.module.css';
import OrderContext from "../../contexts/orderContext";


function Cart() {
    const orderContext = useContext(OrderContext);
    const productsData = orderContext.cart.products;
    console.log('productsData', productsData)

    const [products, setProducts] = useState({ productsData });
    console.log('products', products)
    const total = products.productsData.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

    const changeCnt = (id, cnt) => {
        setProducts(products.productsData.map(pr => pr.id !== id ? pr : { ...pr, cnt }));
    }

    const remove = (id) => {
        setProducts(products.productsData.filter(pr => pr.id !== id));
    }

    const productsRows = products.productsData.map(pr => (
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

    return <div className={ `container ${ styles.cart }` }>
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
        <div>
            <strong>{ total }</strong>
        </div>
    </div>
}

export default Cart;
