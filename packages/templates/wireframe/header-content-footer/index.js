/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../../atoms/wrap';

import AtrcHeader from '../../../organisms/header';

import AtrcFooter from '../../../organisms/footer';

/*Local*/
const ContentCol = ({ contentColProps, renderContent, allowContentCol }) => {
	if (allowContentCol) {
		return (
			<AtrcWrap
				{...contentColProps}
				className={classnames('at-col-12', contentColProps.className || '')}>
				{renderContent}
			</AtrcWrap>
		);
	}

	return <>{renderContent}</>;
};

const Parts = (props) => {
	const {
		renderHeader = null,
		renderContent = null,
		renderFooter = null,
		headerRowProps = {},
		headerColProps = {},
		contentRowProps = {},
		contentColProps = {},
		footerRowProps = {},
		footerColProps = {},
		allowHeaderRow = true,
		allowHeaderCol = true,
		allowContentRow = true,
		allowContentCol = true,
		allowFooterRow = true,
		allowFooterCol = true,
	} = props;
	return (
		<>
			{renderHeader ? (
				<AtrcHeader
					{...headerRowProps}
					className={classnames(
						allowHeaderRow ? 'at-row' : '',
						headerRowProps.className || ''
					)}>
					{allowHeaderCol ? (
						<AtrcWrap
							{...headerColProps}
							className={classnames(
								'at-col-12',
								headerColProps.className || ''
							)}>
							{renderHeader}
						</AtrcWrap>
					) : (
						<>{renderHeader}</>
					)}
				</AtrcHeader>
			) : null}
			{renderContent ? (
				allowContentRow ? (
					<AtrcWrap
						tag='section'
						{...contentRowProps}
						className={classnames('at-row', contentRowProps.className || '')}>
						<ContentCol
							contentColProps={contentColProps}
							renderContent={renderContent}
							allowContentCol={allowContentCol}
						/>
					</AtrcWrap>
				) : (
					<ContentCol
						contentColProps={contentColProps}
						renderContent={renderContent}
						allowContentCol={allowContentCol}
					/>
				)
			) : null}
			{renderFooter ? (
				<AtrcFooter
					{...footerRowProps}
					className={classnames(
						allowFooterRow ? 'at-row' : '',
						footerRowProps.className || ''
					)}>
					{allowFooterCol ? (
						<AtrcWrap
							{...footerColProps}
							className={classnames(
								'at-col-12',
								footerColProps.className || ''
							)}>
							{renderFooter}
						</AtrcWrap>
					) : (
						<>{renderFooter}</>
					)}
				</AtrcFooter>
			) : null}
		</>
	);
};
const AtrcWireFrameHeaderContentFooter = (props) => {
	const { wrapProps = null, ...defaultProps } = props;

	if (wrapProps) {
		return (
			<AtrcWrap {...wrapProps}>
				<Parts {...defaultProps} />
			</AtrcWrap>
		);
	}

	return <Parts {...defaultProps} />;
};

export default AtrcWireFrameHeaderContentFooter;
