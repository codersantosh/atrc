/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
const AtrcPreTemplate1 = (props) => {
	const { className = '', children, content, ...defaultProps } = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('pre-tpl-1'),
				className,
				'at-p',
				'at-bdr',
				'at-bg-img'
			)}
			{...defaultProps}>
			<AtrcWrap
				tag='pre'
				className='at-pre'>
				{children || content}
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default AtrcPreTemplate1;
