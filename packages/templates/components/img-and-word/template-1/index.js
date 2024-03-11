/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcSpan from '../../../../atoms/span';
import AtrcText from '../../../../atoms/text';
import AtrcImg from '../../../../atoms/img';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
const AtrcImgAndTextTemplate1 = (props) => {
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

			<AtrcText
				tag='span'
				{...wordProps}
			/>
		</AtrcSpan>
	);
};

export default AtrcImgAndTextTemplate1;
