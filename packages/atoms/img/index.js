/*Library*/
import classnames from 'classnames';

/*Molecules*/
import AtrcFigure from '../../molecules/figure';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcImgTag = (props) => {
	const { className = '', variant = '', srcset = '', ...defaultProps } = props;
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<img
			className={classnames(
				AtrcPrefix('img'),
				className,
				variant ? AtrcPrefix('img') + '-' + variant : ''
			)}
			srcSet={srcset}
			{...defaultProps}
		/>
	);
};

const AtrcImg = (props) => {
	const { wrapfigure = true, figureProps = {}, ...imgProps } = props;

	if (!imgProps.src) {
		return null;
	}
	if (wrapfigure) {
		return (
			<AtrcFigure
				{...figureProps}
				variant='img'>
				<AtrcImgTag {...imgProps} />
			</AtrcFigure>
		);
	}
	return <AtrcImgTag {...imgProps} />;
};
export default AtrcImg;
