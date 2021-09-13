import React, { useEffect, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

function Popup({ isOpen, callback }) {
    const ref = useRef();

    const popupHandler = () => {
        !isOpen && callback();
    }

    // useOutsideClick(ref, popupHandler);
    useOutsideClick(ref, callback);


    return (
        <div

            ref={ ref }
            style={ {
                display: (isOpen) ? 'block' : 'none',

                position: 'absolute',
                top: 'calc(50% - 150px)',
                left: 'calc(50% - 150px)',

                width: '300px',
                height: '300px',

                backgroundColor: 'lightyellow',
            } }
        >
            popUpUpUp
        </div>
    )
}

export default Popup;