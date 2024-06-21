function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';

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
'',unit, unitDevice
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { cloneDeep, map } from 'lodash';
import classnames from 'classnames';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlUnitDevice from '../control-unit-device';
import AtrcControlUnitTab from '../control-unit-tab';
import AtrcControlUnitDeviceTab from '../control-unit-device-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlWidthHeight = function AtrcControlWidthHeight(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Width & Height', 'atrc-prefix-atrc') : _ref$label,
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
    _ref$allowMinWidth = _ref.allowMinWidth,
    allowMinWidth = _ref$allowMinWidth === void 0 ? false : _ref$allowMinWidth,
    _ref$allowWidth = _ref.allowWidth,
    allowWidth = _ref$allowWidth === void 0 ? false : _ref$allowWidth,
    _ref$allowMaxWidth = _ref.allowMaxWidth,
    allowMaxWidth = _ref$allowMaxWidth === void 0 ? false : _ref$allowMaxWidth,
    _ref$allowMinHeight = _ref.allowMinHeight,
    allowMinHeight = _ref$allowMinHeight === void 0 ? false : _ref$allowMinHeight,
    _ref$allowHeight = _ref.allowHeight,
    allowHeight = _ref$allowHeight === void 0 ? false : _ref$allowHeight,
    _ref$allowMaxHeight = _ref.allowMaxHeight,
    allowMaxHeight = _ref$allowMaxHeight === void 0 ? false : _ref$allowMaxHeight,
    _ref$minWidthProps = _ref.minWidthProps,
    minWidthProps = _ref$minWidthProps === void 0 ? {} : _ref$minWidthProps,
    _ref$widthProps = _ref.widthProps,
    widthProps = _ref$widthProps === void 0 ? {} : _ref$widthProps,
    _ref$maxWidthProps = _ref.maxWidthProps,
    maxWidthProps = _ref$maxWidthProps === void 0 ? {} : _ref$maxWidthProps,
    _ref$minHeightProps = _ref.minHeightProps,
    minHeightProps = _ref$minHeightProps === void 0 ? {} : _ref$minHeightProps,
    _ref$heightTabs = _ref.heightTabs,
    heightTabs = _ref$heightTabs === void 0 ? {} : _ref$heightTabs,
    _ref$maxHeightTabs = _ref.maxHeightTabs,
    maxHeightTabs = _ref$maxHeightTabs === void 0 ? {} : _ref$maxHeightTabs;
  var Tag = AtrcControlUnit;
  if ('deviceTab' === type) {
    Tag = AtrcControlUnitDeviceTab;
  } else if ('device' === type) {
    Tag = AtrcControlUnitDevice;
  } else if ('tab' === type) {
    Tag = AtrcControlUnitTab;
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
  if (allowMinWidth) {
    tools.push({
      name: 'minW',
      title: __('Min width', 'atrc-prefix-atrc'),
      hasValue: !!value.minW,
      onDeselect: function onDeselect() {
        return resetAttr('minW');
      }
    });
    toolsReset.push('minW');
  }
  if (allowWidth) {
    tools.push({
      name: 'w',
      title: __('Width', 'atrc-prefix-atrc'),
      hasValue: !!value.w,
      onDeselect: function onDeselect() {
        return resetAttr('w');
      }
    });
    toolsReset.push('w');
  }
  if (allowMaxWidth) {
    tools.push({
      name: 'maxW',
      title: __('Max width', 'atrc-prefix-atrc'),
      hasValue: !!value.maxW,
      onDeselect: function onDeselect() {
        return resetAttr('maxW');
      }
    });
    toolsReset.push('maxW');
  }
  if (allowMinHeight) {
    tools.push({
      name: 'minH',
      title: __('Min height', 'atrc-prefix-atrc'),
      hasValue: !!value.minH,
      onDeselect: function onDeselect() {
        return resetAttr('minH');
      }
    });
    toolsReset.push('minH');
  }
  if (allowHeight) {
    tools.push({
      name: 'h',
      title: __('Height', 'atrc-prefix-atrc'),
      hasValue: !!value.h,
      onDeselect: function onDeselect() {
        return resetAttr('h');
      }
    });
    toolsReset.push('w');
  }
  if (allowMaxHeight) {
    tools.push({
      name: 'maxH',
      title: __('Max height', 'atrc-prefix-atrc'),
      hasValue: !!value.maxH,
      onDeselect: function onDeselect() {
        return resetAttr('maxH');
      }
    });
    toolsReset.push('maxH');
  }
  var AllTabs = {
    tools: tools,
    resetAll: toolsReset
  };
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-w-h'), className, variant ? AtrcPrefix('ctrl-w-h') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return _resetAll();
    },
    tools: AllTabs.tools
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('minW' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Min width', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, minWidthProps));
      }
      if ('w' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Width', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, widthProps));
      }
      if ('maxW' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Max width', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, maxWidthProps));
      }
      if ('minH' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Min height', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, minHeightProps));
      }
      if ('h' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Height', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, heightTabs));
      }
      if ('maxH' === item) {
        return /*#__PURE__*/React.createElement(Tag, _extends({
          label: __('Max height', 'atrc-prefix-atrc'),
          value: value[item],
          onChange: function onChange(newVal) {
            return setAttr(item, newVal);
          },
          key: iDx
        }, maxHeightTabs));
      }
      return null;
    });
  });
};
export default AtrcControlWidthHeight;
//# sourceMappingURL=index.js.map