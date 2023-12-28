/*WordPress*/
import { __ } from '@wordpress/i18n';
import { Placeholder } from '@wordpress/components';

/*Inbuilt*/
import { AtrcTooltip } from '..';
import { AtrcButton, AtrcIcon } from '../../atoms';
import {
	FiveColumnsOptions,
	FourColumnsOptions,
	OneColumnOptions,
	SixColumnsOptions,
	ThreeColumnsOptions,
	TwoColumnsOptions,
} from './options';
import classNames from 'classnames';
import AtrcPrefix from '../../prefix-vars';

/* Local */
const AtrcControlColumnsAdvancedLayoutPlaceholder = (props) => {
	const {
		label = __('Select columns', 'atrc-prefix-atrc'),
		instanceId,
		value,
		columns,
		className = '',
		variant = '',
		onChange = () => {},
		...defaultProps
	} = props;

	return (
		<Placeholder
			icon='screenoptions'
			className={classNames(
				AtrcPrefix('ctrl-adv-col-plhldr'),
				className,
				variant ? AtrcPrefix('ctrl-adv-col-plhldr') + '-' + variant : ''
			)}
			label={label}
			{...defaultProps}>
			{OneColumnOptions.map((item, key) => (
				<AtrcTooltip
					text={item.label}
					key={key}>
					<AtrcButton onClick={() => onChange(1, item.value)}>
						<AtrcIcon
							icon={item.icon}
							type={item.iconType || 'wp'}
						/>
					</AtrcButton>
				</AtrcTooltip>
			))}
			{TwoColumnsOptions.map((item, key) => (
				<AtrcTooltip
					text={item.label}
					key={key}>
					<AtrcButton onClick={() => onChange(2, item.value)}>
						<AtrcIcon
							icon={item.icon}
							type={item.iconType || 'wp'}
						/>
					</AtrcButton>
				</AtrcTooltip>
			))}
			{ThreeColumnsOptions.map((item, key) => (
				<AtrcTooltip
					text={item.label}
					key={key}>
					<AtrcButton onClick={() => onChange(3, item.value)}>
						<AtrcIcon
							icon={item.icon}
							type={item.iconType || 'wp'}
						/>
					</AtrcButton>
				</AtrcTooltip>
			))}
			{FourColumnsOptions.map((item, key) => (
				<AtrcTooltip
					text={item.label}
					key={key}>
					<AtrcButton onClick={() => onChange(4, item.value)}>
						<AtrcIcon
							icon={item.icon}
							type={item.iconType || 'wp'}
						/>
					</AtrcButton>
				</AtrcTooltip>
			))}
			{FiveColumnsOptions.map((item, key) => (
				<AtrcTooltip
					text={item.label}
					key={key}>
					<AtrcButton onClick={() => onChange(5, item.value)}>
						<AtrcIcon
							icon={item.icon}
							type={item.iconType || 'wp'}
						/>
					</AtrcButton>
				</AtrcTooltip>
			))}
			{SixColumnsOptions.map((item, key) => (
				<AtrcTooltip
					text={item.label}
					key={key}>
					<AtrcButton onClick={() => onChange(6, item.value)}>
						<AtrcIcon
							icon={item.icon}
							type={item.iconType || 'wp'}
						/>
					</AtrcButton>
				</AtrcTooltip>
			))}
		</Placeholder>
	);
};

export default AtrcControlColumnsAdvancedLayoutPlaceholder;
