"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _controlShape = _interopRequireDefault(require("../control-shape"));
var _options = _interopRequireDefault(require("./options"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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

/*Library*/

/*Inbuilt*/

/*Inbuilt*/

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
  var AllTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'imgShp',
      title: label,
      hasValue: !!(svgDefd || svgCust || imgId || imgUrl),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-img-shp'), className, variant ? (0, _prefixVars.default)('ctrl-img-shp') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (item, iDx) {
      if ('imgShp' === item) {
        return /*#__PURE__*/React.createElement(_controlShape.default, {
          shapeOptionsLabel: (0, _i18n.__)('Mask shape options', 'atrc-prefix-atrc'),
          value: value,
          onChange: onChange,
          definedOptions: _options.default,
          shapeType: "imgShp",
          allowColor: false,
          key: iDx
        });
      }
      return null;
    });
  });
};
var _default = exports.default = AtrcControlImgShape;
//# sourceMappingURL=index.js.map