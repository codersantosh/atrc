function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React from 'react';

/*Attributes Structure
Type Object
{
    type = '',
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    imgFrm ='',
    imgId ='',
    imgUrl ='',
    imgSz ='',
    flipV = '',
    flipH = '',
    zIdx = '',

    xsW = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    xsH = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map, cloneDeep } from 'lodash';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlUnit from '../control-unit';
import AtrcControlTextarea from '../control-textarea';
import AtrcControlDropdownHtml from '../control-dropdown-html';
import AtrcControlDropdownColor from '../control-dropdown-color';
import AtrcControlImg from '../control-img';
import AtrcControlWidthHeight from '../control-width-height';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcObjDeleteEmptyKey from '../../utils/object-delete-empty-key';

/*Local */
var AtrcMaskPosition = function AtrcMaskPosition(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  var _value$posX = value.posX,
    posX = _value$posX === void 0 ? '' : _value$posX,
    _value$posY = value.posY,
    posY = _value$posY === void 0 ? '' : _value$posY;
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
    if (!['', 'left', 'center', 'right'].includes(posX)) {
      setSelectedX('cust');
    } else {
      setSelectedX(posX);
    }
    if (!['', 'top', 'center', 'bottom'].includes(posX)) {
      setSelectedY('cust');
    } else {
      setSelectedY(posY);
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
    if ('cust' !== selectedX) {
      valueCloned.posX = selectedX;
    } else {
      valueCloned.posX = null;
    }
    if ('cust' !== selectedY) {
      valueCloned.posY = selectedY;
    } else {
      valueCloned.posY = null;
    }
    onChange(valueCloned);
  }, [selectedX, selectedY]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Mask position', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Position X', 'atrc-prefix-atrc'),
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
      value: 'cust'
    }],
    onChange: function onChange(newVal) {
      return setSelectedX(newVal);
    }
  })), 'cust' === selectedX ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Custom value', 'atrc-prefix-atrc'),
    value: posX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'posX');
    }
  })) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Position Y', 'atrc-prefix-atrc'),
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
      value: 'cust'
    }],
    onChange: function onChange(newVal) {
      return setSelectedY(newVal);
    }
  })), 'cust' === selectedY ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Custom Y', 'atrc-prefix-atrc'),
    value: posY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'posY');
    }
  })) : null);
};
var SelectedShape = function SelectedShape(value, options) {
  var selectedShape = options.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
var SvgShapeDefined = function SvgShapeDefined(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    options = _ref2.options;
  var selectedShape = SelectedShape(value, options);
  var icon = selectedShape && selectedShape.svg;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-flx-grw-1 at-m')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Choose svg', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-flx-grw-1 at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownHtml, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: icon
    }) : /*#__PURE__*/React.createElement(AtrcText, null, __('Choose svg', 'atrc-prefix-atrc'))),
    value: value,
    onChange: onChange,
    options: options
  })));
};
var SvgShape = function SvgShape(_ref3) {
  var frm = _ref3.frm,
    def = _ref3.def,
    cust = _ref3.cust,
    color = _ref3.color,
    definedOptions = _ref3.definedOptions,
    _onChange = _ref3.onChange,
    allowColor = _ref3.allowColor;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Source', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: frm,
    options: [{
      label: __('Defined', 'atrc-prefix-atrc'),
      value: 'def'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgFrm');
    }
  })), 'cust' === frm ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlTextarea, {
    value: cust,
    help: __('To ensure proper functionality of the options, make sure to add the `at-svg` class to the SVG element.', 'atrc-prefix-atrc'),
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgCust');
    }
  })) : /*#__PURE__*/React.createElement(SvgShapeDefined, {
    value: def,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgDefd');
    },
    options: definedOptions
  }), allowColor ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
    label: __('Color', 'atrc-prefix-atrc'),
    value: color,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgCl');
    }
  })) : null);
};
var ImgShp = function ImgShp(_ref4) {
  var frm = _ref4.frm,
    id = _ref4.id,
    sz = _ref4.sz,
    url = _ref4.url,
    onChange = _ref4.onChange;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlImg, {
    value: {
      frm: frm,
      id: id,
      sz: sz,
      url: url
    },
    allowDimensions: false,
    allowDetails: false,
    onChange: onChange
  }));
};
var ShapeSettings = function ShapeSettings(props) {
  var _props$shapeType = props.shapeType,
    shapeType = _props$shapeType === void 0 ? '' : _props$shapeType,
    shapeOptionsLabel = props.shapeOptionsLabel,
    value = props.value,
    _props$onChange = props.onChange,
    _onChange2 = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$flipV = value.flipV,
    flipV = _value$flipV === void 0 ? false : _value$flipV,
    _value$flipH = value.flipH,
    flipH = _value$flipH === void 0 ? false : _value$flipH,
    _value$zIdx = value.zIdx,
    zIdx = _value$zIdx === void 0 ? false : _value$zIdx,
    _value$sz = value.sz,
    sz = _value$sz === void 0 ? '' : _value$sz,
    _value$posX2 = value.posX,
    posX = _value$posX2 === void 0 ? '' : _value$posX2,
    _value$posY2 = value.posY,
    posY = _value$posY2 === void 0 ? '' : _value$posY2,
    xsW = value.xsW,
    smW = value.smW,
    mdW = value.mdW,
    lgW = value.lgW,
    xlW = value.xlW,
    xxlW = value.xxlW,
    xsH = value.xsH,
    smH = value.smH,
    mdH = value.mdH,
    lgH = value.lgH,
    xlH = value.xlH,
    xxlH = value.xxlH;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    _onChange2(valueCloned);
  };
  var setWidthHeight = function setWidthHeight(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.xsW;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.xsH;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    if (newVal.h) {
      valueCloned.xsH = newVal.h.xs;
      valueCloned.smH = newVal.h.sm;
      valueCloned.mdH = newVal.h.md;
      valueCloned.lgH = newVal.h.lg;
      valueCloned.xlH = newVal.h.xl;
      valueCloned.xxlH = newVal.h.xxl;
    }
    if (newVal.w) {
      valueCloned.xsW = newVal.w.xs;
      valueCloned.smW = newVal.w.sm;
      valueCloned.mdW = newVal.w.md;
      valueCloned.lgW = newVal.w.lg;
      valueCloned.xlW = newVal.w.xl;
      valueCloned.xxlW = newVal.w.xxl;
    }
    _onChange2(valueCloned);
  };
  var AllTabs = [{
    name: 'flipV',
    title: __('Flip vertically', 'atrc-prefix-atrc'),
    hasValue: flipV,
    onDeselect: function onDeselect() {
      return setAttr(false, 'flipV');
    }
  }, {
    name: 'flipH',
    title: __('Flip horizontally', 'atrc-prefix-atrc'),
    hasValue: flipH,
    onDeselect: function onDeselect() {
      return setAttr(false, 'flipH');
    }
  }, {
    name: 'zIdx',
    title: __('Bring front', 'atrc-prefix-atrc'),
    hasValue: zIdx,
    onDeselect: function onDeselect() {
      return setAttr(false, 'zIdx');
    }
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, 'imgShp' === shapeType ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcMaskPosition, {
    label: __('Mask position', 'atrc-prefix-atrc'),
    value: {
      posX: posX,
      posY: posY
    },
    onChange: function onChange(newVal) {
      var valueCloned = cloneDeep(value);
      valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVal);
      _onChange2(valueCloned);
    }
  }), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Mask size', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: sz,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Auto', 'atrc-prefix-atrc'),
      value: 'auto'
    }, {
      label: __('Contain', 'atrc-prefix-atrc'),
      value: 'contain'
    }, {
      label: __('Cover', 'atrc-prefix-atrc'),
      value: 'cover'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'sz');
    }
  })), 'cust' === sz ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlWidthHeight, {
    label: __('Custom mask size', 'atrc-prefix-atrc'),
    allowHeight: true,
    allowWidth: true,
    type: 'device',
    value: {
      h: {
        xs: xsH,
        sm: smH,
        md: mdH,
        lg: lgH,
        xl: xlH,
        xxl: xxlH
      },
      w: {
        xs: xsW,
        sm: smW,
        md: mdW,
        lg: lgW,
        xl: xlW,
        xxl: xxlW
      }
    },
    onChange: setWidthHeight,
    className: classnames('at-flx-grw-1')
  })) : null) : /*#__PURE__*/React.createElement(AtrcControlWidthHeight, {
    label: __('Size', 'atrc-prefix-atrc'),
    allowHeight: true,
    allowWidth: true,
    type: 'device',
    value: {
      h: {
        xs: xsH,
        sm: smH,
        md: mdH,
        lg: lgH,
        xl: xlH,
        xxl: xxlH
      },
      w: {
        xs: xsW,
        sm: smW,
        md: mdW,
        lg: lgW,
        xl: xlW,
        xxl: xxlW
      }
    },
    onChange: setWidthHeight,
    className: classnames('at-flx-grw-1')
  }), /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('shp-opt')),
    label: shapeOptionsLabel,
    resetAll: function resetAll() {
      return _onChange2({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('flipV' === item) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Flip vertically', 'atrc-prefix-atrc'),
          checked: flipV,
          onChange: function onChange() {
            return setAttr(!flipV, 'flipV');
          }
        }));
      }
      if ('flipH' === item) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Flip horizontally', 'atrc-prefix-atrc'),
          checked: flipH,
          onChange: function onChange() {
            return setAttr(!flipH, 'flipH');
          }
        }));
      }
      if ('zIdx' === item) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Bring front', 'atrc-prefix-atrc'),
          checked: zIdx,
          onChange: function onChange() {
            return setAttr(!zIdx, 'zIdx');
          }
        }));
      }
      return null;
    });
  }));
};
var AtrcControlShape = function AtrcControlShape(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$definedOptions = props.definedOptions,
    definedOptions = _props$definedOptions === void 0 ? [] : _props$definedOptions,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2,
    _props$shapeOptionsLa = props.shapeOptionsLabel,
    shapeOptionsLabel = _props$shapeOptionsLa === void 0 ? __('Shape options', 'atrc-prefix-atrc') : _props$shapeOptionsLa,
    _props$shapeType2 = props.shapeType,
    shapeType = _props$shapeType2 === void 0 ? '' : _props$shapeType2,
    _props$allowColor = props.allowColor,
    allowColor = _props$allowColor === void 0 ? true : _props$allowColor;
  var _value$type = value.type,
    type = _value$type === void 0 ? 'svg' : _value$type,
    _value$svgFrm = value.svgFrm,
    svgFrm = _value$svgFrm === void 0 ? 'def' : _value$svgFrm,
    _value$svgDefd = value.svgDefd,
    svgDefd = _value$svgDefd === void 0 ? '' : _value$svgDefd,
    _value$svgCust = value.svgCust,
    svgCust = _value$svgCust === void 0 ? '' : _value$svgCust,
    _value$svgCl = value.svgCl,
    svgCl = _value$svgCl === void 0 ? '' : _value$svgCl,
    _value$flipV2 = value.flipV,
    flipV = _value$flipV2 === void 0 ? false : _value$flipV2,
    _value$flipH2 = value.flipH,
    flipH = _value$flipH2 === void 0 ? false : _value$flipH2,
    _value$zIdx2 = value.zIdx,
    zIdx = _value$zIdx2 === void 0 ? false : _value$zIdx2,
    _value$sz2 = value.sz,
    sz = _value$sz2 === void 0 ? '' : _value$sz2,
    _value$posX3 = value.posX,
    posX = _value$posX3 === void 0 ? '' : _value$posX3,
    _value$posY3 = value.posY,
    posY = _value$posY3 === void 0 ? '' : _value$posY3,
    _value$imgFrm = value.imgFrm,
    imgFrm = _value$imgFrm === void 0 ? '' : _value$imgFrm,
    _value$imgId = value.imgId,
    imgId = _value$imgId === void 0 ? '' : _value$imgId,
    _value$imgUrl = value.imgUrl,
    imgUrl = _value$imgUrl === void 0 ? '' : _value$imgUrl,
    _value$imgSz = value.imgSz,
    imgSz = _value$imgSz === void 0 ? '' : _value$imgSz,
    _value$xsW = value.xsW,
    xsW = _value$xsW === void 0 ? '' : _value$xsW,
    _value$smW = value.smW,
    smW = _value$smW === void 0 ? '' : _value$smW,
    _value$mdW = value.mdW,
    mdW = _value$mdW === void 0 ? '' : _value$mdW,
    _value$lgW = value.lgW,
    lgW = _value$lgW === void 0 ? '' : _value$lgW,
    _value$xlW = value.xlW,
    xlW = _value$xlW === void 0 ? '' : _value$xlW,
    _value$xxlW = value.xxlW,
    xxlW = _value$xxlW === void 0 ? '' : _value$xxlW,
    _value$xsH = value.xsH,
    xsH = _value$xsH === void 0 ? '' : _value$xsH,
    _value$smH = value.smH,
    smH = _value$smH === void 0 ? '' : _value$smH,
    _value$mdH = value.mdH,
    mdH = _value$mdH === void 0 ? '' : _value$mdH,
    _value$lgH = value.lgH,
    lgH = _value$lgH === void 0 ? '' : _value$lgH,
    _value$xlH = value.xlH,
    xlH = _value$xlH === void 0 ? '' : _value$xlH,
    _value$xxlH = value.xxlH,
    xxlH = _value$xxlH === void 0 ? '' : _value$xxlH;
  var doOnchange = function doOnchange(newValues) {
    onChange(AtrcObjDeleteEmptyKey(newValues));
  };
  var setAttr = function setAttr(newVal, tp) {
    var valueCloned = cloneDeep(value);
    valueCloned[tp] = newVal;
    doOnchange(valueCloned);
  };
  var setImageAttr = function setImageAttr(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.imgFrm;
    delete valueCloned.imgId;
    delete valueCloned.imgUrl;
    delete valueCloned.imgSz;
    if (newVal && newVal.frm) {
      valueCloned.imgFrm = newVal.frm;
    }
    if (newVal && newVal.id) {
      valueCloned.imgId = newVal.id;
    }
    if (newVal && newVal.size) {
      valueCloned.imgSz = newVal.size;
    }
    if (newVal && newVal.url) {
      valueCloned.imgUrl = newVal.url;
    }
    doOnchange(valueCloned);
  };
  var setShapeSettings = function setShapeSettings(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.flipV;
    delete valueCloned.flipH;
    delete valueCloned.zIdx;
    delete valueCloned.xsW;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.xsH;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVal);
    doOnchange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-shp'), className, variant ? AtrcPrefix('ctrl-shp') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Type', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: type,
    options: [{
      label: __('Svg', 'atrc-prefix-atrc'),
      value: 'svg'
    }, {
      label: __('Image', 'atrc-prefix-atrc'),
      value: 'img'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'type');
    }
  })), 'img' === type ? /*#__PURE__*/React.createElement(ImgShp, {
    frm: imgFrm,
    id: imgId,
    url: imgUrl,
    sz: imgSz,
    onChange: setImageAttr
  }) : /*#__PURE__*/React.createElement(SvgShape, {
    frm: svgFrm,
    def: svgDefd,
    cust: svgCust,
    color: svgCl,
    onChange: setAttr,
    definedOptions: definedOptions,
    allowColor: allowColor
  }), svgDefd || svgCust || imgId || imgUrl ? /*#__PURE__*/React.createElement(ShapeSettings, {
    shapeOptionsLabel: shapeOptionsLabel,
    shapeType: shapeType,
    value: {
      sz: sz,
      posX: posX,
      posY: posY,
      flipV: flipV,
      flipH: flipH,
      zIdx: zIdx,
      xsW: xsW,
      smW: smW,
      mdW: mdW,
      lgW: lgW,
      xlW: xlW,
      xxlW: xxlW,
      xsH: xsH,
      smH: smH,
      mdH: mdH,
      lgH: lgH,
      xlH: xlH,
      xxlH: xxlH
    },
    onChange: setShapeSettings
  }) : null);
};
export default AtrcControlShape;
//# sourceMappingURL=index.js.map