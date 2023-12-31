"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcControlSelectGoogleFontsPreview;
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _reactJss = require("react-jss");
/*WordPress*/

/*Library*/

/*Local*/
var useStyles = (0, _reactJss.createUseStyles)({
  root: {
    fontFamily: function fontFamily(_ref) {
      var font = _ref.font;
      return font;
    },
    fontWeight: function fontWeight(_ref2) {
      var weight = _ref2.weight;
      return weight;
    }
  }
});
function AtrcControlSelectGoogleFontsPreview(_ref3) {
  var font = _ref3.font,
    weight = _ref3.weight;
  var classes = useStyles({
    font: font,
    weight: weight
  });
  (0, _element.useEffect)(function () {
    var link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css?family=".concat(font, ":").concat(weight);
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, [font, weight]);
  var weights = weight.split(',');
  return /*#__PURE__*/React.createElement(React.Fragment, null, weights.map(function (wt) {
    return /*#__PURE__*/React.createElement("div", {
      className: classes.root,
      key: wt,
      style: {
        fontWeight: wt
      }
    }, (0, _i18n.sprintf)((0, _i18n.__)('This text is styled with a Google font `%s` and weight `%s`.', 'atrc-prefix-atrc'), font, wt || (0, _i18n.__)('default', 'atrc-prefix-atrc')));
  }));
}
//# sourceMappingURL=fonts-preview.js.map