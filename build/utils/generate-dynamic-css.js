import React from 'react';

/* Local */
/**
 * Generate dynamic css
 *
 * @param {object} cssObj , each key contain real CSS
 * {
  "xs": "",
  "xsHover": "",
  "xsActive": "",
  "sm": "",
  "smHover": "",
  "smActive": "",
  "md": "",
  "mdHover": "",
  "mdActive": "",
  "lg": "",
  "lgHover": "",
  "lgActive": "",
  "xl": "",
  "xlHover": "",
  "xlActive": "",
  "xxl": "",
  "xxlHover": "",
  "xxlActive": ""
}
@param {selector} selector of css
@param {selector} hoverParentSelector of css
@param {selector} activeSelector of css
@param {selector} activeParentSelector of css

 * @return {Promise<boolean>} A Promise that resolves to true if the copy operation succeeded, and false otherwise.
 */
var AtrcGenerateDynamicCss = function AtrcGenerateDynamicCss(_ref) {
  var cssObj = _ref.cssObj,
    selector = _ref.selector,
    _ref$hoverParentSelec = _ref.hoverParentSelector,
    hoverParentSelector = _ref$hoverParentSelec === void 0 ? '' : _ref$hoverParentSelec,
    _ref$activeSelector = _ref.activeSelector,
    activeSelector = _ref$activeSelector === void 0 ? '' : _ref$activeSelector,
    _ref$activeParentSele = _ref.activeParentSelector,
    activeParentSelector = _ref$activeParentSele === void 0 ? '' : _ref$activeParentSele;
  if (!cssObj) {
    return '';
  }
  var output = '';
  if (cssObj.xs) {
    output += "".concat(selector, "{").concat(cssObj.xs, "}");
  }
  if (cssObj.xsHover) {
    if (hoverParentSelector) {
      output += "".concat(hoverParentSelector, ":hover ").concat(selector, "{").concat(cssObj.xsHover, "}");
    } else {
      output += "".concat(selector, ":hover{").concat(cssObj.xsHover, "}");
    }
  }
  if (cssObj.xsActive) {
    if (activeParentSelector) {
      output += "".concat(activeParentSelector, ":active ").concat(selector, "{").concat(cssObj.xsActive, "}");
    } else if (activeSelector) {
      output += "".concat(activeSelector, "{").concat(cssObj.xsActive, "}");
    } else {
      output += "".concat(selector, ":active{").concat(cssObj.xsActive, "}");
    }
  }
  if (cssObj.sm || cssObj.smHover) {
    output += "@media (min-width:576px){";
    if (cssObj.sm) {
      output += "".concat(selector, "{").concat(cssObj.sm, "}");
    }
    if (cssObj.smHover) {
      if (hoverParentSelector) {
        output += "".concat(hoverParentSelector, ":hover ").concat(selector, "{").concat(cssObj.smHover, "}");
      } else {
        output += "".concat(selector, ":hover{").concat(cssObj.smHover, "}");
      }
    }
    output += "}";
  }
  if (cssObj.md || cssObj.mdHover) {
    output += "@media (min-width:768px){";
    if (cssObj.md) {
      output += "".concat(selector, "{").concat(cssObj.md, "}");
    }
    if (cssObj.mdHover) {
      if (hoverParentSelector) {
        output += "".concat(hoverParentSelector, ":hover ").concat(selector, "{").concat(cssObj.mdHover, "}");
      } else {
        output += "".concat(selector, ":hover{").concat(cssObj.mdHover, "}");
      }
    }
    output += "}";
  }
  if (cssObj.lg || cssObj.lgHover) {
    output += "@media (min-width:992px){";
    if (cssObj.lg) {
      output += "".concat(selector, "{").concat(cssObj.lg, "}");
    }
    if (cssObj.lgHover) {
      if (hoverParentSelector) {
        output += "".concat(hoverParentSelector, ":hover ").concat(selector, "{").concat(cssObj.lgHover, "}");
      } else {
        output += "".concat(selector, ":hover{").concat(cssObj.lgHover, "}");
      }
    }
    output += "}";
  }
  if (cssObj.xl || cssObj.xlHover) {
    output += "@media (min-width:1200px){";
    if (cssObj.xl) {
      output += "".concat(selector, "{").concat(cssObj.xl, "}");
    }
    if (cssObj.xlHover) {
      if (hoverParentSelector) {
        output += "".concat(hoverParentSelector, ":hover ").concat(selector, "{").concat(cssObj.xlHover, "}");
      } else {
        output += "".concat(selector, ":hover{").concat(cssObj.xlHover, "}");
      }
    }
    output += "}";
  }
  if (cssObj.xxl || cssObj.xxlHover) {
    output += "@media (min-width:1400px){";
    if (cssObj.xxl) {
      output += "".concat(selector, "{").concat(cssObj.xxl, "}");
    }
    if (cssObj.xxlHover) {
      if (hoverParentSelector) {
        output += "".concat(hoverParentSelector, ":hover ").concat(selector, "{").concat(cssObj.xxlHover, "}");
      } else {
        output += "".concat(selector, ":hover{").concat(cssObj.xxlHover, "}");
      }
    }
    output += "}";
  }
  return output;
};
export default AtrcGenerateDynamicCss;
//# sourceMappingURL=generate-dynamic-css.js.map