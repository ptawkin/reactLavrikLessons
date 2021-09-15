import React, { useContext, useState } from 'react';

import Cart from "./components/Cart/Cart";

import OrderContext from './contexts/orderContext';
import productFromServer from './data/productsData';

function App() {
    const order = {
        cart: {
            products: productFromServer,
            productsLength: productFromServer.length,
            total: 0,
        },
        user: {
            name: '',
            email: '',
            phone: '',
        },
    }

    // const [order, orderData] = useState({ initialOrder });

    const orderContext = useContext(OrderContext);
    // console.log(orderContext)

    return (
        <OrderContext.Provider value={ order }>
            <Cart/>
        </OrderContext.Provider>
    )
}

export default App;


/*
Доработать исходники с урока.

Структура, которую надо реализовать:

App - корневой компонент, хранящий данные

	Cart - корзина, на уроке это было в App

		Minmax - counter

	OrderForm - форма с email, phone и именем

		BootstrapModal - (*) по желанию, модальное окно с просьбой
			подтвердить, что всё ок или отмена

	ResultScreen

*/
