var _excluded = ["value", "tab", "onChange"],
  _excluded2 = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Value Structure
Type Object
{
========*Normal values*========
    "fntSz":"",
    "smFntSz":"",
    "mdFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",

    "fntFam": "",

    "fntWt": "",

    "fntSty": "",

    "txtTf": "",

    "txtDec": "",

    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",

    "ltrSp":"",
    "smLtrSp":"",
    "mdLtrSp":"",
    "lgLtrSp":"",
    "xlLtrSp":"",
    "xxlLtrSp":"",
    
========*Hover values*========
    "fntSzHover":"",
    "smFntSzHover":"",
    "mdFntSzHover":"",
    "lgFntSzHover":"",
    "xlFntSzHover":"",
    "xxlFntSzHover":"",

    "fntFamHover": "",
    "fntWtHover": "",
    "fntStyHover": "",
    "txtTfHover": "",
    "txtDecHover": "",

    "lnHHover":"",
    "smLnHHover":"",
    "mdLnHHover":"",
    "lgLnHHover":"",
    "xlLnHHover":"",
    "xxlLnHHover":"",

    "ltrSpHover":"",
    "smLtrSpHover":"",
    "mdLtrSpHover":"",
    "lgLtrSpHover":"",
    "xlLtrSpHover":"",
    "xxlLtrSpHover":"",

}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcControlTypography from '../control-typography';

/*Inbuilt utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
import { AtrcControlTypographyAllowedKeys } from './../control-typography';
var RenderTabPanel = function RenderTabPanel(props) {
  var value = props.value,
    tab = props.tab,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlTypography, _extends({
    label: __('Add typography options', 'atrc-prefix-atrc'),
    value: AtrcGetTabValues(value, tab, AtrcControlTypographyAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  }, defaultProps));
};
var AtrcControlTypographyTab = function AtrcControlTypographyTab(props) {
  var value = props.value,
    label = props.label,
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
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlTypographyAllowedKeys));
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlTypographyAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('normal', value, AtrcControlTypographyAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlTypographyAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Hover', value, AtrcControlTypographyAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlTypographyAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('ParentHover', value, AtrcControlTypographyAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-typ-tab'), className, variant ? AtrcPrefix('ctrl-typ-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlTypographyAllowedKeys));
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
export default AtrcControlTypographyTab;
//# sourceMappingURL=index.js.map