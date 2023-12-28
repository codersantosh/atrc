/*WordPress*/
import { Modal } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atrc*/
import { AtrcWrap } from '../../atoms';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcModal = (props) => {
	const {
		children,
		className = '',
		variant = '',
		onRequestClose = () => {},
		...defaultProps
	} = props;

	return (
		<Modal
			className={classnames(
				AtrcPrefix('modal'),
				className,
				variant ? AtrcPrefix('modal') + '-' + variant : ''
			)}
			{...defaultProps}
			onRequestClose={onRequestClose}>
			<AtrcWrap className={classnames(AtrcPrefix('modal-body'))}>
				{children}
			</AtrcWrap>
		</Modal>
	);
};
export default AtrcModal;
