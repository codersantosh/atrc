/*WordPress*/
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcWrap, AtrcResetButtonIcon, AtrcResetWrap } from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderComponent = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-unit-wrp'),
				className,
				variant ? AtrcPrefix('ctrl-unit-wrp') + '-' + variant : ''
			)}>
			<UnitControl
				className={classnames(AtrcPrefix('ctrl-unit'))}
				{...defaultProps}
			/>
		</AtrcWrap>
	);
};

const AtrcControlUnit = (props) => {
	const { allowReset = true, value = '', onChange } = props;

	if (allowReset) {
		return (
			<AtrcResetWrap
				className={classnames(AtrcPrefix('ctrl-unit-rst'), 'at-flx-grw-1')}>
				<RenderComponent {...props} />
				<AtrcResetButtonIcon
					value={value}
					onClick={() => onChange(undefined)}
				/>
			</AtrcResetWrap>
		);
	}

	return <RenderComponent {...props} />;
};
export default AtrcControlUnit;
