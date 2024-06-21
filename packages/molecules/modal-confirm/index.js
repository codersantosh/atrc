import React from 'react';

/*WordPress*/
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { BsExclamationCircle } from 'react-icons/bs';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Molecules */
import AtrcModal from '../modal';
import AtrcButtonGroup from '../button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcModalConfirm = (props) => {
	const {
		className = '',
		variant = '',
		onCancel = '',
		isOpen = false,
		onConfirm = '',
		confirm = __('Delete', 'atrc-prefix-atrc'),
		title = __('Are you sure?', 'atrc-prefix-atrc'),
		help = __('This action cannot be undone!', 'atrc-prefix-atrc'),
		...defaultProps
	} = props;

	const [isShow, setIsShow] = useState(isOpen);

	useEffect(() => {
		setIsShow(isOpen);
	}, [isOpen]);

	if (isShow) {
		return (
			<AtrcModal
				onRequestClose={() => onCancel()}
				className={classnames(
					AtrcPrefix('modal-confirm'),
					className || '',
					variant ? AtrcPrefix('modal-confirm') + '-' + variant : ''
				)}
				{...defaultProps}>
				<AtrcWrap
					className={classnames(AtrcPrefix('modal-confirm-body'), 'at-p')}>
					<AtrcIcon
						className={classnames(
							AtrcPrefix('modal-confirm-icon'),
							'at-m',
							'at-cl'
						)}
						type='bootstrap'
						icon={BsExclamationCircle}
					/>

					<AtrcText
						tag='h4'
						className={classnames('at-m')}>
						{title}
					</AtrcText>
					<AtrcText
						tag='p'
						className={classnames(AtrcPrefix('mt-0'))}>
						{help}
					</AtrcText>
				</AtrcWrap>

				<AtrcWrap
					className={classnames(AtrcPrefix('modal-confirm-footer'), 'at-p')}>
					<AtrcButtonGroup>
						<AtrcButton
							onClick={() => onCancel()}
							className={classnames('at-flx-grw-1')}>
							{__('Cancel', 'atrc-prefix-atrc')}
						</AtrcButton>
						<AtrcButton
							onClick={() => onConfirm()}
							variant='danger'
							className={classnames('at-flx-grw-1')}>
							{confirm}
						</AtrcButton>
					</AtrcButtonGroup>
				</AtrcWrap>
			</AtrcModal>
		);
	}
	return null;
};
export default AtrcModalConfirm;
