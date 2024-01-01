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
import AtrcPanelTools from '../panel-tools';
import AtrcControlShape from '../control-shape';
import SvgShapeOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components */
var AtrcControlImgShape = function AtrcControlImgShape(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$svgDefd = value.svgDefd,
    svgDefd = _value$svgDefd === void 0 ? '' : _value$svgDefd,
    _value$svgCust = value.svgCust,
    svgCust = _value$svgCust === void 0 ? '' : _value$svgCust,
    _value$imgId = value.imgId,
    imgId = _value$imgId === void 0 ? '' : _value$imgId,
    _value$imgUrl = value.imgUrl,
    imgUrl = _value$imgUrl === void 0 ? '' : _value$imgUrl;
  var AllTabs = useMemo(function () {
    return [{
      name: 'imgShp',
      title: label,
      hasValue: !!(svgDefd || svgCust || imgId || imgUrl),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-img-shp'), className, variant ? AtrcPrefix('ctrl-img-shp') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('imgShp' === item) {
        return /*#__PURE__*/React.createElement(AtrcControlShape, {
          shapeOptionsLabel: __('Mask shape options', 'atrc-prefix-atrc'),
          value: value,
          onChange: onChange,
          definedOptions: SvgShapeOptions(),
          shapeType: "imgShp",
          allowColor: false,
          key: iDx
        });
      }
      return null;
    });
  });
};
export default AtrcControlImgShape;
//# sourceMappingURL=index.js.map