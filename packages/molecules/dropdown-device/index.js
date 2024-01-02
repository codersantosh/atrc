/** WordPress*/
import { useState, useEffect, useRef } from '@wordpress/element';

import { MenuGroup, MenuItem } from '@wordpress/components';

/** Library*/
import { find } from 'lodash';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcWord from '../../atoms/word';

import AtrcDropdown from '../dropdown';
import AtrcTooltip from '../tooltip';

import AtrcUseInstanceId from '../../utils/use-instance-id';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export function AtrcDropdownDevice({
	label = '',
	className,
	children,
	tabs,
	initialTabName,
	onSelect,
	wrapProps = {},
}) {
	const [selectedTab, setSelectedTab] = useState();

	const rowref = useRef();

	const instanceId = AtrcUseInstanceId(
		AtrcDropdownDevice,
		'atrc-dropdown-device'
	);

	const handleTabSelection = (tabName) => {
		const nSelectedTab = find(tabs, { name: tabName });
		setSelectedTab(nSelectedTab);
		onSelect?.(tabName);
	};

	const selectedId = `${instanceId}-${selectedTab?.name ?? 'none'}`;

	useEffect(() => {
		if (!selectedTab?.name && tabs.length > 0) {
			handleTabSelection(initialTabName || tabs[0].name);
		}
	}, [tabs, selectedTab?.name, initialTabName]);

	if (!selectedTab) {
		return null;
	}
	return (
		<AtrcWrap
			{...wrapProps}
			className={classnames(
				AtrcPrefix('dropdown-device'),
				className,
				wrapProps.className ? wrapProps.className : ''
			)}>
			{label && <AtrcLabel variant='dropdown-device-lbl'>{label}</AtrcLabel>}
			<AtrcDropdown
				popoverProps={{ rowref }}
				focusOnMount
				renderToggle={({ isOpen, onToggle }) => (
					<AtrcButton
						variant='devices'
						aria-expanded={isOpen}
						onClick={onToggle}>
						<AtrcTooltip text={selectedTab.info}>
							<AtrcIcon
								type={selectedTab.iconType ? selectedTab.iconType : 'wp'}
								icon={selectedTab.icon}
								size={selectedTab.iconSize || 16}
							/>
						</AtrcTooltip>
					</AtrcButton>
				)}
				renderContent={(props) => {
					return (
						<MenuGroup
							className={classnames(AtrcPrefix('dropdown-device-cont'))}>
							{tabs?.flatMap((control) => {
								if (control.on) {
									return (
										<MenuItem
											onClick={(event) => {
												event.stopPropagation();
												setSelectedTab(control);
												props.onClose();
											}}
											id={`${instanceId}-${control.name}`}>
											<AtrcTooltip
												className='at-flx at-al-itm-ctr at-gap'
												text={control.info}>
												<AtrcIcon
													type={control.iconType ? control.iconType : 'wp'}
													icon={control.icon}
													size={control.iconSize || 16}
												/>
												<AtrcWord tag='span'>{control.title}</AtrcWord>
											</AtrcTooltip>
										</MenuItem>
									);
								}
								return null;
							})}
						</MenuGroup>
					);
				}}
			/>
			{selectedTab && (
				<AtrcWrap
					key={selectedTab.name}
					aria-labelledby={selectedId}
					role='tabpanel'
					id={`${selectedId}-view`}>
					{children(selectedTab)}
				</AtrcWrap>
			)}
		</AtrcWrap>
	);
}

export default AtrcDropdownDevice;
