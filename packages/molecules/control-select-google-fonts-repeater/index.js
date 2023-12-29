/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

/*Inbuilt*/
import {
	AtrcRepeater,
	AtrcRepeaterGroup,
	AtrcRepeaterGroupAdd,
} from '../index';

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

	const setFont = (newVal, index) => {
		const updatedFonts = [...fonts];
		updatedFonts[index] = newVal;
		setFonts(updatedFonts);
		onChange(updatedFonts);
	};

	const removeFont = (index) => {
		const updatedFonts = [...fonts];
		updatedFonts.splice(index, 1);
		setFonts(updatedFonts);
		onChange(updatedFonts);
	};

	return (
		<AtrcRepeater
			label={label}
			groups={() =>
				fonts.map((font, index) => (
					<AtrcRepeaterGroup
						groupIndex={index}
						deleteGroup={removeFont}
						groupTitle={__('Google font', 'atrc-prefix-atrc')}
						deleteTitle={__('Remove font', 'atrc-prefix-atrc')}
						key={index}>
						<AtrcControlSelectGoogleFonts
							apiKey={apiKey}
							value={font}
							onChange={(newVal) => setFont(newVal, index)}
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
