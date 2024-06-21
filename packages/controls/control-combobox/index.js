import React from 'react';

/*WordPress*/
import { ComboboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderComponent = (props) => {
	const {
		variant = '',
		className = '',
		allowReset = false,
		...defaultProps
	} = props;

	return (
		<AtrcWrap className={classnames('at-flx', 'at-flx-col', 'at-flx-grw-1')}>
			<ComboboxControl
				className={classnames(
					AtrcPrefix('cb'),
					className,
					variant ? AtrcPrefix('cb') + '-' + variant : ''
				)}
				allowReset={allowReset}
				{...defaultProps}
			/>
		</AtrcWrap>
	);
};

const AtrcControlCombobox = (props) => {
	const {
		allowReset = true,
		value = '',
		onChange,
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
						AtrcPrefix('combobox-rst'),
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderComponent {...props} />
					<AtrcResetButtonIcon
						value={value}
						onClick={() => onChange('')}
					/>
				</AtrcResetWrap>
			</AtrcWrapLib>
		);
	}
	return <RenderComponent {...props} />;
};
export default AtrcControlCombobox;
