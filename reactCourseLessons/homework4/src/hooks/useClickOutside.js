import { useEffect } from 'react';

export default function(ref, fn){
	let handler = function(e){
		// ref.current === e.target || ref.current.contains(e.target)
		let path = e.path || e.composedPath();
		
		if(!path.includes(ref.current)){
			fn(e);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		}
	}, []);
}