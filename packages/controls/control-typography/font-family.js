/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Internal */
import { SystemFontTypeList } from './options';

/*Local*/
const FontFamily = ({ value, onChange, google, custom }) => {
	const GoogleFontsOptions = useMemo(() => {
		if (!google) {
			return null;
		}
		return google.map((font) => {
			return {
				label: font.family,
				value: font.family,
			};
		});
	}, [google]);

	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlSelect
				label={__('Font family', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={value && value.fntFam}
				onChange={(newVal) => onChange(newVal, 'fntFam')}>
				<option value=''>{__('Default', 'atrc-prefix-atrc')}</option>
				<optgroup label={__('System fonts', 'atrc-prefix-atrc')}>
					{SystemFontTypeList().map((font) => (
						<option
							key={font.value}
							value={font.value}>
							{font.label}
						</option>
					))}
				</optgroup>
				{GoogleFontsOptions ? (
					<optgroup label={__('Google fonts', 'atrc-prefix-atrc')}>
						{GoogleFontsOptions.map((font) => (
							<option
								key={font.value}
								value={font.value}>
								{font.label}
							</option>
						))}
					</optgroup>
				) : null}
				{custom && isArray(custom) && custom.length ? (
					<optgroup label={__('Custom fonts', 'atrc-prefix-atrc')}>
						{custom.map((font) => (
							<option
								key={font.value}
								value={font.value}>
								{font.label}
							</option>
						))}
					</optgroup>
				) : null}
			</AtrcControlSelect>
		</AtrcPanelRow>
	);
};
export default FontFamily;
