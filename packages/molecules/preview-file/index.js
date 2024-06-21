import React from 'react';

/*Library*/
import classnames from 'classnames';
import { BsFileEarmark } from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcText from '../../atoms/text';
import AtrcIcon from '../../atoms/icon';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcPreviewFile = (props) => {
	const {
		fileName = '',
		variant = '',
		className = '',
		...defaultProps
	} = props;

	if (!fileName) {
		return null;
	}

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('preview-file'),
				'at-p',
				'at-bdr',
				'at-flx',
				'at-al-itm-ctr',
				'at-gap',
				'at-m',
				className,
				variant ? AtrcPrefix('preview-file') + '-' + variant : ''
			)}>
			<AtrcIcon
				className={classnames('at-m', 'at-cl')}
				type='bootstrap'
				icon={BsFileEarmark}
			/>
			{fileName ? (
				<AtrcWrap className={classnames(AtrcPrefix('preview-file-name'))}>
					<AtrcText>{fileName}</AtrcText>
				</AtrcWrap>
			) : null}
		</AtrcWrap>
	);
};
export default AtrcPreviewFile;
