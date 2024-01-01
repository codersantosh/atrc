/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcWrap = (props) => {
	const {
		tag = 'div',
		className = '',
		variant = '',
		children = '',
		dangerouslySetInnerHTML = '',
		...defaultProps
	} = props;
	const WrapTag = tag;

	if (dangerouslySetInnerHTML) {
		return (
			<WrapTag
				className={classnames(className, variant ? AtrcPrefix() + variant : '')}
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				{...defaultProps}
			/>
		);
	}

	return (
		<WrapTag
			className={classnames(className, variant ? AtrcPrefix('') + variant : '')}
			{...defaultProps}>
			{children}
		</WrapTag>
	);
};

export default AtrcWrap;
