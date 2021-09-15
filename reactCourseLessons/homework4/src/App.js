import React, { useContext, useState } from 'react';

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

    const showAnotherPage = (page) => {
        setOrderData({ ...orderData, page });
    }

    const updateCartData = (data) => {
        console.log('data in updateCartData', data)

        setOrderData({...orderData, cart: data });
        console.log('orderData in updateCartData', orderData)
    }

    const changeUserData = (userData) => {
        console.log('userData', userData)

        setOrderData({ ...orderData, user: userData });
        console.log('orderData in changeUserData', orderData)
    }

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
