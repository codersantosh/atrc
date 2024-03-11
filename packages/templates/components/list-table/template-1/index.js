/* Library */
import classnames from 'classnames';

/* Molecules */
import AtrcTable from '../../../../molecules/table';
import AtrcTh from '../../../../molecules/table/th';
import AtrcTbody from '../../../../molecules/table/tbody';
import AtrcThead from '../../../../molecules/table/thead';
import AtrcTr from '../../../../molecules/table/tr';

/* Prefix */

/* Local */
const AtrcListTableTemplate1 = (props) => {
	const { tHeadLabels, renderTbody, ...defaultProps } = props;

	return (
		<AtrcTable {...defaultProps}>
			{tHeadLabels && (
				<AtrcThead className={classnames('at-bg-cl')}>
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

export default AtrcListTableTemplate1;
