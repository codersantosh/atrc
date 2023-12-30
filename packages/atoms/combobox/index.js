/*WordPress*/
import { ComboboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';
import AtrcWrap from '../wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
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
				{...defaultProps}
				allowReset={allowReset}
			/>
		</AtrcWrap>
	);
};

const AtrcCombobox = (props) => {
	const { allowReset = true, value = '', onChange, wrapProps = {} } = props;

	if (allowReset) {
		return (
			<AtrcResetWrap
				{...wrapProps}
				className={classnames(
					AtrcPrefix('combobox-rst'),
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
export default AtrcCombobox;
