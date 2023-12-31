"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _data = require("@wordpress/data");
var _blockEditor = require("@wordpress/block-editor");
var _lodash = require("lodash");
var _classnames = _interopRequireDefault(require("classnames"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt*/
/* Local Components and Functions*/
function AtrcControlSelectImgSize(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)('Image size', 'atrc-prefix-atrc') : _props$label,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? true : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? 0 : _props$optionNoneValu,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps;
  var _useSelect = (0, _data.useSelect)(function (select) {
      var settings = select(_blockEditor.store).getSettings();
      return {
        imageSizes: settings.imageSizes
      };
    }, []),
    imageSizes = _useSelect.imageSizes;
  var imageSizesOptions = (0, _element.useMemo)(function () {
    if (imageSizes) {
      return (0, _lodash.map)(imageSizes, function (_ref) {
        var name = _ref.name,
          slug = _ref.slug;
        return {
          value: slug,
          label: name
        };
      });
    }
    return [];
  }, [imageSizes]);
  if (showOptionNone) {
    imageSizesOptions = [{
      value: optionNoneValue,
      label: (0, _i18n.__)('Select', 'atrc-prefix-atrc')
    }].concat(_toConsumableArray(imageSizesOptions));
  }
  return /*#__PURE__*/React.createElement(_select.default, {
    label: label,
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-img-sz'), className, variant ? (0, _prefixVars.default)('ctrl-select-img-sz') + '-' + variant : ''),
    value: value,
    options: imageSizesOptions,
    onChange: onChange,
    wrapProps: wrapProps
  });
}
var _default = exports.default = AtrcControlSelectImgSize;
//# sourceMappingURL=index.js.map