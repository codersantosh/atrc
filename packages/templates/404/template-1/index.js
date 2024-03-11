/*Library*/
import classnames from 'classnames';

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
		variant = '',
		label,
		right = null,
		container,
		title,
		description,
		heading,
		subHeading,
		headingGroup,
		button,
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
			{container ? (
				<AtrcWrap className='at-ctnr'>
					<AtrcWrap
						className={classnames(
							'at-flx',
							'at-flx-col',
							'at-jfy-cont-ctr',
							'at-al-itm-ctr',
							'at-h',
							AtrcPrefix('404-cont')
						)}>
						{container.headingGroup ? (
							<AtrcWrap
								className={classnames(AtrcPrefix('404-cont-heading'), 'at-m')}>
								{container.headingGroup.subHeading ? (
									<AtrcText
										tag='p'
										className={classnames(
											AtrcPrefix('404-cont-heading-sub-title')
										)}>
										{container.headingGroup.subHeading}
									</AtrcText>
								) : null}
								{container.headingGroup.heading ? (
									<AtrcText
										tag='h3'
										className={classnames(
											AtrcPrefix('404-cont-heading-title')
										)}>
										{container.headingGroup.heading}
									</AtrcText>
								) : null}
							</AtrcWrap>
						) : null}

						{container.title ? (
							<AtrcText
								tag='h2'
								className={classnames(AtrcPrefix('404-cont-title'))}>
								{container.title}
							</AtrcText>
						) : null}
						{container.description ? (
							<AtrcText
								tag='p'
								className={classnames(AtrcPrefix('404-cont-desc'))}>
								{container.description}
							</AtrcText>
						) : null}

						{container.button ? (
							<AtrcButtonGroup className={classnames('at-m')}>
								{container.button.map((item, iDx) => (
									<AtrcButton
										isLink={true}
										hasIcon={true}
										variant={item.variant ? item.variant : null}
										href={item.url}
										target={item.target ? item.target : '__blank'}>
										{item.hasIcon ? <AtrcIconSvg svg={item.icon} /> : ''}
										{item.text}
									</AtrcButton>
								))}
							</AtrcButtonGroup>
						) : null}
					</AtrcWrap>
				</AtrcWrap>
			) : null}
		</AtrcWrap>
	);
};

export default Atrc404Template1;
