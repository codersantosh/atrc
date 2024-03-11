/*Attributes Structure
Type Object
{
"translX":"",
"translY":"",
"translZ":"",
"rotA":"",
"rotX":"",
"rotY":"",
"rotZ":"",
"sclX":"",
"sclY":"",
"sclZ":"",
"skewX":"",
"skewY":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlRange from '../control-range';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import { AtrcIsKeyWithValueNotEmpty } from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlTransformAllowedKeys = ['on3D', 'translX', 'translY', 'translZ', 'rotA', 'rotX', 'rotY', 'rotZ', 'sclX', 'sclY', 'sclZ', 'skewX', 'skewY'];
var RenderTabPanel = function RenderTabPanel(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    value = _ref.value,
    setAttr = _ref.setAttr,
    _ref$allow3D = _ref.allow3D,
    allow3D = _ref$allow3D === void 0 ? false : _ref$allow3D,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'translate' : _ref$tab;
  if ('translate' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
      label: __('TranslateX', 'atrc-prefix-atrc'),
      value: value && value.translX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'translX');
      }
    })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
      label: __('TranslateY', 'atrc-prefix-atrc'),
      value: value && value.translY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'translY');
      }
    })), allow3D && /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
      label: __('TranslateZ', 'atrc-prefix-atrc'),
      value: value && value.translZ,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'translZ');
      }
    })));
  }
  if ('rotate' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('Rotate angle', 'atrc-prefix-atrc'),
      help: __('Unit: deg', 'atrc-prefix-atrc'),
      value: value && value.rotA,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotA');
      },
      min: -360,
      max: 360
    })), allow3D && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('RotateX', 'atrc-prefix-atrc'),
      value: value && value.rotX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotX');
      },
      min: -360,
      max: 360
    })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('RotateY', 'atrc-prefix-atrc'),
      value: value && value.rotY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotY');
      },
      min: -360,
      max: 360
    })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('RotateZ', 'atrc-prefix-atrc'),
      value: value && value.rotZ,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotZ');
      },
      min: -360,
      max: 360
    }))));
  }
  if ('scale' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('ScaleX', 'atrc-prefix-atrc'),
      help: __('Allowed max 5 and min -5', 'atrc-prefix-atrc'),
      value: value && value.sclX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'sclX');
      },
      min: -5,
      max: 5,
      step: 0.1
    })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('ScaleY', 'atrc-prefix-atrc'),
      help: __('Allowed max 5 and min -5', 'atrc-prefix-atrc'),
      value: value && value.sclY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'sclY');
      },
      min: -5,
      max: 5,
      step: 0.1
    })), allow3D && /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('ScaleZ', 'atrc-prefix-atrc'),
      help: __('Allowed max 5 and min -5', 'atrc-prefix-atrc'),
      value: value && value.sclZ,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'sclZ');
      },
      min: -5,
      max: 5,
      step: 0.1
    })));
  }
  if ('skew' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('SkewX', 'atrc-prefix-atrc'),
      help: __('Unit: deg', 'atrc-prefix-atrc'),
      value: value && value.skewX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'skewX');
      },
      min: -360,
      max: 360
    })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlRange, {
      label: __('SkewY', 'atrc-prefix-atrc'),
      help: __('Unit: deg', 'atrc-prefix-atrc'),
      value: value && value.skewY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'skewY');
      },
      min: -360,
      max: 360
    })));
  }
  return null;
};
var AtrcControlTransform = function AtrcControlTransform(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Transform', 'atrc-prefix-atrc') : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allow3D = props.allow3D,
    allow3D = _props$allow3D === void 0 ? false : _props$allow3D;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetTranslate = function resetTranslate() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.translX;
    delete valueCloned.translY;
    delete valueCloned.translZ;
    onChange(valueCloned);
  };
  var resetRotate = function resetRotate() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.rotA;
    delete valueCloned.rotX;
    delete valueCloned.rotY;
    delete valueCloned.rotZ;
    onChange(valueCloned);
  };
  var resetScale = function resetScale() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.sclX;
    delete valueCloned.sclY;
    delete valueCloned.sclZ;
    onChange(valueCloned);
  };
  var resetSkew = function resetSkew() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.skewX;
    delete valueCloned.skewY;
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'translate') {
      return !!(AtrcIsKeyWithValueNotEmpty(value, 'translX') || AtrcIsKeyWithValueNotEmpty(value, 'translY') || AtrcIsKeyWithValueNotEmpty(value, 'translZ'));
    }
    if (tab === 'rotate') {
      return !!(AtrcIsKeyWithValueNotEmpty(value, 'rotX') || AtrcIsKeyWithValueNotEmpty(value, 'rotY') || AtrcIsKeyWithValueNotEmpty(value, 'rotZ') || AtrcIsKeyWithValueNotEmpty(value, 'rotA'));
    }
    if (tab === 'scale') {
      return !!(AtrcIsKeyWithValueNotEmpty(value, 'sclX') || AtrcIsKeyWithValueNotEmpty(value, 'sclY ') || AtrcIsKeyWithValueNotEmpty(value, 'sclZ'));
    }
    if (tab === 'skew') {
      return !!(AtrcIsKeyWithValueNotEmpty(value, 'skewX') || AtrcIsKeyWithValueNotEmpty(value, 'skewY'));
    }
    return false;
  };
  var AllTabs = [{
    name: 'translate',
    title: __('Translate', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('translate'),
    onDeselect: function onDeselect() {
      return resetTranslate();
    }
  }, {
    name: 'rotate',
    title: __('Rotate', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('rotate'),
    onDeselect: function onDeselect() {
      return resetRotate();
    }
  }, {
    name: 'scale',
    title: __('Scale', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('scale'),
    onDeselect: function onDeselect() {
      return resetScale();
    }
  }, {
    name: 'skew',
    title: __('Skew', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('skew'),
    onDeselect: function onDeselect() {
      return resetSkew();
    }
  }];
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-tf'), className, variant ? AtrcPrefix('ctrl-tf') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        tab: tab,
        setAttr: setAttr,
        allow3D: allow3D,
        key: iDx
      });
    });
  });
};
export default AtrcControlTransform;
//# sourceMappingURL=index.js.map