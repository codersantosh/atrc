/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcWord = (props) => {
	const {
		tag = 'h2',
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	const HTag = tag;
	return (
		<HTag
			className={classnames(
				'at-txt',
				className,
				AtrcPrefix('txt') + '-' + tag,
				variant ? AtrcPrefix('txt') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</HTag>
	);
};

export default AtrcWord;
