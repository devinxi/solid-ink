/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import {PropsWithChildren, JSX, mergeProps, splitProps} from 'solid-js';
import {Except} from 'type-fest';
import {Styles} from '../styles';
import {DOMElement} from '../dom';

export type Props = Except<Styles, 'textWrap'> & {
	/**
	 * Margin on all sides. Equivalent to setting `marginTop`, `marginBottom`, `marginLeft` and `marginRight`.
	 *
	 * @default 0
	 */
	readonly margin?: number;

	/**
	 * Horizontal margin. Equivalent to setting `marginLeft` and `marginRight`.
	 *
	 * @default 0
	 */
	readonly marginX?: number;

	/**
	 * Vertical margin. Equivalent to setting `marginTop` and `marginBottom`.
	 *
	 * @default 0
	 */
	readonly marginY?: number;

	/**
	 * Padding on all sides. Equivalent to setting `paddingTop`, `paddingBottom`, `paddingLeft` and `paddingRight`.
	 *
	 * @default 0
	 */
	readonly padding?: number;

	/**
	 * Horizontal padding. Equivalent to setting `paddingLeft` and `paddingRight`.
	 *
	 * @default 0
	 */
	readonly paddingX?: number;

	/**
	 * Vertical padding. Equivalent to setting `paddingTop` and `paddingBottom`.
	 *
	 * @default 0
	 */
	readonly paddingY?: number;
};

/**
 * `<Box>` is an essential Ink component to build your layout. It's like `<div style="display: flex">` in the browser.
 */
const Box = (props: PropsWithChildren<Props>): JSX.Element => {
	const [sProps, style] = splitProps(props, ['ref', 'children']);
	const transformedStyle = mergeProps(
		{
			flexDirection: 'row',
			flexGrow: 0,
			flexShrink: 1
		},
		style,
		{
			marginLeft: style.marginLeft || style.marginX || style.margin || 0,
			marginRight: style.marginRight || style.marginX || style.margin || 0,
			marginTop: style.marginTop || style.marginY || style.margin || 0,
			marginBottom: style.marginBottom || style.marginY || style.margin || 0,
			paddingLeft: style.paddingLeft || style.paddingX || style.padding || 0,
			paddingRight: style.paddingRight || style.paddingX || style.padding || 0,
			paddingTop: style.paddingTop || style.paddingY || style.padding || 0,
			paddingBottom: style.paddingBottom || style.paddingY || style.padding || 0
		}
	);

	return (
		<ink-box ref={props.ref} style={transformedStyle}>
			{sProps.children}
		</ink-box>
	);
};

Box.displayName = 'Box';

Box.defaultProps = {
	flexDirection: 'row',
	flexGrow: 0,
	flexShrink: 1
};

export default Box;
