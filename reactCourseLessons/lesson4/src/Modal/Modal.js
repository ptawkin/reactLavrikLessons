import React, { useRef } from 'react';

import useClickOutside from '../../hooks/useClickOutside';

import styles from './modal.module.css';

console.log(styles)

export default function () {
    let rootEl = useRef();

    let close = () => {
        console.log('close')
    }

    useClickOutside(rootEl);

    return <div
        className={`modal ${styles.modalBox}`}
        ref={ rootEl }
    >
        <hr/>
        <p>
            Content
        </p>
        <hr/>
    </div>
}

