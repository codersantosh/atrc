/*Library*/
import { Portal } from 'react-portal';

import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const Position = (position) => {
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

const AtrcWrapFloating = (props) => {
	const { className = '', position = 'bottom-right', ...defaultProps } = props;

	return (
		<Portal>
			<AtrcWrap
				className={classnames(
					className,
					'at-wrp-flt',
					'at-pos',
					'at-z-idx',
					position ? AtrcPrefix('wrp-flt-') + Position(position) : ''
				)}
				{...defaultProps}
			/>
		</Portal>
	);
};

export default AtrcWrapFloating;
