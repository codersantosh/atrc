import React from 'react';

/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { DateTimePicker } from '@wordpress/components';

import { useRef } from '@wordpress/element';

import { dateI18n, getSettings } from '@wordpress/date';

/*Library*/
import { BsX } from 'react-icons/bs';
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
function UserDateToggle({ isOpen, onClick, date }) {
	const dateFormat = getSettings().formats.date;

	return (
		<AtrcButton
			variant='link'
			aria-expanded={isOpen}
			aria-label={__('Select date: Date', 'atrc-prefix-atrc')}
			onClick={onClick}>
			{date
				? dateI18n(dateFormat, date)
				: __('Immediately', 'atrc-prefix-atrc')}
		</AtrcButton>
	);
}

function UserDateForm({
	label = __('Date', 'atrc-prefix-atrc'),
	onClose,
	date,
	onChange,
}) {
	const onUpdateDate = (newDate) => {
		onChange(newDate);
		onClose();
	};

	const settings = getSettings();

	// To know if the current timezone is a 12 hour time with look for "a" in the time format
	// We also make sure this a is not escaped by a "/"
	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only the lower case a.
			.replace(/\\\\/g, '') // Replace "//" with empty strings.
			.split('')
			.reverse()
			.join('') // Reverse the string and test for "a" not followed by a slash.
	);
	return (
		<AtrcWrap className={classnames(AtrcPrefix('date-time-picker-cont'))}>
			<AtrcWrap
				className={classnames(
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-bdr',
					'at-m',
					AtrcPrefix('date-time-picker-cont-hdr')
				)}>
				<AtrcText
					tag='h6'
					className={classnames(AtrcPrefix('m-0'), 'at-m')}>
					{label}
				</AtrcText>

				{onClose && (
					<AtrcButton
						variant='link'
						label={__('Close', 'atrc-prefix-atrc')}
						onClick={onClose}>
						<AtrcIcon
							type='bootstrap'
							icon={BsX}
							size='16'
						/>
					</AtrcButton>
				)}
			</AtrcWrap>

			<DateTimePicker
				startOfWeek={getSettings().l10n.startOfWeek}
				__nextRemoveHelpButton
				__nextRemoveResetButton
				currentDate={date}
				onChange={onUpdateDate}
				is12Hour={is12HourTime}
			/>
		</AtrcWrap>
	);
}

export function AtrcControlDateTimePicker({
	contentLabel = __('Date', 'atrc-prefix-atrc'),
	date,
	onChange,
}) {
	const rowref = useRef();
	return (
		<AtrcDropdown
			width='280px'
			popoverProps={{ rowref, placement: 'bottom-start' }}
			focusOnMount
			renderToggle={({ isOpen, onToggle }) => (
				<UserDateToggle
					isOpen={isOpen}
					onClick={onToggle}
					date={date}
				/>
			)}
			renderContent={({ onClose }) => (
				<UserDateForm
					label={contentLabel}
					onClose={onClose}
					date={date}
					onChange={(newVal) => {
						onChange(newVal.replace('T', ' '));
					}}
				/>
			)}
		/>
	);
}

export default AtrcControlDateTimePicker;
