/*Values Structure
Type Object
{
    cl: '#72aee6',
    sty: 'solid',
    w: '1px'
    =======OR==========
	tCl: '#72aee6',
    tSty: 'solid',
    tW: '1px'

	rCl: '#72aee6',
    rSty: 'solid',
    rW: '1px'

	bCl: '#72aee6',
    bSty: 'solid',
    bW: '1px'

	lCl: '#72aee6',
    lSty: 'solid',
    lW: '1px'
}
* */

/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlBorderAllowedKeys = [
	'cl',
	'sty',
	'w',

	'tCl',
	'tSty',
	'tW',

	'rCl',
	'rSty',
	'rW',

	'bCl',
	'bSty',
	'bW',

	'lCl',
	'lSty',
	'lW',
];

export function AtrcControlBorderColorShorthand(t, r, b, l) {
	return AtrcControlBoxFourShorthandCssOnly({
		value: { t, r, b, l },
		emptyVal: 'transparent',
	});
}
export function AtrcControlBorderStyleShorthand(t, r, b, l) {
	return AtrcControlBoxFourShorthandCssOnly({
		value: { t, r, b, l },
		emptyVal: 'none',
	});
}
export function AtrcControlBorderWidthShorthand(t, r, b, l) {
	return AtrcControlBoxFourShorthandCssOnly({
		value: { t, r, b, l },
	});
}
const RenderBorderBoxControl = (props) => {
	const {
		label = __('Borders', 'atrc-prefix-atrc'),
		variant = '',
		className = '',
		value,
		onChange,
		...defaultProps
	} = props;

	/*Color*/
	const newObj = {};

	if (value.cl || value.sty || value.w) {
		newObj.color = value.cl;
		newObj.style = value.sty;
		newObj.width = value.w;
	} else {
		newObj.top = {
			color: value.tCl,
			style: value.tSty,
			width: value.tW,
		};
		newObj.right = {
			color: value.rCl,
			style: value.rSty,
			width: value.rW,
		};
		newObj.bottom = {
			color: value.bCl,
			style: value.bSty,
			width: value.bW,
		};
		newObj.left = {
			color: value.lCl,
			style: value.lSty,
			width: value.lW,
		};
	}

	return (
		<BorderBoxControl
			label={label}
			className={classnames(
				AtrcPrefix('ctrl-bdr'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-bdr') + '-' + variant : ''
			)}
			value={newObj}
			onChange={(newControl) => {
				const newValues = {};
				if (newControl.color || newControl.style || newControl.width) {
					newValues.cl = newControl.color;
					newValues.sty = newControl.style;
					newValues.w = newControl.width;
				} else {
					if (newControl.top) {
						newValues.tCl = newControl.top.color;
						newValues.tSty = newControl.top.style;
						newValues.tW = newControl.top.width;
					}
					if (newControl.right) {
						newValues.rCl = newControl.right.color;
						newValues.rSty = newControl.right.style;
						newValues.rW = newControl.right.width;
					}
					if (newControl.bottom) {
						newValues.bCl = newControl.bottom.color;
						newValues.bSty = newControl.bottom.style;
						newValues.bW = newControl.bottom.width;
					}
					if (newControl.left) {
						newValues.lCl = newControl.left.color;
						newValues.lSty = newControl.left.style;
						newValues.lW = newControl.left.width;
					}
				}
				onChange(newValues);
			}}
			{...defaultProps}
		/>
	);
};
const AtrcControlBorder = (props) => {
	const {
		allowReset = true,
		value = '',
		defaultValue = undefined,
		onChange,
	} = props;

	if (allowReset) {
		return (
			<AtrcWrapLib className={classnames('at-flx-grw-1')}>
				<AtrcResetWrap className={classnames(AtrcPrefix('bdr-rst'))}>
					<RenderBorderBoxControl {...props} />
					<AtrcResetButtonIcon
						defaultValue={defaultValue}
						value={value}
						onClick={() => onChange({})}
					/>
				</AtrcResetWrap>
			</AtrcWrapLib>
		);
	}

	return <RenderBorderBoxControl {...props} />;
};
export default AtrcControlBorder;
