/*Library*/
import classnames from 'classnames';

/*Organisms*/
import AtrcFooter from '../../../organisms/footer';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcFooterTemplate1 = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcFooter
			className={classnames(
				AtrcPrefix('ftr-tpl-1'),
				AtrcPrefix('bdr'),
				className,
				variant ? AtrcPrefix('ftr-tpl-1') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcFooter>
	);
};

export default AtrcFooterTemplate1;
