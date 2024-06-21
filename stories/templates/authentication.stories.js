/* WordPress */
import { __ } from '@wordpress/i18n';
/* Inbuilt */
import { AtrcAuthenticationTemplate1 } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/Authentication',
};

/* Login Template 1 */
export const Login = () => {
	return (
		<AtrcAuthenticationTemplate1
			logo={{
				src: 'https://www.acmeit.org/wp-content/uploads/2020/03/acmeit-logo.png',
			}}
			fields={[
				{
					label: __('Username', 'atrc-prefix-atrc'),
					placeholder: __('jhonDoe123', 'atrc-prefix-atrc'),
				},
				{
					type: 'password',
					label: __('Password', 'atrc-prefix-atrc'),
					placeholder: __('*********', 'atrc-prefix-atrc'),
				},
			]}
			submit={{
				text: __('Login', 'atrc-prefix-atrc'),
			}}
			checkbox={{
				label: __('Remember Me', 'atrc-prefix-atrc'),
			}}
			bottomLinks={[
				{
					children: __('Forgot Password', 'atrc-prefix-atrc'),
				},
				{
					children: __('Register', 'atrc-prefix-atrc'),
				},
			]}
		/>
	);
};

/* Register Template 1 */
export const Register = () => {
	return (
		<AtrcAuthenticationTemplate1
			type='register'
			logo={{
				src: 'https://www.acmeit.org/wp-content/uploads/2020/03/acmeit-logo.png',
			}}
			fields={[
				{
					label: __('Username', 'atrc-prefix-atrc'),
				},
				{
					type: 'email',
					label: __('Email', 'atrc-prefix-atrc'),
					help: __(
						'Registration confirmation will be emailed to you.',
						'atrc-prefix-atrc'
					),
				},
				{
					label: __('Password', 'atrc-prefix-atrc'),
					type: 'password',
					placeholder: __('Password', 'atrc-prefix-atrc'),
				},
				{
					label: __('Confirm Password', 'atrc-prefix-atrc'),
					type: 'password',
					placeholder: __('Confirm Password', 'atrc-prefix-atrc'),
				},
			]}
			submit={{
				text: __('Register', 'atrc-prefix-atrc'),
			}}
			bottomLinks={[
				{
					children: __('Login', 'atrc-prefix-atrc'),
				},
				{
					children: __('Forgot Password', 'atrc-prefix-atrc'),
				},
			]}
		/>
	);
};

/* Lost Password Template 1 */
export const LostPassword = () => {
	return (
		<AtrcAuthenticationTemplate1
			type='lostpassword'
			logo={{
				src: 'https://www.acmeit.org/wp-content/uploads/2020/03/acmeit-logo.png',
			}}
			fields={[
				{
					label: __('Username or Email Address', 'atrc-prefix-atrc'),
				},
			]}
			submit={{
				text: __('Get New Password', 'atrc-prefix-atrc'),
			}}
			bottomLinks={[
				{
					children: __('Login', 'atrc-prefix-atrc'),
				},
				{
					children: __('Register', 'atrc-prefix-atrc'),
				},
			]}
		/>
	);
};
