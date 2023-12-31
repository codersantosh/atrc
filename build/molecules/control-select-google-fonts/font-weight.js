"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _lodash = require("lodash");
var _select = _interopRequireDefault(require("../../atoms/select"));
var _excluded = ["fonts", "family", "isMulti"];
/*WordPress*/
/* Library */
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var AtrcControlSelectGoogleFontsWeight = function AtrcControlSelectGoogleFontsWeight(props) {
  var _props$fonts = props.fonts,
    fonts = _props$fonts === void 0 ? [] : _props$fonts,
    _props$family = props.family,
    family = _props$family === void 0 ? '' : _props$family,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? true : _props$isMulti,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var options = (0, _element.useMemo)(function () {
    if (family) {
      var selectedFamily = fonts.find(function (item) {
        return item.family === family;
      });
      if (selectedFamily && selectedFamily.variants) {
        return (0, _lodash.reduce)(selectedFamily.variants, function (accumulator, currentValue, currentKey) {
          var item = null;
          if (currentValue.includes('regular')) {
            item = 400;
          } else {
            item = parseInt(currentValue);
          }
          if (item) {
            accumulator.push({
              label: String(item),
              value: String(item)
            });
          }
          return (0, _lodash.uniqBy)(accumulator, function (item) {
            return item.value;
          });
        }, []);
      }
    }
    return [];
  }, [family]);
  return /*#__PURE__*/React.createElement(_select.default, _extends({}, defaultProps, {
    options: options,
    isMulti: isMulti,
    multiValType: "array"
  }));
};
var _default = exports.default = AtrcControlSelectGoogleFontsWeight;
//# sourceMappingURL=font-weight.js.map