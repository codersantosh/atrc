import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Options*/
var JustifyContentOptions = function JustifyContentOptions() {
  return [{
    label: __('Justify content start', 'atrc-prefix-atrc'),
    value: 'st',
    icon: function icon(_ref) {
      var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg at-w at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64-67v-827h73v827H64Zm459-217v-393h113v393H523Zm-240 0v-393h113v393H283Z"
      }));
    }
  }, {
    label: __('Justify content end', 'atrc-prefix-atrc'),
    value: 'end',
    icon: function icon(_ref2) {
      var _ref2$className = _ref2.className,
        className = _ref2$className === void 0 ? '' : _ref2$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg at-w at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M823-67v-827h73v827h-73ZM563-284v-393h113v393H563Zm-240 0v-393h113v393H323Z"
      }));
    }
  }, {
    label: __('Justify content center', 'atrc-prefix-atrc'),
    value: 'ctr',
    icon: function icon(_ref3) {
      var _ref3$className = _ref3.className,
        className = _ref3$className === void 0 ? '' : _ref3$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg at-w at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M443-67v-827h73v827h-73Zm114-217v-393h113v393H557Zm-267 0v-393h113v393H290Z"
      }));
    }
  }, {
    label: __('Justify content between', 'atrc-prefix-atrc'),
    value: 'btw',
    icon: function icon(_ref4) {
      var _ref4$className = _ref4.className,
        className = _ref4$className === void 0 ? '' : _ref4$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg at-w at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M823-67v-217H710v-393h113v-217h73v827h-73ZM64-67v-827h73v217h113v393H137v217H64Z"
      }));
    }
  }, {
    label: __('Justify content around', 'atrc-prefix-atrc'),
    value: 'ard',
    icon: function icon(_ref5) {
      var _ref5$className = _ref5.className,
        className = _ref5$className === void 0 ? '' : _ref5$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg at-w at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M823-67v-827h73v827h-73ZM64-67v-827h73v827H64Zm539-217v-393h113v393H603Zm-360 0v-393h113v393H243Z"
      }));
    }
  }, {
    label: __('Justify content evenly', 'atrc-prefix-atrc'),
    value: 'evnly',
    icon: function icon(_ref6) {
      var _ref6$className = _ref6.className,
        className = _ref6$className === void 0 ? '' : _ref6$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg at-w at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M823-67v-827h73v827h-73ZM64-67v-827h73v827H64Zm499-217v-393h113v393H563Zm-280 0v-393h113v393H283Z"
      }));
    }
  }];
};
export default JustifyContentOptions;
//# sourceMappingURL=options.js.map