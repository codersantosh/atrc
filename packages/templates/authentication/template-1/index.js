import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcButton from '../../../atoms/button';
import AtrcImg from '../../../atoms/img';
import AtrcLink from '../../../atoms/link';
import AtrcWrap from '../../../atoms/wrap';

/*Molecules*/
import AtrcForm from '../../../molecules/form';

/*Controls*/
import AtrcControlText from '../../../controls/control-text';
import AtrcControlCheckbox from '../../../controls/control-checkbox';
import AtrcControlSelect from '../../../controls/control-select';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const getFlxPosClasses = (pos) => {
	let flxClasses = 'at-form-pos at-flx at-h ';
	if ('top left' === pos) {
		flxClasses += 'at-al-itm-st at-jfy-cont-st';
	}
	if ('top center' === pos) {
		flxClasses += 'at-al-itm-st at-jfy-cont-ctr';
	}
	if ('top right' === pos) {
		flxClasses += 'at-al-itm-st at-jfy-cont-end';
	}
	if ('center left' === pos) {
		flxClasses += 'at-al-itm-ctr at-jfy-cont-st';
	}
	if ('center center' === pos) {
		flxClasses += 'at-al-itm-ctr at-jfy-cont-ctr';
	}
	if ('center right' === pos) {
		flxClasses += 'at-al-itm-ctr at-jfy-cont-end';
	}
	if ('bottom left' === pos) {
		flxClasses += 'at-al-itm-end at-jfy-cont-st';
	}
	if ('bottom center' === pos) {
		flxClasses += 'at-al-itm-end at-jfy-cont-ctr';
	}
	if ('bottom right' === pos) {
		flxClasses += 'at-al-itm-end at-jfy-cont-end';
	}
	return flxClasses;
};

const AtrcAuthenticationTemplate1 = (props) => {
	const {
		wrapProps = {},
		className = '',
		variant = '',
		type = 'login',
		position = 'center center',
		logo = {},
		logoWrapProps = {},
		formProps = {},
		fields = [],
		submit = {},
		checkbox,
		bottomLinks = [],
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			{...wrapProps}
			className={classnames(
				wrapProps.className || '',
				getFlxPosClasses(position)
			)}>
			<AtrcWrap
				className={classnames(
					AtrcPrefix('form-wrp'),
					AtrcPrefix('authentication-tpl-1'),
					'at-w',
					className,
					AtrcPrefix(type),
					variant ? AtrcPrefix('authentication-tpl-1') + '-' + variant : ''
				)}
				{...defaultProps}>
				{logo && logo.src ? (
					<AtrcWrap
						className={classnames('at-flx', 'at-jfy-cont-ctr')}
						{...logoWrapProps}>
						<AtrcImg {...logo} />
					</AtrcWrap>
				) : null}
				<AtrcForm
					className={classnames(
						'at-bg-cl',
						'at-bdr',
						'at-p',
						'at-m',
						'at-flx',
						'at-gap',
						'at-flx-col'
					)}
					{...formProps}>
					{fields && fields.length ? (
						<>
							{fields.map((item, iDx) => {
								const { fieldType = '', ...itemProps } = item;
								if (itemProps.render) {
									return itemProps.render;
								}
								switch (fieldType) {
									case 'select':
										return (
											<AtrcControlSelect
												key={`authentication-tpl-1-field-${iDx}`}
												allowReset={false}
												{...itemProps}
											/>
										);
										break;

									default:
										return (
											<AtrcControlText
												key={`authentication-tpl-1-field-${iDx}`}
												allowReset={false}
												{...itemProps}
											/>
										);
								}
							})}
						</>
					) : null}
					{checkbox && submit ? (
						<AtrcWrap
							className={classnames(
								'at-flx',
								'at-al-itm-ctr',
								'at-jfy-cont-btw'
							)}>
							<AtrcControlCheckbox {...checkbox} />
							<AtrcButton {...submit} />
						</AtrcWrap>
					) : (
						<AtrcButton {...submit} />
					)}
				</AtrcForm>
				{bottomLinks && bottomLinks.length ? (
					<AtrcWrap
						className={classnames(
							'at-flx',
							'at-al-itm-ctr',
							'at-jfy-cont-ctr',
							'at-gap'
						)}>
						<>
							{bottomLinks.map((item, iDx) => (
								<AtrcLink
									key={`authentication-tpl-1-link-${iDx}`}
									{...item}
								/>
							))}
						</>
					</AtrcWrap>
				) : null}
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default AtrcAuthenticationTemplate1;
