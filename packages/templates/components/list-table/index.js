/* Library */
import classnames from 'classnames';

/* Inbuilt */
import AtrcTh from '../../../atoms/th';
import AtrcTbody from './../../../atoms/tbody';
import AtrcThead from './../../../atoms/thead';
import AtrcTr from './../../../atoms/tr';

import AtrcTable from './../../../molecules/table';

import AtrcPrefix from '../../../prefix-vars';

/* Local */
const ListTable = (props) => {
	const { tHeadLabels, renderTbody, ...defaultProps } = props;

	return (
		<AtrcTable {...defaultProps}>
			{tHeadLabels && (
				<AtrcThead
					className={classnames(AtrcPrefix('bg-primary-light'), 'at-bg-cl')}>
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
			<AtrcTbody>{renderTbody}</AtrcTbody>
		</AtrcTable>
	);
};

export default ListTable;
