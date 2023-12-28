/*WordPress*/
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcWrap, AtrcIcon, AtrcWord, AtrcButton } from '../../atoms';
import { AtrcModal } from '../index';
import { AtrcButtonGroup } from '../../molecules';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import { BsExclamationCircle } from 'react-icons/bs';

/*Local Components*/
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
	function close() {
		onCancel();
	}
	useEffect(() => {
		setIsShow(isOpen);
	}, [isOpen]);
	if (isShow) {
		return (
			<AtrcModal
				{...defaultProps}
				onRequestClose={close}
				className={classnames(
					AtrcPrefix('modal-confirm'),
					className || '',
					variant ? AtrcPrefix('modal-confirm') + '-' + variant : ''
				)}>
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

					<AtrcWord
						tag='h4'
						className={classnames('at-m')}>
						{title}
					</AtrcWord>
					<AtrcWord
						tag='p'
						className={classnames(AtrcPrefix('mt-0'))}>
						{help}
					</AtrcWord>
				</AtrcWrap>

				<AtrcWrap
					className={classnames(AtrcPrefix('modal-confirm-footer'), 'at-p')}>
					<AtrcButtonGroup>
						<AtrcButton
							onClick={() => close()}
							className={classnames('at-p', 'at-flx-grw-1')}>
							{__('Cancel', 'atrc-prefix-atrc')}
						</AtrcButton>
						<AtrcButton
							onClick={() => onConfirm()}
							variant='delete'
							className={classnames('at-p', 'at-flx-grw-1')}>
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
