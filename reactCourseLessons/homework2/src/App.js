import React, { useState } from 'react';

import Counter from './Counter';

import productsData from './productsData';


function App() {
    const [products, setProducts] = useState(productsData);
    const [total, setTotal] = useState(0);

    const renderRows = () => {
        return products.map((product) => (
                <tr key={ product.id }>
                    <td>
                        { product.title }
                    </td>
                    <td>
                        { product.price }
                    </td>
                    <td>
                        <Counter
                            max={ product.rest }
                            current={ product.cnt }
                            onChange={ val => changeCnt(product.id, val) }
                        />
                    </td>
                    <td>
                        { getRowTotalPrice(product) }
                    </td>
                </tr>
            )
        )
    }

    const changeCnt = (id, cnt) => {
        setProducts(products.map(product => product.id !== id ? product : { ...product, cnt }))
    }

    const getRowTotalPrice = (product) => {
        const rowTotal = product.price * product.cnt;
        return rowTotal;
    }

    const getTotalPrice = () => {
        let total = 0;

        products.map(
            product => {
                total += product.price * product.cnt;
            }
        )
        
        return total;
    }

    return (
        <div>
            <h1>
                Cart
            </h1>
            <hr/>

            <table>
                <thead>
                <tr>
                    <td>
                        Title
                    </td>
                    <td>
                        Price
                    </td>
                    <td>
                        Count
                    </td>
                    <td>
                        Total
                    </td>
                </tr>
                </thead>

                <tbody>
                    { renderRows() }
                </tbody>
            </table>
            <hr/>

            <div>
                { getTotalPrice() }
            </div>
        </div>
    )
}

export default App;
