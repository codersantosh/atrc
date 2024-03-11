/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlMapGoogle,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlMapGoogle',
	component: AtrcControlMapGoogle,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
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
		},
	},
};

const Template = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (newValue) => {
		setValue(newValue);
		args.onChange(newValue);
		action('onChange')(newValue);
	};

	return (
		<AtrcControlMapGoogle
			value={value}
			onChange={handleChange}
		/>
	);
};

export const MapGoogle = Template.bind({});

export const MapGoogleWithApi = () => {
	const [value, setValue] = useState({
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
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlMapGoogle
						apiKey={'test'}
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
