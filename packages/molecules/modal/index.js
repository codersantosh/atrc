import React from 'react';

/*WordPress*/
import { Modal } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
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
			onRequestClose={onRequestClose}
			{...defaultProps}>
			<AtrcWrap className={classnames(AtrcPrefix('modal-body'))}>
				{children}
			</AtrcWrap>
		</Modal>
	);
};
export default AtrcModal;
