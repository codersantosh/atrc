import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */

/* Molecules */

/* Controls */

/* Internal */
import AtrcText from '../atoms/text';
import AtrcMapGoogle from '../atoms/map-google';

/* Local */
/* Settings is based on the Websit elements like atoms and molecules.
Eg text and button have different or same properties.
Properties are defined from the variable name of atomic css
*/
const AtrcBlocks = (props) => {
	const {
		value,
		blockName,
		blockProps,
		wrapProps,
		htmlTag = 'p',
		componentType ='client',/* client is for edit function and server is for save function */
	} = props;
	const { content = {} } = value;

	if ('text' === blockName) {
		return (
			<AtrcText
				tag={htmlTag}
				dangerouslySetInnerHTML={{
					__html: content.value,
				}} /* support html tag on value, support Richtext */
				{...blockProps}
			/>
		);
	}
	if ('mapGoogle' === blockName) {
		return (
			<AtrcMapGoogle
				value={content}
				{...blockProps}
			/>
		);
	}
	return __('No blocks found!', 'atrc-prefix-atrc');
};

export default AtrcBlocks;
