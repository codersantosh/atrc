import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Organisms*/
import AtrcSidebar from '../../organisms/sidebar';

/*Local*/
const AtColumn = (props) => {
	const {
		renderSidebarLeft = null,
		renderSidebarRight = null,
		renderContent = null,
		columns = {},
		sidebarLeftProps = {},
		sidebarRightProps = {},
		contentProps = {},
	} = props;

	const { contentCol = '', ...contentDefaultProps } = contentProps;

	return (
		<>
			<AtrcSidebar
				{...sidebarLeftProps}
				className={classnames(
					columns.left || 'at-col-3',
					sidebarLeftProps.className || ''
				)}>
				{renderSidebarLeft}
			</AtrcSidebar>
			<AtrcWrap
				tag='section'
				{...contentDefaultProps}
				className={classnames(
					columns.content || 'at-col-6',
					contentDefaultProps.className || ''
				)}>
				{renderContent}
			</AtrcWrap>
			<AtrcSidebar
				{...sidebarRightProps}
				className={classnames(
					columns.right || 'at-col-3',
					sidebarRightProps.className || ''
				)}>
				{renderSidebarRight}
			</AtrcSidebar>
		</>
	);
};

const AtRow = (props) => {
	const { allowRow = true, rowProps = {}, ...defaultProps } = props;
	if (allowRow) {
		const { className = '', ...rowDefaultProps } = rowProps;

		return (
			<AtrcWrap
				className={classnames('at-row', className)}
				{...rowDefaultProps}>
				<AtColumn {...defaultProps} />
			</AtrcWrap>
		);
	}

	return <AtColumn {...defaultProps} />;
};

const AtrcWireFrameSidebarContentSidebar = (props) => {
	const { wrapProps = null, ...defaultProps } = props;

	if (wrapProps) {
		return (
			<AtrcWrap {...wrapProps}>
				<AtRow {...defaultProps} />
			</AtrcWrap>
		);
	}
	return <AtRow {...defaultProps} />;
};

export default AtrcWireFrameSidebarContentSidebar;
