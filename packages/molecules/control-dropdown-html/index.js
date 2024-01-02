/*Attributes Structure
Type string||int

Single value

**/
/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcImg from '../../atoms/img';
import AtrcRadio from '../../atoms/radio';

import AtrcDropdown from '../dropdown';

import AtrcUseInstanceId from '../../utils/use-instance-id';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const LocalIconPreview = ({ icon }) => {
	if (typeof icon === 'function') {
		return icon({});
	}
	return (
		<AtrcIcon
			svg={icon}
			type='svg'
		/>
	);
};
export const AtrcIconPreview = (props) => {
	if (props && props.icon) {
		return (
			<AtrcWrap
				className={classnames(
					AtrcPrefix('ctrl-dropdown-html-item-preview'),
					'at-p',
					'at-bdr'
				)}>
				<LocalIconPreview {...props} />
			</AtrcWrap>
		);
	}
	return null;
};
const RenderContent = ({ options, value, onChange, instanceId }) => (
	<AtrcWrap
		className={classnames(AtrcPrefix('ctrl-dropdown-html-wrp'), 'at-w')}>
		{options.length
			? options.map(function (item, iDx) {
					const inputId =
						AtrcPrefix('ctrl-dropdown-html-item') +
						'-' +
						instanceId +
						'-' +
						iDx;
					return (
						<AtrcWrap
							key={iDx}
							className={classnames(AtrcPrefix('ctrl-dropdown-html-item'))}>
							<AtrcLabel
								className={classnames(
									AtrcPrefix('ctrl-dropdown-html-item-lbl'),
									'at-flx',
									'at-al-itm-ctr'
								)}
								htmlFor={inputId}>
								<AtrcRadio
									id={inputId}
									name={
										AtrcPrefix('ctrl-dropdown-html-item') + '-' + instanceId
									}
									value={item.value}
									checked={item.value === value}
									onClick={() => onChange(item.value)}
									readOnly
								/>
								{item.imgSrc ? (
									<AtrcImg
										src={item.imgSrc}
										alt={item.label}
										style={{ maxWidth: '50px' }}
									/>
								) : null}
								{item.svg ? (
									<LocalIconPreview
										icon={item.svg}
										type='svg'
									/>
								) : null}
							</AtrcLabel>
						</AtrcWrap>
					);
				})
			: null}
	</AtrcWrap>
);

const RenderControl = (props) => {
	const {
		label = __('Choose from options', 'atrc-prefix-atrc'),
		value,
		onChange = () => {},
		options = [],
		variant = '',
		className = '',
		instanceId = '',
		...defaultProps
	} = props;

	return (
		<AtrcDropdown
			className={classnames(
				AtrcPrefix('ctrl-dropdown-html'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-dropdown-html') + '-' + variant : ''
			)}
			renderToggle={({ isOpen, onToggle }) => (
				<AtrcWrap onClick={onToggle}>{label}</AtrcWrap>
			)}
			renderContent={() => {
				return (
					<>
						<RenderContent
							onChange={onChange}
							options={options}
							instanceId={instanceId}
							value={value}
						/>
					</>
				);
			}}
			{...defaultProps}
		/>
	);
};

const AtrcControlDropdownHtml = (props) => {
	const { allowReset = true, value = '', onChange } = props;

	const instanceId = AtrcUseInstanceId(
		AtrcControlDropdownHtml,
		'atrc-ctrl-dropdown-html'
	);

	if (allowReset) {
		return (
			<AtrcWrap
				className={classnames(
					AtrcPrefix('rst-wrp'),
					AtrcPrefix('lbl-rst'),
					'at-flx',
					'at-al-itm-st',
					'at-gap',
					'at-flx-grw-1'
				)}>
				<RenderControl
					instanceId={instanceId}
					{...props}
				/>
				<AtrcResetButtonIcon
					value={value}
					onClick={() => onChange('')}
				/>
			</AtrcWrap>
		);
	}

	return <RenderControl {...props} />;
};
export default AtrcControlDropdownHtml;
