var _excluded = ["value", "tab", "onChange"],
  _excluded2 = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Attributes Structure
Type Object
{
========*Normal values*========
    blr : '',
    brgtNess : '',
    ctrs : '',
    grayScl : '',
    hueRot : '',
    inv : '',
    opa : '',
    sart : '',
    sepia : '',

    hSdw : '',
    vSdw : '',
    sdwBlr : '',
    sdwSprd : '',
    sdwCl : ''

========*Hover values*========
    blrHover : '',
    brgtNessHover : '',
    ctrsHover : '',
    graySclHover : '',
    hueRotHover : '',
    invHover : '',
    opaHover : '',
    sartHover : '',
    sepiaHover : '',

    hSdwHover : '',
    vSdwHover : '',
    sdwBlrHover : '',
    sdwSprdHover : '',
    sdwClHover : ''

========*ParentHover values*========
    blrParentHover : '',
    brgtNessParentHover : '',
    ctrsParentHover : '',
    graySclParentHover : '',
    hueRotParentHover : '',
    invParentHover : '',
    opaParentHover : '',
    sartParentHover : '',
    sepiaParentHover : '',

    hSdwParentHover : '',
    vSdwParentHover : '',
    sdwBlrParentHover : '',
    sdwSprdParentHover : '',
    sdwClParentHover : ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/
import { AtrcControlFilterAllowedKeys } from '../control-filter';
import AtrcControlFilter from '../control-filter';
import AtrcPanelTools from '../panel-tools';

/*Inbuilt utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var RenderTabPanel = function RenderTabPanel(props) {
  var value = props.value,
    tab = props.tab,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlFilter, _extends({
    label: __('Add filter options', 'atrc-prefix-atrc'),
    value: AtrcGetTabValues(value, tab, AtrcControlFilterAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  }, defaultProps));
};
var AtrcControlFilterTab = function AtrcControlFilterTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlFilterAllowedKeys));
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlFilterAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('normal', value, AtrcControlFilterAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlFilterAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Hover', value, AtrcControlFilterAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlFilterAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('ParentHover', value, AtrcControlFilterAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-fl-tab'), className, variant ? AtrcPrefix('ctrl-fl-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlFilterAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
export default AtrcControlFilterTab;
//# sourceMappingURL=index.js.map