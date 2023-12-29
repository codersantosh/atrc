/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../wrap';

/*Local Components*/
const AtrcFile = (props) => {
	const { src = '', variant = '', className = '', ...defaultProps } = props;

	if (!src) {
		return null;
	}

	return (
		<AtrcWrap>
			<AtrcWrap className={classnames('thumbnail', className)}>
				<AtrcWrap className='centered'>
					<img
						src='http://localhost/gutentor/wp-includes/images/media/archive.png'
						className='icon'
						draggable='false'
						alt=''
					/>
				</AtrcWrap>
				<AtrcWrap className='filename'>
					<AtrcWord>abc.zip</AtrcWord>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcWrap>
	);
};
export default AtrcFile;
