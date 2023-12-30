/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../../atoms/wrap';

/*Prefix*/
import AtrcSidebar from '../../../organisms/sidebar';

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
						sidebarCol || 'at-col-1',
						sidebarDefaultProps.className || ''
					)}>
					{renderSidebar}
				</AtrcSidebar>
				<AtrcWrap
					tag='section'
					{...contentDefaultProps}
					className={classnames(
						contentCol || 'at-col-11',
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
					contentCol || 'at-col-11',
					contentDefaultProps.className || ''
				)}>
				{renderContent}
			</AtrcWrap>
			<AtrcSidebar
				{...sidebarDefaultProps}
				className={classnames(
					sidebarCol || 'at-col-1',
					sidebarDefaultProps.className || ''
				)}>
				{renderSidebar}
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

const AtrcWireFrameSidebarContent = (props) => {
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

export default AtrcWireFrameSidebarContent;
