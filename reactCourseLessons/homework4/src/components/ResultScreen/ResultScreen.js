import React, { useContext, useState } from 'react';

import OrderContext from "../../contexts/orderContext";

import styles from './resultScreen.module.css';

function ResultScreen() {
    const orderContext = useContext(OrderContext);
    console.log(orderContext)

    return (
        <div className={`form ${styles.resultScreen}`}>

        </div>
    )
}

export default ResultScreen;