import {JSX} from 'solid-js';
import {Box, Text, render} from '../..';

const Clear = () => (
	<Box flexDirection="column">
		<Text>A</Text>
		<Text>B</Text>
		<Text>C</Text>
	</Box>
);

const {clear} = render(<Clear />);
clear();
