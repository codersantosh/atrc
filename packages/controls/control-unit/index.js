import React from 'react';

/*WordPress*/
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderComponent = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<UnitControl
			className={classnames(AtrcPrefix('ctrl-unit'))}
			{...defaultProps}
		/>
	);
};

const AtrcControlUnit = (props) => {
	const {
		allowReset = true,
		value = '',
		wrapProps = {},
		resetWrapProps = {},
		onChange,
	} = props;

	if (allowReset) {
		return (
			<AtrcWrapLib
				className={classnames('at-flx-grw-1')}
				{...wrapProps}>
				<AtrcResetWrap
					{...resetWrapProps}
					className={classnames(
						AtrcPrefix('ctrl-unit-rst'),
						'at-flx-grw-1',
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderComponent {...props} />
					<AtrcResetButtonIcon
						value={value}
						onClick={() => onChange(undefined)}
					/>
				</AtrcResetWrap>
			</AtrcWrapLib>
		);
	}

	return <RenderComponent {...props} />;
};
export default AtrcControlUnit;
