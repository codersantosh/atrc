import React from 'react';

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';

import { useState, useMemo, useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcSpinner from '../../atoms/spinner';

/* Controls */
import AtrcControlCombobox from '../control-combobox';

/* Molecules */
import AtrcNotice from '../../molecules/notice';
import AtrcPanelRow from '../../molecules/panel-row';

/* Internal */
import AtrcControlSelectGoogleFontsWeight from './font-weight';
import AtrcControlSelectGoogleFontsPreview from './fonts-preview';
import googleFonts from './webfonts.json';

/*Local*/
const AtrcControlSelectGoogleFonts = (props) => {
	const { apiKey = '', onChange, value } = props;

	const { family = '', weight = '' } = value;

	const [fonts, setFonts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [filteredOptions, setFilteredOptions] = useState([]);

	useEffect(() => {
		async function fetchFonts() {
			try {
				const response = await fetch(
					`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${apiKey}`
				);
				if (!response.ok) {
					let errorMsg = response.statusText;
					if (!errorMsg) {
						errorMsg = __(
							'Bad response from the server. Make sure the API key is correct.',
							'atrc-prefix-atrc'
						);
					}

					throw new Error(errorMsg);
				}
				const data = await response.json();
				setFonts(data.items);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		if (apiKey) {
			fetchFonts();
		} else {
			setFonts(googleFonts.items);
			setLoading(false);
		}
	}, []);

	const setFontFamily = (newVal) => {
		onChange({
			family: newVal,
			weight: '',
		});
	};

	const setAttr = (newVal, type = 'weight') => {
		if ('weight' === type) {
			newVal.sort((a, b) => a - b);
			// Convert the sorted array to a comma-separated string
			newVal = newVal.join(',');
		}
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const fontOptions = useMemo(() => {
		return fonts && fonts.length
			? fonts.map((item) => ({ label: item.family, value: item.family }))
			: [];
	}, [fonts]);

	useEffect(() => {
		setFilteredOptions(
			fonts && fonts.length
				? fonts.map((item) => ({ label: item.family, value: item.family }))
				: []
		);
	}, [fontOptions]);

	if (error) {
		return (
			<AtrcNotice
				isDismissible={false}
				autoDismiss={false}>
				{sprintf(
					__('An error occurred: %s', 'atrc-prefix-atrc'),
					error.message
				)}
			</AtrcNotice>
		);
	}

	if (loading) {
		return <AtrcSpinner />;
	}

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlCombobox
					label={__('Google font family', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={family}
					onChange={setFontFamily}
					options={filteredOptions}
					onFilterValueChange={(inputValue) =>
						setFilteredOptions(
							fontOptions.filter((option) =>
								option.label.toLowerCase().startsWith(inputValue.toLowerCase())
							)
						)
					}
				/>
			</AtrcPanelRow>
			{family ? (
				<>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlSelectGoogleFontsWeight
							label={__('Font weight', 'atrc-prefix-atrc')}
							wrapProps={{
								className: 'at-flx-grw-1',
							}}
							value={weight}
							onChange={setAttr}
							fonts={fonts}
							family={family}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow
						className={classnames('at-m', 'at-flx-col', 'at-al-itm-st')}>
						<AtrcControlSelectGoogleFontsPreview
							font={value.family}
							weight={value.weight}
							wrapProps={{
								className: 'at-flx-grw-1',
							}}
						/>
					</AtrcPanelRow>
				</>
			) : null}
		</>
	);
};
export default AtrcControlSelectGoogleFonts;
