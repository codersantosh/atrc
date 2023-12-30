/*Library*/
import classnames from 'classnames';
import { BsArrowLeft, BsEmojiFrown } from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcWord from '../../atoms/word';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const Atrc404 = (props) => {
	const {
		className = '',
		variant = '',
		label,
		right = null,
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('404'),
				className,
				variant ? AtrcPrefix('404') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcWrap className='at-ctnr'>
				<AtrcWrap
					className={classnames(
						'at-flx',
						'at-flx-col',
						'at-jfy-cont-ctr',
						'at-al-itm-ctr',
						AtrcPrefix('404-cont')
					)}>
					<AtrcWord
						tag='h3'
						className={classnames(AtrcPrefix('m-0'))}>
						Oops!
					</AtrcWord>
					<AtrcWrap className={classnames('at-flx', 'at-al-itm-ctr')}>
						<AtrcWord
							tag='h1'
							className={classnames(AtrcPrefix('m-0'))}>
							4
						</AtrcWord>
						<AtrcIcon
							className={classnames(
								AtrcPrefix('mr-5'),
								AtrcPrefix('ml-5'),
								AtrcPrefix('404-icon')
							)}
							type='bootstrap'
							icon={BsEmojiFrown}
						/>
						<AtrcWord
							tag='h1'
							className={classnames(AtrcPrefix('m-0'))}>
							4
						</AtrcWord>
					</AtrcWrap>
					<AtrcWord
						tag='h3'
						variant='txt-error'
						className={classnames(AtrcPrefix('m-0'))}>
						Error Page
					</AtrcWord>
					<AtrcWord tag='h2'>
						We can't seem to find the page you're looking for
					</AtrcWord>
					<AtrcButton
						variant='primary'
						className={classnames(
							'at-flx',
							'at-al-itm-ctr',
							AtrcPrefix('pt-15'),
							AtrcPrefix('pb-15'),
							AtrcPrefix('pl-40'),
							AtrcPrefix('pr-40')
						)}>
						<AtrcIcon
							className={classnames(AtrcPrefix('mr-5'))}
							type='bootstrap'
							icon={BsArrowLeft}
						/>
						Back
					</AtrcButton>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default Atrc404;
