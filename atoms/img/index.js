/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcImg = (props) => {
	const {
		variant = '',
		className = '',
		prefix = '',
		srcset = '',
		...defaultProps
	} = props;

	if (!defaultProps.src) {
		return null;
	}

	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<img
			className={classnames(
				'at-img',
				className,
				variant ? AtrcPrefix('img') + '-' + variant : ''
			)}
			srcSet={srcset}
			{...defaultProps}
		/>
	);
};
export default AtrcImg;
