/* Library */
import classnames from 'classnames';

/* Inbuilt */
import AtrcSpan from '../../../atoms/span';
import AtrcWord from '../../../atoms/word';
import AtrcImg from '../../../atoms/img';

import AtrcPrefix from '../../../prefix-vars';

const AtrcTemplateImgAndWord = (props) => {
	const { imgProps, wordProps } = props;

	return (
		<AtrcSpan
			className={classnames(
				AtrcPrefix('img-txt'),
				'at-flx',
				'at-al-itm-ctr',
				'at-gap'
			)}>
			<AtrcImg {...imgProps} />

			<AtrcWord
				tag='span'
				{...wordProps}
			/>
		</AtrcSpan>
	);
};

export default AtrcTemplateImgAndWord;
