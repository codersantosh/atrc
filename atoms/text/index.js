/*WordPress*/
import { TextControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcResetButtonIcon, AtrcResetWrap } from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderComponent = (props) => {
	let {
		className = '',
		variant = '',
		value = '',
		wrapProps = {},
		resetProps = {},
		...defaultProps
	} = props;
	if (value === null || value === undefined) {
		value = '';
	}
	return (
		<TextControl
			className={classnames(
				AtrcPrefix('txt'),
				className,
				variant ? AtrcPrefix('txt') + '-' + variant : ''
			)}
			value={value}
			{...defaultProps}
		/>
	);
};

const AtrcText = (props) => {
	const {
		allowReset = true,
		value = '',
		wrapProps = {},
		resetProps = {},
		onChange,
	} = props;

	if (allowReset) {
		return (
			<AtrcResetWrap
				{...wrapProps}
				{...resetProps}
				className={classnames(
					AtrcPrefix('txt-rst'),
					'at-flx-grw-1',
					resetProps.className || '',
					wrapProps.className ? wrapProps.className : ''
				)}>
				<RenderComponent {...props} />
				<AtrcResetButtonIcon
					value={value}
					onClick={() => onChange('')}
				/>
			</AtrcResetWrap>
		);
	}

	return <RenderComponent {...props} />;
};

export default AtrcText;
