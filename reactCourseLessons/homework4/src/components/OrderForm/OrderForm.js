import React, { useContext, useState, useRef } from 'react';

import ResultScreen from "../ResultScreen/ResultScreen";

import styles from './orderForm.module.css';
import OrderContext from "../../contexts/orderContext";


function OrderForm({ buttonAction, changeUserData }) {
    const orderContext = useContext(OrderContext);
    const page = orderContext.page;

    const submitAction = () => {
        const userData = collectUserData();

        changeUserData(userData)
        buttonAction('result');
    }

    const collectUserData = () => {
        const form = document.querySelector('form')
        const inputName = form.querySelector('input[name=name]')
        const inputEmail = form.querySelector('input[name=email]')
        const inputTel = form.querySelector('input[name=tel]')

        const user = {
            name: inputName.value,
            email: inputEmail.value,
            tel: inputTel.value,
        }

        return user;
    }


    return (
        page === 'order' && (
            <div className={ `form ${ styles.orderForm }` }>
                <h1>
                    Order
                </h1>
                <form>
                    <div className='input-row'>
                        <div className='input-heading'>
                            Name
                        </div>
                        <input
                            type='text'
                            name='name'
                        />
                    </div>
                    <br/>

                    <div className='input-row'>
                        <div className='input-heading'>
                            Email
                        </div>
                        <input
                            type='email'
                            name='email'
                        />
                    </div>
                    <br/>

                    <div className='input-row'>
                        <div className='input-heading'>
                            Phone
                        </div>
                        <input
                            type='tel'
                            name='tel'
                        />
                    </div>
                    <br/>
                    <br/>

                    <div className='actions'>
                        <button
                            className='btn btn-warning'
                            type='button'
                            onClick={ () => {
                                buttonAction('cart')
                            } }
                        >
                            Back
                        </button>
                        &nbsp;
                        <button
                            className='btn btn-success'
                            type='submit'
                            onClick={ submitAction }
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        )
    )
}

export default OrderForm;