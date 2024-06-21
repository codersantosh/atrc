import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';

/* Organisms */

/*  Molecules */

/* Controls */

/* Organisms */
import AtrcSidebar from '../../../organisms/sidebar';
import AtrcRow from '../../../organisms/row';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/* Inbuild */
import AtrcListFilterTemplate1 from '../../components/list-filter/template-1';

/*Local*/
const Parts = (props) => {
	const {
		renderSidebar = null,
		sidebarProps = {},
		renderHeader = null,
		renderContent = null,
		renderFooter = null,
		contentProps = {},
		contentWrapProps = {},
	} = props;

	let toggleFilter = true;
	return (
		<>
			{renderSidebar ? (
				<AtrcSidebar
					className='at-col-1'
					{...sidebarProps}>
					{renderSidebar}
				</AtrcSidebar>
			) : null}
			<AtrcWrap
				tag='div'
				className='at-col-11'
				{...contentProps}>
				<AtrcWrap
					className={classnames(AtrcPrefix('bg-white'), 'at-bg-cl')}
					{...contentWrapProps}>
					{renderHeader ? <AtrcListFilterTemplate1 {...renderHeader} /> : null}

					{renderContent ? renderContent : null}

					{renderFooter ? <AtrcListFilterTemplate1 {...renderFooter} /> : null}
				</AtrcWrap>
			</AtrcWrap>
		</>
	);
};

const AtrcPageListTemplate1 = (props) => {
	const {
		hasRow = true,
		rowProps = {},
		className = '',
		variant = '',
		...defaultProps
	} = props;

	if (hasRow) {
		return (
			<AtrcRow
				className={classnames(
					AtrcPrefix('page-ls-tpl-1'),
					className,
					variant ? AtrcPrefix('page-ls-tpl-1') + '-' + variant : ''
				)}
				{...rowProps}>
				<Parts {...defaultProps} />
			</AtrcRow>
		);
	}
	return <Parts {...defaultProps} />;
};

export default AtrcPageListTemplate1;
