import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        // console.log(ref.current)
        // console.log(!ref.current.contains(e.target))
        // console.log(ref.current && !ref.current.contains(e.target))
        // if (ref.current && !ref.current.contains(e.target)) {
        //     callback();
        // }
        let path = e.path || e.composedPath();

        if(!path.includes(ref.current)){
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

export default useOutsideClick;
