/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import {
	AtrcWrap,
	AtrcButton,
	AtrcIcon,
	AtrcResetButtonIcon,
	AtrcLabel,
} from '../../atoms';

import { AtrcButtonGroup, AtrcTooltip } from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTooltipChild = ({ option }) => {
	if (option.iconType && 'svg' === option.iconType) {
		return (
			<AtrcIcon
				svg={option.icon}
				type='svg'
			/>
		);
	}
	if (option.icon) {
		return (
			<AtrcIcon
				icon={option.icon}
				type={option.iconType || 'wp'}
			/>
		);
	}
	return option.label;
};

const RenderButtons = ({ options, onChange, value }) => {
	if (!options) {
		return null;
	}
	return options.map(function (option) {
		const {
			tooltip = {
				text: option.label,
			},
		} = option;
		return (
			<AtrcButton
				className={classnames(
					AtrcPrefix('btn-select'),
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-ctr'
				)}
				onClick={() => onChange(option.value)}
				isActive={option.value === value}
				key={option.value}>
				<AtrcTooltip {...tooltip}>
					<RenderTooltipChild option={option} />
				</AtrcTooltip>
			</AtrcButton>
		);
	});
};

const RenderButtonGroup = (props) => {
	const {
		options = [],
		value = '',
		defaultValue = '',
		onChange = () => {},
		allowReset = true,
	} = props;
	return (
		<AtrcButtonGroup>
			<RenderButtons
				options={options}
				onChange={onChange}
				value={value || defaultValue}
			/>
			{allowReset ? (
				<AtrcResetButtonIcon
					defaultValue={defaultValue}
					value={value || defaultValue}
					onClick={() => onChange(defaultValue)}
				/>
			) : null}
		</AtrcButtonGroup>
	);
};

const AtrcControlSelectButton = (props) => {
	const { className = '', variant = '', label = '' } = props;
	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-select-btn'),
				className,
				variant ? AtrcPrefix('ctrl-select-btn') + '-' + variant : ''
			)}>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}
			<RenderButtonGroup {...props} />
		</AtrcWrap>
	);
};
export default AtrcControlSelectButton;
