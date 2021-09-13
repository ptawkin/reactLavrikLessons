import { useState, useEffect } from 'react';

function getSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    }
}

function useWindowSize() {
    const [size, setSize] = useState(getSize());
    const sizeHandler = () => setSize(getSize());

    useEffect(() => {
        window.addEventListener('resize', sizeHandler);

        return () => {
            window.removeEventListener('resize', sizeHandler);
        }
    }, []);

    return size;
}

export default useWindowSize;
