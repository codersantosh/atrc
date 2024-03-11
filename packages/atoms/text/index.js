/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcText = (props) => {
	const {
		tag = 'p',
		className = '',
		variant = '',
		children = '',
		dangerouslySetInnerHTML,
		...defaultProps
	} = props;

	const TextTag = tag;
	const thisClassNames = classnames(
		AtrcPrefix('txt'),
		className,
		AtrcPrefix('txt') + '-' + tag,
		variant ? AtrcPrefix('txt') + '-' + variant : ''
	);
	if (dangerouslySetInnerHTML) {
		return (
			<TextTag
				className={thisClassNames}
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				{...defaultProps}
			/>
		);
	}

	return (
		<TextTag
			className={thisClassNames}
			{...defaultProps}>
			{children}
		</TextTag>
	);
};

export default AtrcText;
