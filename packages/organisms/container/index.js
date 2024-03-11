/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcContainer = (props) => {
	const { className = '', type = '', children = '', ...defaultProps } = props;

	let containerClass;
	switch (type) {
		case 'fluid':
			containerClass = AtrcPrefix('ctnr-fld');
			break;

		case 'min':
			containerClass = AtrcPrefix('ctnr-min');
			break;

		default:
			containerClass = AtrcPrefix('ctnr');
			break;
	}

	return (
		<AtrcWrap
			className={classnames(className, containerClass)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcContainer;
