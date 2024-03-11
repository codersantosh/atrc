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
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlBorderRadiusAllowedKeys = ['tR', 'tL', 'bL', 'bR'];

const RenderBorderRadiusControl = (props) => {
	const {
		variant = '',
		className = '',
		value,
		onChange,
		...defaultProps
	} = props;

	const newObj = useMemo(() => {
		if (typeof value === 'object') {
			return {
				topRight: value.tR,
				topLeft: value.tL,
				bottomLeft: value.bL,
				bottomRight: value.bR,
			};
		}
		return value;
	}, [value]);

	return (
		<>
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
		</>
	);
};

const AtrcControlBorderRadius = (props) => {
	const { allowReset = true, value = '', onChange } = props;

	if (allowReset) {
		return (
			<AtrcWrapLib className={classnames('at-flx-grw-1')}>
				<AtrcResetWrap className={classnames(AtrcPrefix('bdr-rad-rst'))}>
					<RenderBorderRadiusControl {...props} />
					<AtrcResetButtonIcon
						value={value}
						onClick={() => onChange({})}
					/>
				</AtrcResetWrap>
			</AtrcWrapLib>
		);
	}

	return <RenderBorderRadiusControl {...props} />;
};

export default AtrcControlBorderRadius;
