function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';

/*Value Structure
Type Object

OR
{
    "minW":'',
    "w":'',
    "maxW":'',
    "minH":'',
    "h":''
    "maxH":'',
}

OR
unitDevice:
{
    "minW":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "w":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
        
    },
    "maxW":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "minH":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "h":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "maxH":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
}

OR

{
    "minW":{
        "normal":'',
        "hover":'',
    },
    "w":{
        "normal":'',
        "hover":'',
    },
    "maxW":{
        "normal":'',
        "hover":'',
    },
    "minH":{
        "normal":'',
        "hover":'',
    },
    "h":{
        "normal":'',
        "hover":'',
    },
    "maxH":{
        "normal":'',
        "hover":'',
    },
}
* 
type string
'',tab
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { cloneDeep, map } from 'lodash';
import classnames from 'classnames';

/* Controls */
import AtrcControlBorder from '../control-border';
import AtrcControlBorderRadius from '../control-border-radius';
import AtrcControlBoxShadow from '../control-box-shadow';
import AtrcControlBorderTab from '../control-border-tab';
import AtrcControlBorderRadiusTab from '../control-border-radius-tab';
import AtrcControlBoxShadowTab from '../control-box-shadow-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcPanelRow from '../../molecules/panel-row';

/*Local*/
var AtrcControlBoundary = function AtrcControlBoundary(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Boundary', 'atrc-prefix-atrc') : _ref$label,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? '' : _ref$type,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$allowBorder = _ref.allowBorder,
    allowBorder = _ref$allowBorder === void 0 ? true : _ref$allowBorder,
    _ref$allowBorderRadiu = _ref.allowBorderRadius,
    allowBorderRadius = _ref$allowBorderRadiu === void 0 ? true : _ref$allowBorderRadiu,
    _ref$allowBoxShadow = _ref.allowBoxShadow,
    allowBoxShadow = _ref$allowBoxShadow === void 0 ? true : _ref$allowBoxShadow,
    _ref$borderProps = _ref.borderProps,
    borderProps = _ref$borderProps === void 0 ? {} : _ref$borderProps,
    _ref$borderRadiusProp = _ref.borderRadiusProps,
    borderRadiusProps = _ref$borderRadiusProp === void 0 ? {} : _ref$borderRadiusProp,
    _ref$boxShadowProps = _ref.boxShadowProps,
    boxShadowProps = _ref$boxShadowProps === void 0 ? {} : _ref$boxShadowProps;
  var BorderTag = AtrcControlBorder;
  var BorderRadiusTag = AtrcControlBorderRadius;
  var BoxShadowTag = AtrcControlBoxShadow;
  if ('tab' === type) {
    BorderTag = AtrcControlBorderTab;
    BorderRadiusTag = AtrcControlBorderRadiusTab;
    BoxShadowTag = AtrcControlBoxShadowTab;
  }
  var resetAttr = function resetAttr(attr) {
    var valueCloned = cloneDeep(value);
    delete valueCloned[attr];
    onChange(valueCloned);
  };
  var setAttr = function setAttr(attr, newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned[attr] = newVal;
    onChange(valueCloned);
  };
  var _resetAll = function resetAll() {
    onChange({});
  };
  var tools = [];
  var toolsReset = [];
  if (allowBorder) {
    tools.push({
      name: 'bdr',
      title: __('Border', 'atrc-prefix-atrc'),
      hasValue: !!value.bdr,
      onDeselect: function onDeselect() {
        return resetAttr('bdr');
      }
    });
    toolsReset.push('bdr');
  }
  if (allowBorderRadius) {
    tools.push({
      name: 'bdrRad',
      title: __('Border radius', 'atrc-prefix-atrc'),
      hasValue: !!value.bdrRad,
      onDeselect: function onDeselect() {
        return resetAttr('bdrRad');
      }
    });
    toolsReset.push('w');
  }
  if (allowBoxShadow) {
    tools.push({
      name: 'boxSdw',
      title: __('Box shadow', 'atrc-prefix-atrc'),
      hasValue: !!value.boxSdw,
      onDeselect: function onDeselect() {
        return resetAttr('boxSdw');
      }
    });
    toolsReset.push('boxSdw');
  }
  var AllTabs = {
    tools: tools,
    resetAll: toolsReset
  };
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-bd'), className, variant ? AtrcPrefix('ctrl-bd') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return _resetAll();
    },
    tools: AllTabs.tools
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('bdr' === item) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, null, /*#__PURE__*/React.createElement(BorderTag, _extends({
          className: classnames('at-flx-grw-1'),
          label: __('Border', 'atrc-prefix-atrc'),
          value: value[item] || {},
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, borderProps)));
      }
      if ('bdrRad' === item) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, null, /*#__PURE__*/React.createElement(BorderRadiusTag, _extends({
          className: classnames('at-flx-grw-1'),
          label: __('Border radius', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, borderRadiusProps)));
      }
      if ('boxSdw' === item) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, null, /*#__PURE__*/React.createElement(BoxShadowTag, _extends({
          className: classnames('at-flx-grw-1'),
          label: __('Box shadow', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, boxShadowProps)));
      }
      return null;
    });
  });
};
export default AtrcControlBoundary;
//# sourceMappingURL=index.js.map