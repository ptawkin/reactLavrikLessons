import { useEffect } from 'react';

export default function(ref, fn){
	let handler = function(e){
		let path = e.path || e.composedPath();
		
		if(!path.includes(ref.current)){
			fn(e);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handler);
		document.addEventListener('touchstart', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('touchstart', handler);
		}
	}, [ref, fn]);
}