/*WordPress*/
import { RangeControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcResetButtonIcon, AtrcResetWrap } from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
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
const AtrcRange = (props) => {
	const { allowReset = true, value, onChange, defaultValue = null } = props;

	if (allowReset) {
		return (
			<AtrcResetWrap
				className={classnames(AtrcPrefix('range-rst'), 'at-flx-grw-1')}>
				<RenderRange {...props} />
				<AtrcResetButtonIcon
					value={value}
					defaultValue={defaultValue}
					onClick={() => onChange(defaultValue)}
				/>
			</AtrcResetWrap>
		);
	}
	return <RenderRange {...props} />;
};
export default AtrcRange;
