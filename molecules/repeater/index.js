/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcHr, AtrcLabel, AtrcWrap } from '../../atoms';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcRepeater = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		groups,
		addGroup,
		labelProps = {
			className: 'at-m',
		},
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('repeater'),
				className,
				'at-flx-col',
				variant ? AtrcPrefix() + variant : ''
			)}
			{...defaultProps}>
			{label ? (
				<>
					<AtrcLabel {...labelProps}>{label}</AtrcLabel>
					<AtrcHr className='at-m' />
				</>
			) : null}

			{groups()}
			{addGroup()}
		</AtrcWrap>
	);
};

export default AtrcRepeater;
