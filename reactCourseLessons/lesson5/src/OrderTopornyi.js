import React from 'react';
import orderStore from './store/order';

function Order({ onConfirm, onCancel }) {
    let inputs = [];

    for(let name in orderStore.formData) {
        let field = orderStore.formData[name];

        inputs.push(
            <div
                className='form-group'
                key={ name }
            >
                <label>
                    { field.label }
                </label>
                <input type={ field.type }
                       className='form-control'
                       value={ field.value }
                       name={ field.name }
                       onChange={ (e) => onChange(name, e.target.value.trim()) }
                />
            </div>
        )
    }

    let formReady = false; //fields.every(field => field.value !== '');


    return <>
        <h1>
            Order form
        </h1>
        <hr/>

        <form>
            { inputs }
        </form>
        <hr/>

        <button
            type='button'
            className='btn btn-danger'
            onClick={ onCancel }
        >
            Cancel
        </button>
        &nbsp;&nbsp;
        <button
            type='button'
            className='btn btn-success'
            onClick={ onConfirm }
            disabled={!formReady}
        >
            Next
        </button>
    </>
}

export default Order;