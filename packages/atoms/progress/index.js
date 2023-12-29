/*WordPress*/
import { forwardRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { AtrcWrap } from '../index';
import { AtrcIsGradientColor, AtrcIsLinearGradientColor } from '../../utils';

/*Local Components*/
export const AtrcProgressSvgGradientColor = ({ gradient, uniqueId }) => {
	// Extracting the degree value
	if (!gradient.includes('linear') || !gradient.match(/(\d+)deg/)) {
		return null;
	}
	const deg = gradient.match(/(\d+)deg/)[1];

	// Extracting the color stops
	const colorStopRegex =
		/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\s*\)\s*(\d+%)/g;
	const colorStops = [];
	let match;

	while ((match = colorStopRegex.exec(gradient)) !== null) {
		const [, r, g, b, a, offset] = match;
		const colorValues = [r, g, b];

		if (a !== undefined) {
			colorValues.push(a);
		}

		colorStops.push({
			offset,
			color: `rgba(${colorValues.join(', ')})`,
		});
	}

	// Creating the object.
	const gradientObject = {
		deg: `rotate(${deg})`,
		colors: colorStops,
	};

	return (
		<defs>
			<linearGradient
				id={'at-lg-' + uniqueId}
				gradientTransform={`${gradientObject.deg}`}>
				{gradientObject.colors.map((item, index) => (
					<stop
						key={index}
						offset={item.offset}
						stopColor={item.color}
					/>
				))}
			</linearGradient>
		</defs>
	);
};

const AtrcProgress = (props, ref) => {
	const {
		className = '',
		type = '',
		variant = '',
		barColor = '',
		uniqueId = '',
		hasAnimation = '',
		children = '',
		...defaultProps
	} = props;

	if ('cir' === type) {
		return (
			<AtrcWrap
				className={classnames(
					'at-prog',
					'at-prog-cir',
					className,
					variant ? AtrcPrefix('prog') + '-' + variant : ''
				)}
				ref={ref}
				{...defaultProps}>
				<svg
					className='at-svg at-w at-h'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='-1 -1 34 34'>
					{AtrcIsLinearGradientColor(barColor) ? (
						<AtrcProgressSvgGradientColor
							gradient={barColor}
							uniqueId={uniqueId}
						/>
					) : null}
					<circle
						cx='16'
						cy='16'
						r='15.9155'
						className={classnames('at-svg-cir', 'at-prog-cir__trk')}
					/>

					<circle
						cx='16'
						cy='16'
						r='15.9155'
						className={classnames(
							'at-svg-cir',
							'at-prog-cir__bar',
							hasAnimation ? 'at-prog-cir__bar-ani' : null
						)}
					/>
				</svg>
				{children ? (
					<AtrcWrap className='at-prog-cir-txt at-pos'>{children}</AtrcWrap>
				) : null}
			</AtrcWrap>
		);
	}

	return (
		<AtrcWrap
			className={classnames(
				'at-prog',
				'at-prog-hor',
				className,
				variant ? AtrcPrefix('prog') + '-' + variant : ''
			)}
			ref={ref}
			{...defaultProps}>
			<AtrcWrap
				className={classnames(
					'at-prog-bar at-ovf at-h at-w at-trs',
					AtrcIsGradientColor(barColor) ? 'at-bg-img' : 'at-bg-cl'
				)}>
				{children}
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default forwardRef(AtrcProgress);
