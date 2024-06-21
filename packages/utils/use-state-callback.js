import React from 'react';

/*WordPress*/
import { useCallback, useEffect, useRef, useState } from '@wordpress/element';

/*Local*/
/*
 * https://stackoverflow.com/a/61842546/4713045
 * */
export default function AtrcUseStateCallback(initialState) {
	const [state, setState] = useState(initialState);
	const cbRef = useRef(null); // init mutable ref container for callbacks

	const setStateCallback = useCallback((st, cb) => {
		cbRef.current = cb; // store current, passed callback in ref
		setState(st);
	}, []); // keep object reference stable, exactly like `useState`

	useEffect(() => {
		// cb.current is `null` on initial render,
		// so we only invoke callback on state *updates*
		if (cbRef.current) {
			cbRef.current(state);
			cbRef.current = null; // reset callback after execution
		}
	}, [state]);

	return [state, setStateCallback];
}
