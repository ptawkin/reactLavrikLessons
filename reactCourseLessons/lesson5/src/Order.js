import React from 'react';
import {observer} from 'mobx-react-lite';

import orderStore from './store/order';

function Order({ onConfirm, onCancel }) {
    console.log(Object.entries(orderStore.formData))
    let inputs = Object.entries(orderStore.formData).map(([name, field]) => {
        return <div
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
                   onChange={ (e) => orderStore.change(name, e.target.value.trim()) }
            />
        </div>
    });


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
            disabled={!orderStore.isValid}
        >
            Next
        </button>
    </>
}

export default observer(Order);