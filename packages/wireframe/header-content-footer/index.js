import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Organisms */
import AtrcHeader from '../../organisms/header';

import AtrcContent from '../../organisms/content';

import AtrcContainer from '../../organisms/container';

import AtrcFooter from '../../organisms/footer';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const Parts = (props) => {
	const {
		renderHeader = null,
		headerProps = {},

		renderContent = null,
		contentProps = {},

		renderFooter = null,
		footerProps = {},
	} = props;

	return (
		<>
			{renderHeader ? (
				<AtrcHeader {...headerProps}>{renderHeader}</AtrcHeader>
			) : null}

			{renderContent ? (
				<AtrcContent {...contentProps}>{renderContent}</AtrcContent>
			) : null}

			{renderFooter ? (
				<AtrcFooter {...footerProps}>{renderFooter}</AtrcFooter>
			) : null}
		</>
	);
};

const AtrcWireFrameHeaderContentFooter = (props) => {
	const { wrapProps = null, ...defaultProps } = props;

	if (wrapProps) {
		const {
			allowContainer = false,
			className = '',
			variant = '',
			...wrapDefaultProps
		} = wrapProps;

		const WrapTag = allowContainer ? AtrcContainer : AtrcWrap;

		return (
			<WrapTag
				className={classnames(
					AtrcPrefix('hdr-cont-ftr-wrp'),
					className,
					variant ? AtrcPrefix('hdr-cont-ftr-wrp') + '-' + variant : ''
				)}
				{...wrapDefaultProps}>
				<Parts {...defaultProps} />
			</WrapTag>
		);
	}

	return <Parts {...defaultProps} />;
};

export default AtrcWireFrameHeaderContentFooter;
