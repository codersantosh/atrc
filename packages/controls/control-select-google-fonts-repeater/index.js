import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

/*Molecules*/
import AtrcRepeater from '../../molecules/repeater';
import AtrcRepeaterGroup from '../../molecules/repeater/repeater-group';
import AtrcRepeaterGroupAdd from '../../molecules/repeater/repeater-group-add';

/* Controls */
import AtrcControlSelectGoogleFonts from '../control-select-google-fonts';

/*Local*/
const AtrcControlSelectGoogleFontsRepeater = (props) => {
	const {
		onChange,
		value = [],
		label = '',
		apiKey = '',
		...defaultProps
	} = props;

	const [fonts, setFonts] = useState(value);

	const setFont = (newVal, iDx) => {
		const updatedFonts = [...fonts];
		updatedFonts[iDx] = newVal;
		setFonts(updatedFonts);
		onChange(updatedFonts);
	};

	const removeFont = (iDx) => {
		const updatedFonts = [...fonts];
		updatedFonts.splice(iDx, 1);
		setFonts(updatedFonts);
		onChange(updatedFonts);
	};

	return (
		<AtrcRepeater
			label={label}
			groups={() =>
				fonts.map((font, iDx) => (
					<AtrcRepeaterGroup
						groupIndex={iDx}
						deleteGroup={removeFont}
						groupTitle={__('Google font', 'atrc-prefix-atrc')}
						deleteTitle={__('Remove font', 'atrc-prefix-atrc')}
						key={iDx}>
						<AtrcControlSelectGoogleFonts
							apiKey={apiKey}
							value={font}
							onChange={(newVal) => setFont(newVal, iDx)}
						/>
					</AtrcRepeaterGroup>
				))
			}
			addGroup={() => (
				<AtrcRepeaterGroupAdd
					addGroup={() => setFonts([...fonts, {}])}
					tooltipText={__('Add Google font', 'atrc-prefix-atrc')}
					label={__('Add Google font', 'atrc-prefix-atrc')}
				/>
			)}
			{...defaultProps}
		/>
	);
};

export default AtrcControlSelectGoogleFontsRepeater;
