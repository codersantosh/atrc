function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*Attributes Structure
Type Object
{
========*Global values*========
    "on3D":"",
    "ppv":"",
    "orgX":"",
    "orgY":"",
    "orgZ":"",

========*Normal values*========
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

========*Hover values*========
    "translXHover":"",
    "translYHover":"",
    "translZHover":"",
    "rotAHover":"",
    "rotXHover":"",
    "rotYHover":"",
    "rotZHover":"",
    "sclXHover":"",
    "sclYHover":"",
    "sclZHover":"",
    "skewXHover":"",
    "skewYHover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useEffect, Fragment } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlUnit from '../control-unit';
import AtrcControlTransform from '../control-transform';
import { AtrcControlTransformAllowedKeys } from '../control-transform';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcNotice from '../../molecules/notice';
import AtrcPanelRow from '../../molecules/panel-row';

/*Utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcOrigin = function AtrcOrigin(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$allow3D = _ref.allow3D,
    allow3D = _ref$allow3D === void 0 ? false : _ref$allow3D;
  var _value$orgX = value.orgX,
    orgX = _value$orgX === void 0 ? '' : _value$orgX,
    _value$orgY = value.orgY,
    orgY = _value$orgY === void 0 ? '' : _value$orgY,
    _value$orgZ = value.orgZ,
    orgZ = _value$orgZ === void 0 ? '' : _value$orgZ;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    selectedX = _useState2[0],
    setSelectedX = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedY = _useState4[0],
    setSelectedY = _useState4[1];

  /*Run only once on mount*/
  useEffect(function () {
    if (!['', 'left', 'center', 'right'].includes(orgX)) {
      setSelectedX('custom');
    } else {
      setSelectedX(orgX);
    }
    if (!['', 'top', 'center', 'bottom'].includes(orgX)) {
      setSelectedY('custom');
    } else {
      setSelectedY(orgY);
    }
  }, []);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };

  /*Run on change selectedTransform*/
  useEffect(function () {
    var valueCloned = cloneDeep(value);
    if ('custom' !== selectedX) {
      valueCloned.orgX = selectedX;
    } else {
      valueCloned.orgX = 0;
    }
    if ('custom' !== selectedY) {
      valueCloned.orgY = selectedY;
    } else {
      valueCloned.orgY = 0;
    }
    onChange(valueCloned);
  }, [selectedX, selectedY]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, allow3D ? __('3D transformations origin', 'atrc-prefix-atrc') : __('2D transformations origin', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('OriginX', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: selectedX,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Left', 'atrc-prefix-atrc'),
      value: 'left'
    }, {
      label: __('Center', 'atrc-prefix-atrc'),
      value: 'center'
    }, {
      label: __('Right', 'atrc-prefix-atrc'),
      value: 'right'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'custom'
    }],
    onChange: function onChange(newVal) {
      return setSelectedX(newVal);
    }
  })), 'custom' === selectedX ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Custom value', 'atrc-prefix-atrc'),
    value: orgX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'orgX');
    }
  })) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('OriginY', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: selectedY,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Top', 'atrc-prefix-atrc'),
      value: 'top'
    }, {
      label: __('Center', 'atrc-prefix-atrc'),
      value: 'center'
    }, {
      label: __('Bottom', 'atrc-prefix-atrc'),
      value: 'bottom'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'custom'
    }],
    onChange: function onChange(newVal) {
      return setSelectedY(newVal);
    }
  })), 'custom' === selectedY ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('OriginY', 'atrc-prefix-atrc'),
    value: orgY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'orgY');
    }
  })) : null, allow3D ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('OriginZ', 'atrc-prefix-atrc'),
    value: orgZ,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'orgZ');
    }
  })) : null);
};
var RenderTabPanel = function RenderTabPanel(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    setAttr = _ref2.setAttr,
    AllTabs = _ref2.AllTabs,
    setTabAttr = _ref2.setTabAttr,
    resetOrigin = _ref2.resetOrigin,
    OriginTabs = _ref2.OriginTabs,
    setOrigin = _ref2.setOrigin;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Use 3D Transforms', 'atrc-prefix-atrc'),
    checked: value && value.on3D,
    onChange: function onChange() {
      return setAttr(!(value && value.on3D), 'on3D');
    }
  })), value && value.on3D && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Perspective', 'atrc-prefix-atrc'),
    value: value && value.ppv,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ppv');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Transform options', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlTransformAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeInnerItems) {
    return map(activeInnerItems, function (innerTab, iDx1) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: iDx1 + innerTab
      }, /*#__PURE__*/React.createElement(AtrcControlTransform, {
        label: __('Add transform options', 'atrc-prefix-atrc'),
        value: AtrcGetTabValues(value, innerTab, AtrcControlTransformAllowedKeys),
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, innerTab);
        },
        allow3D: value && value.on3D
      }), 'normal' !== innerTab ? /*#__PURE__*/React.createElement(AtrcNotice, {
        isDismissible: false,
        autoDismiss: false
      }, __('For a smooth transformation on hover, use the transition options properly.', 'atrc-prefix-atrc')) : null);
    });
  }), /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Origin', 'atrc-prefix-atrc'),
    resetAll: resetOrigin,
    tools: OriginTabs
  }, function (activeInnerItems) {
    return map(activeInnerItems, function (tab2, iDx2) {
      return /*#__PURE__*/React.createElement(AtrcOrigin, {
        value: {
          orgX: value && value.orgX,
          orgY: value && value.orgY,
          orgZ: value && value.orgZ
        },
        onChange: setOrigin,
        allow3D: value && value.on3D,
        key: 'org' + iDx2
      });
    });
  }));
};
var AtrcControlTransformTab = function AtrcControlTransformTab(props) {
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
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs;
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlTransformAllowedKeys));
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setOrigin = function setOrigin(newVal) {
    var valueCloned = cloneDeep(value);
    if (newVal.orgX) {
      valueCloned.orgX = newVal.orgX;
    } else {
      delete valueCloned.orgX;
    }
    if (newVal.orgY) {
      valueCloned.orgY = newVal.orgY;
    } else {
      delete valueCloned.orgY;
    }
    if (newVal.orgZ) {
      valueCloned.orgZ = newVal.orgZ;
    } else {
      delete valueCloned.orgZ;
    }
    onChange(valueCloned);
  };
  var resetOrigin = function resetOrigin() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.orgX;
    delete valueCloned.orgY;
    delete valueCloned.orgZ;
    onChange(valueCloned);
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('normal', value, AtrcControlTransformAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('normal', value, AtrcControlTransformAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('hover', value, AtrcControlTransformAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('hover', value, AtrcControlTransformAllowedKeys));
      }
    });
  }
  var OriginTabs = [{
    name: 'origin',
    title: __('Origin', 'atrc-prefix-atrc'),
    hasValue: !!(value && (value.orgX || value.orgY || value.orgZ)),
    onDeselect: function onDeselect() {
      return resetOrigin();
    }
  }];
  var TransformMainTabs = [{
    name: 'transform',
    title: label,
    hasValue: !isEmpty(value),
    onDeselect: function onDeselect() {
      return onChange({});
    }
  }];
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-tf-tab'), className, variant ? AtrcPrefix('ctrl-tf-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: TransformMainTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: onChange,
        tab: tab,
        setAttr: setAttr,
        AllTabs: AllTabs,
        setTabAttr: setTabAttr,
        resetOrigin: resetOrigin,
        OriginTabs: OriginTabs,
        setOrigin: setOrigin,
        key: iDx
      });
    });
  });
};
export default AtrcControlTransformTab;
//# sourceMappingURL=index.js.map