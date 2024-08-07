import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Options*/
var AlignItemsOptions = function AlignItemsOptions() {
  return [{
    label: __('Align items start', 'atrc-prefix-atrc'),
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
        d: "M64-64v-832h73v832H64Zm160-220v-113h432v113H224Zm0-280v-113h672v113H224Z"
      }));
    }
  }, {
    label: __('Align items end', 'atrc-prefix-atrc'),
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
        d: "M823-64v-832h73v832h-73ZM304-284v-113h433v113H304ZM64-564v-113h673v113H64Z"
      }));
    }
  }, {
    label: __('Align items center', 'atrc-prefix-atrc'),
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
        d: "M284-104v-340H64v-73h220v-339h113v339h167v-219h113v219h219v73H677v220H564v-220H397v340H284Z"
      }));
    }
  }, {
    label: __('Align items baseline', 'atrc-prefix-atrc'),
    value: 'bsln',
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
        d: "M64-64v-73h832v73H64Zm220-160v-672h113v672H284Zm280 0v-432h113v432H564Z"
      }));
    }
  }, {
    label: __('Align items stretch', 'atrc-prefix-atrc'),
    value: 'strh',
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
        d: "M284-244v-473h113v473H284Zm280 0v-473h113v473H564ZM67-824v-73h826v73H67Zm0 760v-73h826v73H67Z"
      }));
    }
  }];
};
export default AlignItemsOptions;
//# sourceMappingURL=options.js.map