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

var FiveColumnsOptionsCloned = (0, _lodash.cloneDeep)(_options.FiveColumnsOptions);
FiveColumnsOptionsCloned.push({
  label: (0, _i18n.__)('All full width', 'atrc-prefix-atrc'),
  value: '12-12-12-12-12',
  icon: function icon() {
    return /*#__PURE__*/React.createElement("svg", {
      className: (0, _classnames.default)('at-svg', 'at-w', 'at-h'),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 68 68"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M64,12.4H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,12.4ZM4,4H4v6.4H64V4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64,25.8H4a2,2,0,0,1-2-2V17.4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,25.8ZM4,17.4H4v6.4H64V17.4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64,39.2H4a2,2,0,0,1-2-2V30.8a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,39.2ZM4,30.8H4v6.4H64V30.8Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64,52.6H4a2,2,0,0,1-2-2V44.2a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,52.6ZM4,44.2H4v6.4H64V44.2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64,66H4a2,2,0,0,1-2-2V57.6a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,57.6H4V64H64V57.6Z"
    }));
  }
});
FiveColumnsOptionsCloned.push(_options.CustomColumnOption);

/* Local */
var FiveColumnsLayout = function FiveColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var NewExistingValue = (0, _element.useMemo)(function () {
    if (!value) {
      return {
        selectBtn: value,
        sliderVal: [20, 40, 60, 80],
        customWidth: '20-20-20-20-20'
      };
    }
    return (0, _options.CustomColumnsExistingValue)({
      value: value,
      colNum: 5
    });
  }, [value]);
  var setColumn = function setColumn(newVal) {
    onChange((0, _options.NewValWithCustom)({
      newVal: newVal,
      NewExistingValue: NewExistingValue
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    label: (0, _i18n.__)('Five columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: FiveColumnsOptionsCloned,
    onChange: setColumn,
    allowReset: false
  }), 'cust' === NewExistingValue.selectBtn ? /*#__PURE__*/React.createElement(_controlCompoundSlider.default, {
    values: NewExistingValue.sliderVal,
    onChange: setColumn
  }) : null);
};
var _default = exports.default = FiveColumnsLayout;
//# sourceMappingURL=five-columns.js.map