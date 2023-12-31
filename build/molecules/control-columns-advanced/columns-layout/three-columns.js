"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _controlSelectButton = _interopRequireDefault(require("../../control-select-button"));
var _controlCompoundSlider = _interopRequireDefault(require("../../control-compound-slider"));
var _options = require("../options");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WordPress */

/* Library */

/* Inbuilt */

var ThreeColumnsOptionsCloned = (0, _lodash.cloneDeep)(_options.ThreeColumnsOptions);
ThreeColumnsOptionsCloned.push({
  label: (0, _i18n.__)('All full width', 'atrc-prefix-atrc'),
  value: '12-12-12',
  icon: function icon() {
    return /*#__PURE__*/React.createElement("svg", {
      className: (0, _classnames.default)('at-svg', 'at-w', 'at-h'),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 68 68"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M64,21.3H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2V19.3A2,2,0,0,1,64,21.3ZM4,4H4V19.3H64V4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64,43.7H4a2,2,0,0,1-2-2V26.3a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V41.7A2,2,0,0,1,64,43.7ZM4,26.3H4V41.7H64V26.3Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64,66H4a2,2,0,0,1-2-2V48.7a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,48.7H4V64H64V48.7Z"
    }));
  }
});
ThreeColumnsOptionsCloned.push(_options.CustomColumnOption);

/* Local */
var ThreeColumnsLayout = function ThreeColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var NewExistingValue = (0, _element.useMemo)(function () {
    if (!value) {
      return {
        selectBtn: value,
        sliderVal: [33.33, 66.66],
        customWidth: '33.33-33.33-33.33'
      };
    }
    return (0, _options.CustomColumnsExistingValue)({
      value: value,
      colNum: 3
    });
  }, [value]);
  var setColumn = function setColumn(newVal) {
    onChange((0, _options.NewValWithCustom)({
      newVal: newVal,
      NewExistingValue: NewExistingValue
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    label: (0, _i18n.__)('Three columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: ThreeColumnsOptionsCloned,
    onChange: setColumn,
    allowReset: false
  }), 'cust' === NewExistingValue.selectBtn ? /*#__PURE__*/React.createElement(_controlCompoundSlider.default, {
    values: NewExistingValue.sliderVal,
    onChange: setColumn
  }) : null);
};
var _default = exports.default = ThreeColumnsLayout;
//# sourceMappingURL=three-columns.js.map