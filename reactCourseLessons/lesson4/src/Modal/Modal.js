import React, { useRef, useState } from 'react';

import useClickOutside from '../../hooks/useClickOutside';

import styles from './modal.module.css';


export default function ({title, children}) {
    let [visible, setVisible] = useState(true);
    let rootEl = useRef();

    let close = () => {
        setVisible(false);
    }

    useClickOutside(rootEl, close);

    return <>
        { visible && <div
            className={ `alert alert-warning ${ styles.modalBox }` }
            ref={ rootEl }
        >
            <h3>
                { title }
            </h3>
            <hr/>
            <div>
                { children }
            </div>
            <hr/>
        </div> }
    </>
}
