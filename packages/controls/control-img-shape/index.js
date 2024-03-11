/*Attributes Structure
Type Object
{
    type: '',
    svgFrm: '',
    svgDefd: '',
    svgCust: '',
    imgFrm: '',
    imgId: '',
    imgUrl: '',
    imgSz: '',
    flipV: '',
    flipH: '',

    w: '',
    smW: '',
    mdW: '',
    lgW: '',
    xlW: '',
    xxlW: '',
    h: '',
    smH: '',
    mdH: '',
    lgH: '',
    xlH: '',
    xxlH: '',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';

/* Controls */
import AtrcControlShape from '../control-shape';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SvgShapeOptions from './options';

/*Local */
const AtrcControlImgShape = (props) => {
	const {
		label = __('Image shape', 'atrc-prefix-atrc'),
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
	} = props;

	const { svgDefd = '', svgCust = '', imgId = '', imgUrl = '' } = value;

	const AllTabs = [
		{
			name: 'imgShp',
			title: label,
			hasValue: !!(svgDefd || svgCust || imgId || imgUrl),
			onDeselect: () => onChange({}),
		},
	];

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
								definedOptions={SvgShapeOptions()}
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
