import React from 'react';

/*WordPress*/
import { useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/*Library*/
import { createUseStyles } from 'react-jss';

/*Local*/
export default function AtrcControlSelectGoogleFontsPreview(_ref) {
  var font = _ref.font,
    weight = _ref.weight;
  var useStyles = createUseStyles({
    root: {
      fontFamily: function fontFamily(_ref2) {
        var font = _ref2.font;
        return font;
      },
      fontWeight: function fontWeight(_ref3) {
        var weight = _ref3.weight;
        return weight;
      }
    }
  });
  var classes = useStyles({
    font: font,
    weight: weight
  });
  useEffect(function () {
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
    }, sprintf(__('This text is styled with a Google font `%s` and weight `%s`.', 'atrc-prefix-atrc'), font, wt || __('default', 'atrc-prefix-atrc')));
  }));
}
//# sourceMappingURL=fonts-preview.js.map