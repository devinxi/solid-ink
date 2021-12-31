import {useContext} from 'solid-js';
import StdoutContext from '../components/StdoutContext';

/**
 * `useStdout` is a React hook, which exposes stdout stream.
 */
const useStdout = () => useContext(StdoutContext);
export default useStdout;
