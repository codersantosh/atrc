import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcThead from './thead';
import AtrcTbody from './tbody';
import AtrcTfoot from './tfoot';
import AtrcTr from './tr';
import AtrcTh from './th';

/*Local*/
export const AtrcTableTag = (props) => {
	const {
		className = '',
		variant = '',
		isRounded = false,
		isBordered = false,
		children,
		...defaultProps
	} = props;

	return (
		<table
			className={classnames(
				AtrcPrefix('tbl'),
				'at-w',
				className,
				isBordered ? AtrcPrefix('tbl-bordered') + ' at-bdr' : '',
				isRounded ? AtrcPrefix('tbl-rounded') + ' at-bdr-rad' : '',
				variant ? AtrcPrefix('tbl') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</table>
	);
};

const AtrcTable = (props) => {
	const {
		tHeadLabels,
		renderTbody,
		renderTFoot,
		tHeadProps = {},
		tBodyProps = {},
		tFootProps = {},
		...defaultProps
	} = props;

	return (
		<AtrcTableTag {...defaultProps}>
			{tHeadLabels && (
				<AtrcThead
					className={classnames('at-bg-cl')}
					{...tHeadProps}>
					<AtrcTr>
						{tHeadLabels &&
							tHeadLabels.map(function (label, iDx) {
								if ('__blank' === label) {
									return (
										<AtrcTh
											key={iDx}
											className={classnames('at-p', 'at-txt-al')}
										/>
									);
								}
								return (
									<AtrcTh
										key={iDx}
										className={classnames('at-p', 'at-txt-al')}>
										{label}
									</AtrcTh>
								);
							})}
					</AtrcTr>
				</AtrcThead>
			)}
			<AtrcTbody {...tBodyProps}>{renderTbody}</AtrcTbody>
			{renderTFoot ? (
				<AtrcTfoot {...tFootProps}>{renderTFoot}</AtrcTfoot>
			) : null}
		</AtrcTableTag>
	);
};

export default AtrcTable;
