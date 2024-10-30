var _excluded = ["className", "isLoading", "canSave", "text", "spinnerPos", "spinnerProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcButton from '../../../../atoms/button';
import AtrcSpinner from '../../../../atoms/spinner';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
var AtrcButtonSaveTemplate1 = function AtrcButtonSaveTemplate1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$isLoading = props.isLoading,
    isLoading = _props$isLoading === void 0 ? false : _props$isLoading,
    _props$canSave = props.canSave,
    canSave = _props$canSave === void 0 ? false : _props$canSave,
    _props$text = props.text,
    text = _props$text === void 0 ? {
      saved: __('Saved', 'atrc-prefix-atrc'),
      save: __('Save settings', 'atrc-prefix-atrc'),
      saving: __('Saving', 'atrc-prefix-atrc')
    } : _props$text,
    _props$spinnerPos = props.spinnerPos,
    spinnerPos = _props$spinnerPos === void 0 ? 'before' : _props$spinnerPos,
    _props$spinnerProps = props.spinnerProps,
    spinnerProps = _props$spinnerProps === void 0 ? {} : _props$spinnerProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcButton, _extends({
    className: classnames(className, AtrcPrefix('btn-save'), 'at-flx', 'at-al-itm-ctr', 'at-gap'),
    disabled: isLoading || !canSave
  }, defaultProps), 'after' !== spinnerPos && isLoading ? /*#__PURE__*/React.createElement(AtrcSpinner, _extends({
    variant: "inline"
  }, spinnerProps)) : null, !isLoading ? canSave ? text.save : text.saved : text.saving || null, 'after' === spinnerPos && isLoading ? /*#__PURE__*/React.createElement(AtrcSpinner, _extends({
    variant: "inline"
  }, spinnerProps)) : null);
};
export default AtrcButtonSaveTemplate1;
//# sourceMappingURL=index.js.map