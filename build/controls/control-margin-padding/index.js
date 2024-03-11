function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Value Structure
Type Object
{
    "minW":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "w":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "maxW":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "minH":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "h":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "maxH":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
}

OR
Unit:
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
'',tab, device,'deviceTab
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { cloneDeep, map } from 'lodash';
import classnames from 'classnames';

/* Controls */
import AtrcControlBoxFour from '../control-box-four';
import AtrcControlBoxFourDevice from '../control-box-four-device';
import AtrcControlBoxFourTab from './../control-box-four-tab';
import AtrcControlBoxFourDeviceTab from './../control-box-four-device-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlMarginPadding = function AtrcControlMarginPadding(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Margin & Padding', 'atrc-prefix-atrc') : _ref$label,
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
    _ref$marginProps = _ref.marginProps,
    marginProps = _ref$marginProps === void 0 ? {} : _ref$marginProps,
    _ref$paddingProps = _ref.paddingProps,
    paddingProps = _ref$paddingProps === void 0 ? {} : _ref$paddingProps;
  var Tag = AtrcControlBoxFour;
  if ('deviceTab' === type) {
    Tag = AtrcControlBoxFourDeviceTab;
  } else if ('device' === type) {
    Tag = AtrcControlBoxFourDevice;
  } else if ('tab' === type) {
    Tag = AtrcControlBoxFourTab;
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
  tools.push({
    name: 'm',
    title: __('Margin', 'atrc-prefix-atrc'),
    hasValue: !!value.m,
    onDeselect: function onDeselect() {
      return resetAttr('m');
    }
  });
  toolsReset.push('m');
  tools.push({
    name: 'p',
    title: __('Padding', 'atrc-prefix-atrc'),
    hasValue: !!value.p,
    onDeselect: function onDeselect() {
      return resetAttr('p');
    }
  });
  toolsReset.push('p');
  var AllTabs = {
    tools: tools,
    resetAll: toolsReset
  };
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-m-p'), className, variant ? AtrcPrefix('ctrl-m-p') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return _resetAll();
    },
    tools: AllTabs.tools
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('m' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Margin', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, marginProps));
      }
      if ('p' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Padding', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, paddingProps));
      }
      return null;
    });
  });
};
export default AtrcControlMarginPadding;
//# sourceMappingURL=index.js.map