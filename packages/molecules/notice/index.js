import React from 'react';

/*WordPress*/
import { Notice } from '@wordpress/components';

import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

//*Local*/
const AtrcNotice = (props) => {
	const {
		children,
		className = '',
		variant = '',
		place = '',
		isDismissible = true,
		autoDismiss = 5000,
		noticeNumber = 1,
		onRemove = () => {},
		onAutoRemove = () => {},
		...defaultProps
	} = props;

	useEffect(() => {
		if (autoDismiss) {
			const timer = setTimeout(() => onAutoRemove(), autoDismiss);
			return () => clearTimeout(timer);
		}
	}, [autoDismiss]);

	return (
		<Notice
			className={classnames(
				AtrcPrefix('notice'),
				'at-m',
				'at-p',
				'at-box-sdw',
				className,
				variant ? AtrcPrefix('notice') + '-' + variant : '',
				place ? AtrcPrefix('place') + '-' + variant : '',
				noticeNumber ? AtrcPrefix('notice-num') + '-' + noticeNumber : ''
			)}
			isDismissible={isDismissible}
			onRemove={onRemove}
			{...defaultProps}>
			{children}
		</Notice>
	);
};

export default AtrcNotice;
