/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import { AtrcPanelTools, AtrcControlSelectDevice } from '../index';

import OverflowOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcOverflowControl = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	const OverflowTabs = useMemo(() => {
		return [
			{
				name: 'ovf',
				title: label,
				hasValue: !isEmpty(value),
				onDeselect: () => onChange({}),
			},
		];
	}, [value]);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-ovf'),
				className,
				variant ? AtrcPrefix('ctrl-ovf') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={OverflowTabs}>
			{(activeItems) =>
				map(activeItems, (item, iDx) => (
					<AtrcControlSelectDevice
						label={__('Overflow', 'atrc-prefix-atrc')}
						options={OverflowOptions}
						value={value}
						onChange={onChange}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcOverflowControl;
