/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useState } from '@wordpress/element';

import { Icon } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcIconWp = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;
	return (
		<Icon
			className={classnames(
				'at-svg',
				className,
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};

const AtrcIconTag = (props) => {
	const { icon, className = '', variant = '', ...defaultProps } = props;

	const IconTag = icon;
	return (
		<IconTag
			className={classnames(
				'at-svg',
				className,
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};

const AtrcIconUrl = (props) => {
	const { iconUrl, ...defaultProps } = props;

	const [icon, setIcon] = useState();

	useEffect(() => {
		async function fetchIcon() {
			const url = new URL(iconUrl);
			if (!url.pathname.endsWith('.svg')) {
				setIcon({
					error: true,
					msg: __(
						'Error: Icon url should contain .svg extension',
						'atrc-prefix-atrc'
					),
				});
				return;
			}
			try {
				const response = await fetch(iconUrl);
				const data = await response.text();
				setIcon(data);
			} catch (error) {
				setIcon({
					error: true,
					msg: error.message || __('Error on icon url', 'atrc-prefix-atrc'),
				});
			}
		}

		fetchIcon();
	}, [iconUrl]);

	if (!icon) {
		return null;
	}
	if (icon.error) {
		return icon.message;
	}

	return (
		<div
			dangerouslySetInnerHTML={{ __html: icon }}
			{...defaultProps}
		/>
	);
};

const AtrcIcon = (props) => {
	const {
		className = '',
		variant = '',
		type = 'wp',
		svg = '',
		icon = '',
		...defaultProps
	} = props;

	if (typeof icon === 'function') {
		return icon({
			className: classnames(
				'at-svg',
				'at-w',
				'at-h',
				className,
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			),
			...defaultProps,
		});
	}

	if (type === 'wp') {
		return <AtrcIconWp {...props} />;
	}
	if ('ri' === type) {
		return <AtrcIconTag {...props} />;
	}
	if (type === 'bootstrap') {
		return <AtrcIconTag {...props} />;
	}
	if (type === 'svg') {
		if (typeof svg === 'function') {
			return svg({
				className: classnames(
					className,
					variant ? AtrcPrefix('svg') + '-' + variant : ''
				),
				...defaultProps,
			});
		}
		const div = document.createElement('div');
		div.innerHTML = svg;
		const hasHtmlTags = div.querySelector('*') !== null;
		return hasHtmlTags ? (
			<span
				className={classnames(
					'at-svg',
					className,
					variant ? AtrcPrefix('svg') + '-' + variant : ''
				)}
				dangerouslySetInnerHTML={{ __html: svg }}
				{...defaultProps}
			/>
		) : (
			<span
				className={classnames(
					'at-svg',
					className,
					variant ? AtrcPrefix('svg') + '-' + variant : ''
				)}
				{...defaultProps}>
				{svg}
			</span>
		);
	}

	if ('url' === type) {
		return <AtrcIconUrl {...props} />;
	}

	return null;
};
export default AtrcIcon;
