/*Attributes Structure
Type Object or string
{
    ''(string)
    =======OR==========
    tL: '',
    tR: '',
    bL: '',
    bR: '',
}
* */

/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBorderRadiusControl as BorderRadiusControl } from '@wordpress/block-editor';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlBorderRadiusAllowedKeys = ['tR', 'tL', 'bL', 'bR'];

const RenderBorderRadiusControl = (props) => {
	const {
		variant = '',
		className = '',
		values,
		onChange,
		...defaultProps
	} = props;

	let newObj;
	if (typeof values === 'object') {
		newObj = {
			topRight: values.tR,
			topLeft: values.tL,
			bottomLeft: values.bL,
			bottomRight: values.bR,
		};
	} else {
		newObj = values;
	}

	return (
		<BorderRadiusControl
			className={classnames(
				AtrcPrefix('ctrl-bdr-rad'),
				className,
				variant ? AtrcPrefix('ctrl-bdr-rad') + '-' + variant : ''
			)}
			values={newObj}
			onChange={(newControl) => {
				let newValues;
				if (typeof newControl === 'object') {
					newValues = {
						tR: newControl.topRight,
						tL: newControl.topLeft,
						bL: newControl.bottomLeft,
						bR: newControl.bottomRight,
					};
				} else {
					newValues = newControl;
				}
				onChange(newValues);
			}}
			{...defaultProps}
		/>
	);
};

const AtrcControlBorderRadius = (props) => {
	const { allowReset = true, values = '', onChange } = props;

	if (allowReset) {
		return (
			<AtrcResetWrap className={classnames(AtrcPrefix('bdr-rad-rst'))}>
				<RenderBorderRadiusControl {...props} />
				<AtrcResetButtonIcon
					value={values}
					onClick={() => onChange({})}
				/>
			</AtrcResetWrap>
		);
	}

	return <RenderBorderRadiusControl {...props} />;
};

export default AtrcControlBorderRadius;
