/*Attributes Structure
Type Object
{
    type = '',
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    imgFrm ='',
    imgId ='',
    imgUrl ='',
    imgSz ='',
    flipV = '',
    flipH = '',

    w = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    h = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */

/*WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Inbuilt*/
import { AtrcPanelTools, AtrcControlShape } from '../index';

import SvgShapeOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components */
const AtrcControlImgShape = (props) => {
	const {
		label = '',
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
	} = props;

	const { svgDefd = '', svgCust = '', imgId = '', imgUrl = '' } = value;

	const AllTabs = useMemo(() => {
		return [
			{
				name: 'imgShp',
				title: label,
				hasValue: !!(svgDefd || svgCust || imgId || imgUrl),
				onDeselect: () => onChange({}),
			},
		];
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-img-shp'),
				className,
				variant ? AtrcPrefix('ctrl-img-shp') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, function (item, iDx) {
					if ('imgShp' === item) {
						return (
							<AtrcControlShape
								shapeOptionsLabel={__('Mask shape options', 'atrc-prefix-atrc')}
								value={value}
								onChange={onChange}
								definedOptions={SvgShapeOptions}
								shapeType='imgShp'
								allowColor={false}
								key={iDx}
							/>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};

export default AtrcControlImgShape;
