/*Library*/
import classnames from 'classnames';
import { BsArrowCounterclockwise } from 'react-icons/bs';

/*Inbuilt*/
import { AtrcWrap, AtrcButton, AtrcIcon } from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcResetWrap = (props) => {
	const { className = '', variant = '', children, ...defaultProps } = props;

	return (
		<AtrcWrap
			{...defaultProps}
			className={classnames(
				AtrcPrefix('rst-wrp'),
				'at-flx',
				'at-al-itm-st',
				'at-jfy-cont-btw',
				'at-gap',
				className,
				variant ? AtrcPrefix('rst-wrp') + '-' + variant : ''
			)}>
			{children}
		</AtrcWrap>
	);
};

const AtrcResetButtonIcon = (props) => {
	if ('disabled' in props && props.disabled) {
		return null;
	}
	const {
		className = '',
		variant = '',
		value = '',
		defaultValue = '',
		...defaultProps
	} = props;

	return (
		<AtrcButton
			className={classnames(
				AtrcPrefix('btn-rst-i'),
				className,
				variant ? AtrcPrefix('btn-rst-i') + '-' + variant : ''
			)}
			disabled={value === defaultValue}
			{...defaultProps}>
			<AtrcIcon
				type='bootstrap'
				icon={BsArrowCounterclockwise}
			/>
		</AtrcButton>
	);
};
export default AtrcResetButtonIcon;
