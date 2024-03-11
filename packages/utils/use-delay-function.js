/*WordPress*/
import { useEffect, useRef, useState } from '@wordpress/element';

/*Local*/
const AtrcUseDelayFunction = (fn, dla = 2000) => {
	if (!fn) return;
	const [count, setCount] = useState(0);
	const [totalFn, setTotalFn] = useState(0);
	const [args, setArgs] = useState([]);
	const timeoutIdRef = useRef();

	const localCount = useRef(count);
	const localArgs = useRef(args);
	const localTotalFn = useRef(totalFn);

	const setLocalCount = () => {
		localCount.current++;
		setCount(localCount.current);
	};

	const setLocalArgs = (arg) => {
		localArgs.current.push(arg);
		setArgs(localArgs.current);
	};

	const setLocalTotalFn = (type) => {
		if ('add' === type) {
			localTotalFn.current++;
		} else {
			localTotalFn.current--;
		}
		setTotalFn(localTotalFn.current);
	};

	useEffect(() => {
		if (totalFn) {
			timeoutIdRef.current = setTimeout(() => {
				fn(...args[count]);
				setLocalCount();
				setLocalTotalFn();
			}, dla);
		} else {
			clearTimeout();
		}

		return () => {
			clearTimeout();
		};
	}, [totalFn]);

	const clearTimeout = () => {
		window.clearTimeout(timeoutIdRef.current);
	};

	const dlaFn = (...arg) => {
		setLocalTotalFn('add');
		setLocalArgs(arg);
	};

	return { dlaFn, clearTimeout };
};

export default AtrcUseDelayFunction;
