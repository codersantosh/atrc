import React from 'react';

/*WordPress*/
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcGetInlineCss from '../../utils/get-inline-css';

/*Local*/
const getStickyClass = (type) => {
	if ('fixed' === type) {
		return AtrcPrefix('ftr-fix');
	}
	return AtrcPrefix('ftr-stky');
};

export const AtrcFooterTag = (props) => {
	const {
		useDynamicPosition = false,
		isSticky = false,
		includeDefaultClass = true,
		stickyProps = {},
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='footer'
			className={classnames(
				AtrcPrefix('ftr'),
				includeDefaultClass && 'at-bg-cl',
				includeDefaultClass && 'at-p',
				className,
				!useDynamicPosition && isSticky
					? getStickyClass(stickyProps.type) + ' at-pos at-z-idx'
					: '',
				variant && AtrcPrefix('ftr') + variant
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};

/* Gutenberg block render doesnot support HOOKS */
const AtrcFooterClient = (props) => {
	const {
		className = '',
		stickyProps = {
			type: 'stky',
			css: {
				'--at-b': '0',
			},
		},
		scrollDiff = 130,
	} = props;

	const [addStickyClass, setAddStickyClass] = useState(false);

	const [scrollPos, setScrollPos] = useState(window.pageYOffset);
	const [scrollDirection, setScrollDirection] = useState();
	const [lastDirectionScrollPos, setLastDirectionScrollPos] = useState(0);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		setScrollDirection(currentScrollPos > scrollPos ? 'down' : 'up');
		setScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPos]);

	useEffect(() => {
		if (scrollDirection) {
			setLastDirectionScrollPos(window.pageYOffset);
		}
	}, [scrollDirection]);

	useEffect(() => {
		const diff = Math.abs(scrollPos - lastDirectionScrollPos);
		if (diff > scrollDiff) {
			if (
				scrollDirection === 'up' &&
				window.pageYOffset < lastDirectionScrollPos
			) {
				setAddStickyClass(false);
			} else if (
				scrollDirection === 'down' &&
				window.pageYOffset > lastDirectionScrollPos
			) {
				setAddStickyClass(true);
			}
		}
	}, [scrollPos, lastDirectionScrollPos, scrollDirection]);

	return (
		<AtrcFooterTag
			{...props}
			className={classnames(
				className,
				addStickyClass
					? getStickyClass(stickyProps.type) + ' at-pos at-z-idx'
					: ' '
			)}
			style={addStickyClass ? AtrcGetInlineCss(stickyProps.css) : null}
		/>
	);
};

const AtrcFooter = (props) => {
	const { useDynamicPosition = false } = props;

	if (useDynamicPosition) {
		return <AtrcFooterClient {...props} />;
	}

	return <AtrcFooterTag {...props} />;
};
export default AtrcFooter;
