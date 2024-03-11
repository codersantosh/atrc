var _excluded = ["className", "isLoading", "canSave", "text", "spinnerPos", "spinnerProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
      save: __('Save settings', 'atrc-prefix-atrc')
    } : _props$text,
    _props$spinnerPos = props.spinnerPos,
    spinnerPos = _props$spinnerPos === void 0 ? 'before' : _props$spinnerPos,
    _props$spinnerProps = props.spinnerProps,
    spinnerProps = _props$spinnerProps === void 0 ? {} : _props$spinnerProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcButton, _extends({
    className: classnames(className, AtrcPrefix('btn-save'), 'at-flx at-al-itm-ctr'),
    disabled: isLoading || !canSave
  }, defaultProps), 'after' !== spinnerPos && isLoading ? /*#__PURE__*/React.createElement(AtrcSpinner, _extends({
    variant: "inline"
  }, spinnerProps)) : null, !isLoading ? canSave ? text.save : text.saved : null, 'after' === spinnerPos && isLoading ? /*#__PURE__*/React.createElement(AtrcSpinner, _extends({
    variant: "inline"
  }, spinnerProps)) : null);
};
export default AtrcButtonSaveTemplate1;
//# sourceMappingURL=index.js.map