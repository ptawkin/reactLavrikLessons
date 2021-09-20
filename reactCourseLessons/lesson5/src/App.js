import React, { useState } from 'react';

import Cart from "./Cart";
import Order from "./Order";
import Result from "./Result";


const productFromServer = [
    {
        id: 100,
        title: 'Ipnone 200',
        price: 12000,
        rest: 10,
        cnt: 1
    },
    {
        id: 101,
        title: 'Samsung AAZ8',
        price: 22000,
        rest: 2,
        cnt: 1
    },
    {
        id: 103,
        title: 'Nokia 3310',
        price: 5000,
        rest: 2,
        cnt: 1
    },
    {
        id: 105,
        title: 'Huawei ZZ',
        price: 15000,
        rest: 8,
        cnt: 1
    }
];


function App() {
    let [route, setRoute] = useState('cart');
    const moveToCart = () => setRoute('cart');
    const moveToOrder = () => setRoute('order');
    const moveToResult = () => setRoute('result');

    //cart
    let [products, setProducts] = useState(productFromServer);

    let changeCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id !== id ? pr : { ...pr, cnt }));
    }

    let remove = (id) => {
        setProducts(products.filter(pr => pr.id !== id));
    }


    return <div>
        { route === 'cart' &&
        <Cart
            products={ products }
            onConfirm={ moveToOrder }
            onChangeCnt={ changeCnt }
            onRemove={ remove }
        />
        }
        { route === 'order' &&
        <Order
            onCancel={ moveToCart }
            onConfirm={ moveToResult }
        />
        }
        { route === 'result' &&
        <Result
            products={ products }
        />
        }
    </div>
}

export default App;