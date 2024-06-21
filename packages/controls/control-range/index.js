import React from 'react';

/*WordPress*/
import { RangeControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderRange = (props) => {
	const { variant = '', className = '', defaultValue, ...defaultProps } = props;

	return (
		<RangeControl
			className={classnames(
				AtrcPrefix('range'),
				className,
				variant ? AtrcPrefix('range') + '-' + variant : ''
			)}
			allowReset={false}
			{...defaultProps}
		/>
	);
};

const AtrcControlRange = (props) => {
	const {
		allowReset = true,
		value,
		onChange,
		defaultValue = null,
		wrapProps = {},
		resetWrapProps = {},
	} = props;

	if (allowReset) {
		return (
			<AtrcWrapLib
				className={classnames('at-flx-grw-1')}
				{...wrapProps}>
				<AtrcResetWrap
					{...resetWrapProps}
					className={classnames(
						AtrcPrefix('range-rst'),
						'at-flx-grw-1',
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderRange {...props} />
					<AtrcResetButtonIcon
						value={value}
						defaultValue={defaultValue}
						onClick={() => onChange(defaultValue)}
					/>
				</AtrcResetWrap>
			</AtrcWrapLib>
		);
	}
	return <RenderRange {...props} />;
};
export default AtrcControlRange;
