import classnames from 'classnames';
import {
	AtrcButton,
	AtrcHr,
	AtrcResetButtonIcon,
	AtrcWord,
	AtrcWrap,
} from '../../../atoms';
import { isEmpty } from 'lodash';

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
