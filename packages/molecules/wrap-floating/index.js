/*Library*/
import { Portal } from 'react-portal';

import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Inbuilt*/
const AtrcWrapFloating = (props) => {
	const { className = '', position = 'bottom-right', ...defaultProps } = props;
	const Position = () => {
		switch (position) {
			case 'bottom-right':
				return 'br';
			case 'bottom-left':
				return 'bl';
			case 'top-right':
				return 'tr';
			case 'top-left':
				return 'tl';
		}
	};
	return (
		<Portal>
			<AtrcWrap
				{...defaultProps}
				className={classnames(
					className,
					position ? AtrcPrefix('wrp-flt-') + Position() : ''
				)}
			/>
		</Portal>
	);
};

export default AtrcWrapFloating;
