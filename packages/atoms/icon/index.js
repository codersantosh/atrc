import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useState } from '@wordpress/element';

import { Icon } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcIconWp = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;
	return (
		<Icon
			className={classnames(
				AtrcPrefix('svg'),
				className,
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};

export const AtrcIconSvg = (props) => {
	const { svg, variant = '', className = '', ...defaultProps } = props;

	const div = document.createElement('div');
	div.innerHTML = svg;
	const hasHtmlTags = div.querySelector('*') !== null;
	return hasHtmlTags ? (
		<span
			className={classnames(
				className,
				AtrcPrefix('svg-wrp'),
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			)}
			dangerouslySetInnerHTML={{ __html: svg }}
			{...defaultProps}
		/>
	) : (
		<span
			className={classnames(
				className,
				AtrcPrefix('svg-wrp'),
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			)}
			{...defaultProps}>
			{svg}
		</span>
	);
};

/* Dont work on save function of WordPress blocks */
export const AtrcIconUrl = (props) => {
	const { iconUrl, className = '', ...defaultProps } = props;

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
		<span
			className={classnames(
				className,
				AtrcPrefix('svg-wrp'),
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			)}
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
				AtrcPrefix('svg'),
				'at-w',
				'at-h',
				className,
				variant ? AtrcPrefix('svg') + '-' + variant : ''
			),
			...defaultProps,
		});
	}

	if (['bootstrap', 'wp', 'ri'].includes(type)) {
		return <AtrcIconWp {...props} />;
	}

	if (type === 'svg') {
		return <AtrcIconSvg {...props} />;
	}

	if ('url' === type) {
		return <AtrcIconUrl {...props} />;
	}

	return null;
};
export default AtrcIcon;
