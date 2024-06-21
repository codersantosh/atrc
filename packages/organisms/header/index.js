import React from 'react';

/*WordPress*/
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcHeaderTag = (props) => {
	const {
		isSticky = false,
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='header'
			className={classnames(
				AtrcPrefix('hdr'),
				'at-bg-cl',
				className,
				isSticky ? AtrcPrefix('hdr-stky') + ' at-pos at-z-idx' : '',
				variant && AtrcPrefix('hdr') + variant
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};

/* Gutenberg block render doesnot support HOOKS */
const AtrcHeaderClient = (props) => {
	const { isSticky = false, useDynamicHeight = true } = props;

	const [headerHeight, setHeaderHeight] = useState(0);

	const updateHeight = () => {
		const stickyHeader = document.getElementsByClassName('at-hdr-stky');
		if (stickyHeader && stickyHeader[0]) {
			setHeaderHeight(stickyHeader[0].offsetHeight + 16);
		}
	};

	useEffect(() => {
		let timeoutId;
		const handleHeight = () => {
			if (isSticky && useDynamicHeight) {
				timeoutId = setTimeout(updateHeight, 300);
			}
		};

		const handleResize = () => {
			clearTimeout(timeoutId);
		};
		window.addEventListener('resize', handleHeight);

		handleHeight();

		return () => {
			window.removeEventListener('resize', handleHeight);
			clearTimeout(timeoutId);
		};
	}, [isSticky, useDynamicHeight]);

	useEffect(() => {
		if (headerHeight && isSticky && useDynamicHeight) {
			const atMain = document.getElementById('at-main');
			if (atMain) {
				atMain.style.marginTop = `${headerHeight}px`;
			}
		}
	}, [isSticky, headerHeight, useDynamicHeight]);

	return <AtrcHeaderTag {...props} />;
};

const AtrcHeader = (props) => {
	const { useDynamicHeight = false } = props;

	if (useDynamicHeight) {
		return <AtrcHeaderClient {...props} />;
	}

	return <AtrcHeaderTag {...props} />;
};
export default AtrcHeader;
