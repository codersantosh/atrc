/*WordPress*/
import { forwardRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcWrap = (props, ref) => {
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
				ref={ref}
				className={classnames(className, variant ? AtrcPrefix() + variant : '')}
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				{...defaultProps}
			/>
		);
	}

	return (
		<WrapTag
			ref={ref}
			className={classnames(className, variant ? AtrcPrefix('') + variant : '')}
			{...defaultProps}>
			{children}
		</WrapTag>
	);
};

export default forwardRef(AtrcWrap);
