import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Organisms */
import AtrcSidebar from '../../organisms/sidebar';
import AtrcContainer from '../../organisms/container';
import AtrcRow from '../../organisms/row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtColumn = (props) => {
	const {
		contentSidebar = false /*right sidebar, default is left sidebar*/,
		renderSidebar = null,
		renderContent = null,
		sidebarProps = {},
		contentProps = {},
	} = props;

	const { sidebarCol = '', ...sidebarDefaultProps } = sidebarProps;

	const { contentCol = '', ...contentDefaultProps } = contentProps;

	if (!contentSidebar) {
		return (
			<>
				<AtrcSidebar
					{...sidebarDefaultProps}
					className={classnames(
						sidebarCol || 'at-col-3',
						sidebarDefaultProps.className || ''
					)}>
					{renderSidebar}
				</AtrcSidebar>
				<AtrcWrap
					tag='section'
					{...contentDefaultProps}
					className={classnames(
						contentCol || 'at-col-9',
						contentDefaultProps.className || ''
					)}>
					{renderContent}
				</AtrcWrap>
			</>
		);
	}

	return (
		<>
			<AtrcWrap
				tag='section'
				{...contentDefaultProps}
				className={classnames(
					contentCol || 'at-col-9',
					contentDefaultProps.className || ''
				)}>
				{renderContent}
			</AtrcWrap>
			<AtrcSidebar
				{...sidebarDefaultProps}
				className={classnames(
					sidebarCol || 'at-col-3',
					sidebarDefaultProps.className || ''
				)}>
				{renderSidebar}
			</AtrcSidebar>
		</>
	);
};

const AtRow = (props) => {
	const { rowProps = {}, ...defaultProps } = props;
	return (
		<AtrcRow {...rowProps}>
			<AtColumn {...defaultProps} />
		</AtrcRow>
	);
};

const AtrcWireFrameSidebarContent = (props) => {
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
					AtrcPrefix('cont-sdbar-wrp'),

					className,
					variant ? AtrcPrefix('cont-sdbar-wrp') + '-' + variant : ''
				)}
				{...wrapDefaultProps}>
				<AtRow {...defaultProps} />
			</WrapTag>
		);
	}
	return <AtRow {...defaultProps} />;
};

export default AtrcWireFrameSidebarContent;
