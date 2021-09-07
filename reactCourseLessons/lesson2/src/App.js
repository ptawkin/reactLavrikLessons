import React, {useState} from 'react';

import Counter from './Counter';

import productsData from './productsData';


function App() {
    const [products, setProducts] = useState(productsData);

    const renderRows = () => {
        return  products.map((product) => (
                <tr key={product.id}>
                    <td>
                        { product.title }
                    </td>
                    <td>
                        { product.price }
                    </td>
                    <td>
                        <Counter
                            max={product.rest}
                            current={product.cnt}
                            onChange={val => changeCnt(product.id, val)}
                        />
                    </td>
                    <td>
                        { getTotalPrice(product) }
                    </td>
                </tr>
            )
        )
    }

    const changeCnt = (id, cnt) => {
        setProducts(products.map(product => product.id !== id ? product : {...product, cnt}))
    }

    const getTotalPrice = (product) => {
        return product.price * product.cnt;
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
        </div>
    )
}

export default App;
