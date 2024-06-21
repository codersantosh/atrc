import React from 'react';

/*Library*/
import classnames from 'classnames';
import { isEmpty } from 'lodash-es';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcText from '../../../atoms/text';
import { AtrcIconSvg } from '../../../atoms/icon';

/*Molecules*/
import AtrcButtonGroup from '../../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const Atrc404Template1 = (props) => {
	const {
		className = '',

		contentProps = {},
		variant = '',
		label,
		right = null,
		title = {},
		description,
		heading,
		subHeading,
		headingGroup = {},
		buttons = [],
		hasIcon,
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('404'),
				AtrcPrefix('404-tpl-1'),
				className,
				variant ? AtrcPrefix('404-tpl-1') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcWrap
				{...contentProps}
				className={classnames(
					'at-flx',
					'at-flx-col',
					'at-jfy-cont-ctr',
					'at-al-itm-ctr',
					AtrcPrefix('404-cont'),
					contentProps.className
				)}>
				{!isEmpty(headingGroup) ? (
					<AtrcWrap
						className={classnames(AtrcPrefix('404-cont-heading'), 'at-m')}>
						{!isEmpty(headingGroup.subHeading) ? (
							<AtrcText
								tag='p'
								className={classnames(AtrcPrefix('404-cont-heading-sub-title'))}
								{...headingGroup.subHeading}
							/>
						) : null}
						{!isEmpty(headingGroup.heading) ? (
							<AtrcText
								tag='h3'
								className={classnames(AtrcPrefix('404-cont-heading-title'))}
								{...headingGroup.heading}
							/>
						) : null}
					</AtrcWrap>
				) : null}

				{!isEmpty(title) ? (
					<AtrcText
						tag='h2'
						className={classnames(AtrcPrefix('404-cont-title'))}
						{...title}
					/>
				) : null}
				{!isEmpty(description) ? (
					<AtrcText
						tag='p'
						className={classnames(AtrcPrefix('404-cont-desc'))}
						{...description}
					/>
				) : null}

				{!isEmpty(buttons) ? (
					<AtrcButtonGroup className={classnames('at-m')}>
						{buttons.map((item, iDx) => {
							const { icon, text = '', ...itemProps } = item;
							return (
								<AtrcButton {...itemProps}>
									{item.hasIcon ? <AtrcIconSvg svg={icon} /> : ''}
									{text}
								</AtrcButton>
							);
						})}
					</AtrcButtonGroup>
				) : null}
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default Atrc404Template1;
