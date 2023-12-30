/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/* Inbuilt */
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcWord from '../../../atoms/word';
import AtrcHr from '../../../atoms/hr';

/* Local */
const TitleButton = (props) => {
	const {
		title,
		btnProps = {},
		resetBtnProps = {},
		className = '',
		allowHeader = '',
		...defaultProps
	} = props;

	return (
		<>
			<AtrcWrap
				className={classnames(
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-p',
					className ? className : ''
				)}
				{...defaultProps}>
				<AtrcWord
					tag='h5'
					className={classnames('at-m')}>
					{title}
				</AtrcWord>

				<AtrcWrap>
					<AtrcButton
						variant='primary'
						{...btnProps}
					/>
					{!isEmpty(resetBtnProps) && (
						<AtrcResetButtonIcon
							{...resetBtnProps}
							value={true}
						/>
					)}
				</AtrcWrap>
			</AtrcWrap>

			<AtrcHr className={classnames('at-m')} />
		</>
	);
};

export default TitleButton;
