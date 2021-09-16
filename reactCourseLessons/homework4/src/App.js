import React, { useState, useCallback } from 'react';

import Cart from "./components/Cart/Cart";

import OrderContext from './contexts/orderContext';
import productFromServer from './data/productsData';
import OrderForm from "./components/OrderForm/OrderForm";
import ResultScreen from "./components/ResultScreen/ResultScreen";

function App() {
    const initialOrder = {
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
        page: 'cart',
    }

    const [orderData, setOrderData] = useState(initialOrder);

    const showAnotherPage = useCallback((page) => {
            setOrderData({ ...orderData, page });
    }, [ orderData ]);

    const updateCartData = useCallback((data) => {
            setOrderData({...orderData, cart: data });
    }, [ orderData ]);

    const changeUserData = useCallback((userData) => {
            setOrderData({ ...orderData, user: userData });
    }, [ orderData ]);

    console.log('orderData in App', orderData)
    return (
        <OrderContext.Provider value={ orderData }>
            <Cart
                buttonAction={ showAnotherPage }
                updateAction={ updateCartData }
            />
            <OrderForm
                buttonAction={ showAnotherPage }
                changeUserData={ changeUserData }
            />
            <ResultScreen
                buttonAction={ showAnotherPage }
            />
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
