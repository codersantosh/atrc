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

var TwoColumnsOptionsCloned = (0, _lodash.cloneDeep)(_options.TwoColumnsOptions);
TwoColumnsOptionsCloned.push({
  label: (0, _i18n.__)('All full width', 'atrc-prefix-atrc'),
  value: '12-12',
  icon: function icon() {
    return /*#__PURE__*/React.createElement("svg", {
      className: (0, _classnames.default)('at-svg', 'at-w', 'at-h'),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 68 68"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4,35.5H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V37.5A2,2,0,0,1,4,35.5Zm60,2H4V64H64Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4,2H64a2,2,0,0,1,2,2V30.5a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2ZM64,4H4V30.5H64Z"
    }));
  }
});
TwoColumnsOptionsCloned.push(_options.CustomColumnOption);

/* Local */
var TwoColumnsLayout = function TwoColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var NewExistingValue = (0, _element.useMemo)(function () {
    if (!value) {
      return {
        selectBtn: value,
        sliderVal: [50],
        customWidth: '50-50'
      };
    }
    return (0, _options.CustomColumnsExistingValue)({
      value: value,
      colNum: 2
    });
  }, [value]);
  var setColumn = function setColumn(newVal) {
    onChange((0, _options.NewValWithCustom)({
      newVal: newVal,
      NewExistingValue: NewExistingValue
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    label: (0, _i18n.__)('Two columns layout', 'atrc-prefix-atrc'),
    value: NewExistingValue.selectBtn,
    options: TwoColumnsOptionsCloned,
    onChange: setColumn,
    allowReset: false
  }), 'cust' === NewExistingValue.selectBtn ? /*#__PURE__*/React.createElement(_controlCompoundSlider.default, {
    values: NewExistingValue.sliderVal,
    onChange: setColumn
  }) : null);
};
var _default = exports.default = TwoColumnsLayout;
//# sourceMappingURL=two-columns.js.map