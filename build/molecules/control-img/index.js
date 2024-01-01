function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "value", "variant", "className", "onChange", "allowSource", "allowSelf", "allowExternal", "allowDetails", "allowSettings"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*Attributes Structure
Type Object
{
    frm = '',
    id = 0,
    url ='',
    alt ='',
    ttl ='',
    sz ='',
    w ='',
    h ='',
}

map(obj, (currentValue, currentKey) => ( { value: key, label: key } ))
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/*Library*/
import classnames from 'classnames';
import { BsImage, BsTrash } from 'react-icons/bs';
import { isEmpty, map, reduce } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcImg from '../../atoms/img';
import AtrcPanelTools from '../panel-tools';
import AtrcNotice from '../notice';
import AtrcPanelRow from '../panel-row';
import AtrcTooltip from '../tooltip';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var SelfHostedImg = function SelfHostedImg(props) {
  var isFirstRender = useRef(true);
  if (!(typeof wp !== 'undefined' && wp.media)) {
    return /*#__PURE__*/React.createElement(AtrcNotice, null, __('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc'));
  }
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$frm = value.frm,
    frm = _value$frm === void 0 ? '' : _value$frm,
    _value$id = value.id,
    id = _value$id === void 0 ? null : _value$id,
    _value$sizes = value.sizes,
    sizes = _value$sizes === void 0 ? null : _value$sizes,
    _value$srcset = value.srcset,
    srcset = _value$srcset === void 0 ? '' : _value$srcset,
    _value$alt = value.alt,
    alt = _value$alt === void 0 ? null : _value$alt,
    _value$ttl = value.ttl,
    ttl = _value$ttl === void 0 ? null : _value$ttl,
    _value$sz = value.sz,
    sz = _value$sz === void 0 ? 'full' : _value$sz,
    _value$w = value.w,
    w = _value$w === void 0 ? null : _value$w,
    _value$h = value.h,
    h = _value$h === void 0 ? null : _value$h,
    _value$url = value.url,
    url = _value$url === void 0 ? '' : _value$url;

  /* for local management */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    media = _useState2[0],
    setMedia = _useState2[1];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState3 = useState(sz),
    _useState4 = _slicedToArray(_useState3, 2),
    imgSz = _useState4[0],
    setImgSize = _useState4[1];

  /* On change handler */
  var setAttrs = function setAttrs(newVals) {
    var valueCloned = Object.assign({}, value);
    onChange(_objectSpread(_objectSpread({}, valueCloned), newVals));
  };

  /* Run at first, only once for first time*/
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(function () {
    if (id && !media) {
      /* Need to use wp.media becuase const { getMedia } = select(coreStore); doesnot provide same and alos required properties */
      wp.media.attachment(id).fetch({
        success: function success(attachment) {
          if (attachment.attributes) {
            setMedia(attachment.attributes);
          }
        }
      });
    }
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var imageSizes = useSelect(function (select) {
    var settings = select(blockEditorStore).getSettings();
    return id && '' === frm ? settings.imageSizes : null;
  }, [id, frm]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var imageSizesOptions = useMemo(function () {
    if (media && media.sizes) {
      var keyValues = reduce(imageSizes, function (accumulator, _ref) {
        var name = _ref.name,
          slug = _ref.slug;
        accumulator[slug] = {
          value: slug,
          label: name
        };
        return accumulator;
      }, {});
      return {
        keys: Object.keys(keyValues),
        options: reduce(media.sizes, function (accumulator, currentValue, currentKey) {
          if (keyValues[currentKey]) {
            accumulator.push(keyValues[currentKey]);
          } else {
            accumulator.push({
              value: currentKey,
              label: currentKey
            });
          }
          return accumulator;
        }, [])
      };
    }
    return null;
  }, [imageSizes, media]);

  /* set attributes when media change */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(function () {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (!media || !media.id) {
        return;
      }
      var newVals = {
        id: media.id
      };
      var mediaSize = imgSz;
      if (!mediaSize) {
        mediaSize = 'full';
      }
      if (media.sizes && media.sizes[mediaSize] && media.sizes[mediaSize].url) {
        newVals.url = media.sizes && media.sizes[mediaSize] && media.sizes[mediaSize].url ? media.sizes[mediaSize].url : media.url;
      } else {
        newVals.url = media.url;
      }
      if (media.sizes[mediaSize]) {
        var _media$sizes$mediaSiz = media.sizes[mediaSize],
          width = _media$sizes$mediaSiz.width,
          height = _media$sizes$mediaSiz.height,
          abSrcset = _media$sizes$mediaSiz.abSrcset;
        newVals.w = width + 'px';
        newVals.h = height + 'px';
        newVals.srcset = abSrcset;
        newVals.sizes = "(max-width: ".concat(width, "px) 100vw, ").concat(width, "px)");
      }
      newVals.alt = media.alt;
      newVals.ttl = media.title;
      newVals.sz = mediaSize;
      setAttrs(newVals);
    }
  }, [media, imgSz]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-img-slf-hosted'), 'at-pos', 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    src: url,
    alt: alt,
    title: ttl,
    sizes: sizes,
    srcset: srcset,
    width: w,
    height: h
  }), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: setMedia,
    allowedTypes: ['image', 'video'],
    title: __('Select or upload background media', 'atrc-prefix-atrc'),
    value: id,
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "uploads",
        className: classnames('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
        onClick: open
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsImage
      }), id ? __('Replace media', 'atrc-prefix-atrc') : __('Add media', 'atrc-prefix-atrc')), id ? /*#__PURE__*/React.createElement(AtrcTooltip, {
        className: classnames(AtrcPrefix('uploads-del'), 'at-pos'),
        text: __('Remove media', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        className: classnames('at-bdr-rad', 'at-flx', 'at-w', 'at-h', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
        variant: "delete",
        onClick: function onClick() {
          return setAttrs({
            id: null,
            url: null
          });
        }
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsTrash
      }))) : null);
    }
  })), imageSizesOptions && imageSizesOptions.options ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Image size', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: sz,
    defaultValue: "full",
    options: imageSizesOptions.options,
    onChange: setImgSize
  })) : null)));
};
var ExternalImg = function ExternalImg(props) {
  var _props$value2 = props.value,
    value = _props$value2 === void 0 ? {} : _props$value2,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2;
  var _value$frm2 = value.frm,
    frm = _value$frm2 === void 0 ? '' : _value$frm2,
    _value$url2 = value.url,
    url = _value$url2 === void 0 ? '' : _value$url2,
    _value$alt2 = value.alt,
    alt = _value$alt2 === void 0 ? '' : _value$alt2,
    _value$ttl2 = value.ttl,
    ttl = _value$ttl2 === void 0 ? '' : _value$ttl2;
  if (frm === '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-img-ext'))
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    className: classnames('at-m'),
    src: url,
    alt: alt,
    title: ttl
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Image URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  })));
};
var ImgDetails = function ImgDetails(props) {
  var _props$value3 = props.value,
    value = _props$value3 === void 0 ? {} : _props$value3,
    _props$onChange3 = props.onChange,
    _onChange = _props$onChange3 === void 0 ? function () {} : _props$onChange3;
  var _value$alt3 = value.alt,
    alt = _value$alt3 === void 0 ? '' : _value$alt3,
    _value$ttl3 = value.ttl,
    ttl = _value$ttl3 === void 0 ? '' : _value$ttl3;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-img-img-details'))
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Image details', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Alt text', 'atrc-prefix-atrc'),
    value: alt,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'alt');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Title', 'atrc-prefix-atrc'),
    value: ttl,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'ttl');
    }
  })));
};
var ImgSettings = function ImgSettings(props) {
  var _props$value4 = props.value,
    value = _props$value4 === void 0 ? {} : _props$value4,
    _props$onChange4 = props.onChange,
    onChange = _props$onChange4 === void 0 ? function () {} : _props$onChange4,
    _props$allowDetails = props.allowDetails,
    allowDetails = _props$allowDetails === void 0 ? true : _props$allowDetails;
  var resetDetails = function resetDetails() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.alt;
    delete valueCloned.ttl;
    onChange(valueCloned);
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'details') {
      return !!(value.alt || value.ttl);
    }
    return false;
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowDetails) {
      tabs.push({
        name: 'details',
        title: __('Image details', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('details'),
        onDeselect: function onDeselect() {
          return resetDetails();
        }
      });
    }
    return tabs;
  }, []);
  if (!allowDetails) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Settings', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('details' === tab) {
        return /*#__PURE__*/React.createElement(ImgDetails, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      return null;
    });
  });
};
var AtrcControlImg = function AtrcControlImg(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value5 = props.value,
    value = _props$value5 === void 0 ? {} : _props$value5,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange5 = props.onChange,
    onChange = _props$onChange5 === void 0 ? function () {} : _props$onChange5,
    _props$allowSource = props.allowSource,
    allowSource = _props$allowSource === void 0 ? true : _props$allowSource,
    _props$allowSelf = props.allowSelf,
    allowSelf = _props$allowSelf === void 0 ? true : _props$allowSelf,
    _props$allowExternal = props.allowExternal,
    allowExternal = _props$allowExternal === void 0 ? true : _props$allowExternal,
    _props$allowDetails2 = props.allowDetails,
    allowDetails = _props$allowDetails2 === void 0 ? true : _props$allowDetails2,
    _props$allowSettings = props.allowSettings,
    allowSettings = _props$allowSettings === void 0 ? true : _props$allowSettings,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$frm3 = value.frm,
    frm = _value$frm3 === void 0 ? '' : _value$frm3;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setExternal = function setExternal(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.id;
    delete valueCloned.sz;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-img'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-img') + '-' + variant : '')
  }, defaultProps), label && /*#__PURE__*/React.createElement(AtrcLabel, null, label), allowSource && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Image source', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: frm,
    options: [{
      label: __('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('External', 'atrc-prefix-atrc'),
      value: 'ext'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'frm');
    }
  })), allowSelf && '' === frm ? /*#__PURE__*/React.createElement(SelfHostedImg, {
    value: value,
    onChange: onChange
  }) : null, allowExternal && 'ext' === frm ? /*#__PURE__*/React.createElement(ExternalImg, {
    value: value,
    onChange: setExternal
  }) : null, allowSettings && 'ext' === frm && (value.id || value.url) ? /*#__PURE__*/React.createElement(ImgSettings, {
    value: value,
    onChange: onChange,
    allowDetails: allowDetails
  }) : null);
};
export default AtrcControlImg;
//# sourceMappingURL=index.js.map