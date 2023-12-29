/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { AtrcLabel } from '../../atoms';

/*Local Components*/
const AtrcControlAlignmentMatrix = (props) => {
	const {
		label = '',
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		...defaultProps
	} = props;

	return (
		<>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}

			<AlignmentMatrixControl
				className={classnames(
					AtrcPrefix('ctrl-al-matrix'),
					className,
					variant ? AtrcPrefix('ctrl-al-matrix') + '-' + variant : ''
				)}
				value={value}
				onChange={onChange}
				label={label}
				{...defaultProps}
			/>
		</>
	);
};
export default AtrcControlAlignmentMatrix;
