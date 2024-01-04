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
			case 'bottom-left':
				return 'bl';
			case 'top-right':
				return 'tr';
			case 'top-left':
				return 'tl';
			default:
				return 'br';
		}
	};
	return (
		<Portal>
			<AtrcWrap
				{...defaultProps}
				className={classnames(
					className,
					'at-wrp-flt',
					'at-pos',
					'at-z-idx',
					position ? AtrcPrefix('wrp-flt-') + Position() : ''
				)}
			/>
		</Portal>
	);
};

export default AtrcWrapFloating;
