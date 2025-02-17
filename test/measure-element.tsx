import React, {createSignal, useRef, createEffect, FC} from 'solid-js';
import test from 'ava';
import delay from 'delay';
import {Box, Text, render, measureElement} from '..';
import createStdout from './helpers/create-stdout';

test('measure element', async t => {
	const stdout = createStdout();

	const Test: FC = () => {
		const [width, setWidth] = createSignal(0);
		const ref = useRef();

		createEffect(() => {
			setWidth(measureElement(ref.current).width);
		}, []);

		return (
			<Box ref={ref}>
				<Text>Width: {width}</Text>
			</Box>
		);
	};

	render(<Test />, {stdout, debug: true});
	t.is(stdout.write.firstCall.args[0], 'Width: 0');
	await delay(100);
	t.is(stdout.write.lastCall.args[0], 'Width: 100');
});
