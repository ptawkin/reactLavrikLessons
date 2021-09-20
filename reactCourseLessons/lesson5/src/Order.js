import React from 'react';


function Order({ fields, onChange, onConfirm, onCancel }) {
    let inputs = fields.map(field => {
        return <div
            className='form-group'
            key={ field.name }
        >
            <label>
                { field.label }
            </label>
            <input type={ field.type }
                   className='form-control'
                   value={ field.value }
                   name={ field.name }
                // onChange={ changed }
                   onChange={ (e) => onChange(field.name, e.target.value.trim()) }
            />
        </div>
    });

    let formReady = fields.every(field => field.value !== '');


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