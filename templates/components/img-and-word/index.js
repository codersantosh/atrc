import classnames from 'classnames';
import { AtrcImg, AtrcSpan, AtrcWord } from '../../../atoms';
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
