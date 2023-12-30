/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcHr = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<hr
			className={classnames(
				AtrcPrefix('hr'),
				className,
				variant ? AtrcPrefix('hr') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcHr;
