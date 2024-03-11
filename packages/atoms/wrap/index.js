/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
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
	const thisClassNames = classnames(
		className,
		variant ? AtrcPrefix('') + variant : ''
	);

	if (dangerouslySetInnerHTML) {
		return (
			<WrapTag
				ref={ref}
				className={thisClassNames}
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				{...defaultProps}
			/>
		);
	}

	return (
		<WrapTag
			ref={ref}
			className={thisClassNames}
			{...defaultProps}>
			{children}
		</WrapTag>
	);
};

export default forwardRef(AtrcWrap);
