import React from 'react';

/*WordPress*/
import { TextControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon, {
	AtrcResetWrap,
} from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderComponent = (props) => {
	let {
		className = '',
		variant = '',
		value = '',
		allowReset = '',
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
				AtrcPrefix('ctrl-txt'),
				className,
				variant ? AtrcPrefix('ctrl-txt') + '-' + variant : ''
			)}
			value={value}
			{...defaultProps}
		/>
	);
};

const AtrcControlText = (props) => {
	const {
		allowReset = true,
		value = '',
		wrapProps = {},
		resetWrapProps = {},
		onChange,
		readOnly,
	} = props;

	return (
		<AtrcWrapLib
			className={classnames('at-flx-grw-1')}
			{...wrapProps}>
			{allowReset && !readOnly ? (
				<AtrcResetWrap
					{...resetWrapProps}
					className={classnames(
						AtrcPrefix('ctrl-txt-rst'),
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderComponent {...props} />
					<AtrcResetButtonIcon
						className={classnames('at-flx')}
						value={value}
						onClick={() => onChange('')}
					/>
				</AtrcResetWrap>
			) : (
				<RenderComponent {...props} />
			)}
		</AtrcWrapLib>
	);
};

export default AtrcControlText;
