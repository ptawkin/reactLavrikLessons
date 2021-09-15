import React, { useContext, useState } from 'react';

import OrderContext from "../../contexts/orderContext";

import styles from './resultScreen.module.css';

function ResultScreen() {
    const orderContext = useContext(OrderContext);

    return (
        orderContext.page === 'result' && (
            <div className={ `${ styles.resultScreen }` }>
                <h1>
                    Result
                </h1>
                <div>
                    Hello, { orderContext.user.name }
                </div>
                <div>
                    In Cart: { orderContext.cart.productsLength }
                </div>
                <div>
                    Total: { orderContext.cart.total }
                </div>
            </div>
        )
    )
}

export default ResultScreen;