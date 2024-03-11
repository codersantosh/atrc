/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Atrc */
import {
	AtrcText,
	AtrcMapGoogle,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Atoms/AtrcMapGoogle',
	component: AtrcMapGoogle,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MapGoogle = {
	args: {
		variant: '',
		height: '500px',
	},
};
export const MapGoogleWithApi = () => {
	const [value, setValue] = useState({
		apiKey: 'yourAPIKey',
		loc: 'Gorkha Palace',
		lat: '23.475109',
		lng: '78.451439',
		zoom: 15,
		mapTypeId: 'roadmap',
		markers: [
			{
				id: 1,
				lat: '23.475109',
				lng: '78.451439',
				title: 'Marker 1',
				desc: 'Description 1',
			},
			{
				id: 2,
				lat: '23.480000',
				lng: '78.460000',
				title: 'Marker 2',
				desc: 'Description 2',
			},
		],
		newGoogleMapProps: {},
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcMapGoogle
						value={value}
						onChange={handleChange}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const MapGoogleWithApiServer = {
	args: {
		variant: '',
		height: '500px',
		componentType: 'server',
		value: { apiKey: 'yourAPIKey' },
	},
};
