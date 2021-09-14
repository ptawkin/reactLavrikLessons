import React, { useState } from 'react';

import Counter from './Counter/Counter';
import Modal from './Modal/Modal';

import useWindowSize from "../hooks/useWindowSize";

import SettingsContext from './contexts/userSettings';

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
    let { width } = useWindowSize();
    let [products, setProducts] = useState(productFromServer);
    let total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

    let [settings, setSettings] = useState({ lang: 'ru' });

    let changeCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id !== id ? pr : { ...pr, cnt }));
    }

    let remove = (id) => {
        setProducts(products.filter(pr => pr.id !== id));
    }

    let tmpSaleAllBy5 = () => {
        setProducts(products.map(pr => ({ ...pr, cnt: 5 })));
    }

    let restFirst5 = () => {
        setProducts(products.map(pr => pr.id !== 100 ? pr : {
            ...pr,
            rest: 5,
            cnt: pr.cnt > 5 ? 5 : cnt,
        }));
    }

    let productsRows = products.map(pr => (
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
            { width > 700 && <td>{ pr.price * pr.cnt }</td> }
            <td>
                <button type="button" onClick={ () => remove(pr.id) }>X</button>
            </td>
        </tr>
    ));

    return <SettingsContext.Provider
        value={ settings }
    >
        <div>
            <header>
                <div className='container'>
                    header
                </div>
            </header>
            <main>
                <div className='container'>
                    <h1>Cart</h1>
                    <hr/>
                    <table>
                        <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            { width > 700 && <td>Total</td> }
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
                    <button type="button" onClick={ tmpSaleAllBy5 }>Want all 5</button>
                    <button type="button" onClick={ restFirst5 }>Rest item 1 = 5</button>
                </div>
            </main>
            <footer>
                <div className='container'>
                    footer
                    <button
                        type='button'
                        onClick={ () => setSettings({lang:'ru'}) }
                    >
                        ru
                    </button>
                    <button
                        type='button'
                        onClick={ () => setSettings({lang:'en'}) }
                    >
                        en
                    </button>
                </div>
                <Modal title='check data'>
                    <p><strong>Total: { total }</strong></p>
                    <p><strong>In cart: { products.length }</strong></p>
                </Modal>
            </footer>
        </div>
    </SettingsContext.Provider>
}

export default App;