'use strict';
const {render, Text, createSignal, createEffect} = require('../..');

const Counter = () => {
	const [counter, setCounter] = createSignal(0);

	createEffect(() => {
		const timer = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1); // eslint-disable-line unicorn/prevent-abbreviations
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return <Text color="green">{counter} tests passed</Text>;
};

render(() => <Counter />);
