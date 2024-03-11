/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcFigure = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<AtrcWrap
			tag='figure'
			className={classnames(
				'at-fig',
				className,
				variant ? AtrcPrefix('fig') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};

export default AtrcFigure;
