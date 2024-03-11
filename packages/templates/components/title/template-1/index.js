/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import AtrcHr from '../../../../atoms/hr';

/* Local */
const AtrcTitleTemplate1 = (props) => {
	const { title, buttons = [], className = '', ...defaultProps } = props;
	return (
		<>
			<AtrcWrap
				className={classnames('at-p', className ? className : '')}
				{...defaultProps}>
				<AtrcText
					tag='h5'
					className={classnames('at-m')}>
					{title}
				</AtrcText>
			</AtrcWrap>

			<AtrcHr className={classnames('at-m')} />
		</>
	);
};

export default AtrcTitleTemplate1;
