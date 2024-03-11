import React from 'react';
import { AtrcAudio } from '../../packages';

export default {
	title: 'Atoms/AtrcAudio',
	component: AtrcAudio,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

const Template = (args) => <AtrcAudio {...args} />;

export const HTML5Audio = Template.bind({});
HTML5Audio.args = {
	variant: '',
	className: '',
	url: require('../assets/audio/archivo.mp3'),
	autoplay: false,
	controls: true,
	loop: false,
	muted: true,
};
