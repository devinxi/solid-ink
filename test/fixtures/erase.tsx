import {JSX} from 'solid-js';
import {Box, Text, render} from '../..';

const Erase = () => (
	<Box flexDirection="column">
		<Text>A</Text>
		<Text>B</Text>
		<Text>C</Text>
	</Box>
);

process.stdout.rows = Number(process.argv[2]);
render(<Erase />);
