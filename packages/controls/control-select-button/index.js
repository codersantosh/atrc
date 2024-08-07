import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';

/* Molecules */
import AtrcTooltip from '../../molecules/tooltip';
import AtrcButtonGroup from '../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
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
				hasIcon={option.icon ? true : false}
				className={classnames(AtrcPrefix('btn-select'))}
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
