"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _coreData = require("@wordpress/core-data");
var _classnames = _interopRequireDefault(require("classnames"));
var _bs = require("react-icons/bs");
var _lodash = require("lodash");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _select2 = _interopRequireDefault(require("../../atoms/select"));
var _text = _interopRequireDefault(require("../../atoms/text"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _file = _interopRequireDefault(require("../../atoms/file"));
var _notice = _interopRequireDefault(require("../notice"));
var _buttonGroup = _interopRequireDefault(require("../button-group"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "value", "variant", "className", "type", "onChange", "allowSource", "allowSelf", "allowExternal"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /*Attributes Structure
Type Object
{
    frm = '',
	data=[
		{
			id:'',
			url:'',
		},
		{
			id:'',
			url:'',
		}
	]
}

map(obj, (currentValue, currentKey) => ( { value: key, label: key } ))

wp_enqueue_media(); is needed to work this
* */ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Prefix*/
/*Local*/
var SelfHostedFile = function SelfHostedFile(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type,
    _props$value = props.value,
    value = _props$value === void 0 ? {
      frm: '',
      data: []
    } : _props$value,
    _props$addButtonProps = props.addButtonProps,
    addButtonProps = _props$addButtonProps === void 0 ? {} : _props$addButtonProps,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$frm = value.frm,
    frm = _value$frm === void 0 ? '' : _value$frm,
    _value$data = value.data,
    data = _value$data === void 0 ? [] : _value$data;
  if (!(typeof wp !== 'undefined' && wp.media)) {
    return /*#__PURE__*/React.createElement(_notice.default, null, (0, _i18n.__)('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc'));
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var frameProps = (0, _element.useMemo)(function () {
    if (props.frameProps) {
      return props.frameProps;
    }
    return {
      title: (0, _i18n.__)('Select or upload file', 'atrc-prefix-atrc'),
      button: {
        text: (0, _i18n.__)('Select', 'atrc-prefix-atrc')
      },
      multiple: false,
      library: {
        type: 'image'
      }
    };
  }, []);
  var openMediaUploadFrame = function openMediaUploadFrame() {
    var frame = wp.media((0, _lodash.cloneDeep)(frameProps));
    frame.on('select', function () {
      var attachments = frame.state().get('selection').toJSON();
      setMedia(attachments);
    });
    frame.open();
  };
  var setMedia = function setMedia(media) {
    if (!media || !media[0].id) {
      return;
    }
    var newProps = {
      frm: value.frm || '',
      data: []
    };
    if (frameProps.multiple) {
      newProps.data = media.slice(0);
    } else {
      newProps.data.push(media[0]);
    }
    onChange(newProps);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var files = (0, _data.useSelect)(function (select) {
    var _select = select(_coreData.store),
      getMedia = _select.getMedia;
    return data && '' === frm ? data.map(function (obj) {
      return getMedia(obj.id, {
        context: 'view'
      });
    }) : null;
  }, [data, frm]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('control-file-self-hosted'))
  }, !['urlOnly', 'buttonOnly'].includes(type) ? files.map(function (obj, key) {
    return /*#__PURE__*/React.createElement(_file.default, {
      src: obj.url,
      key: key
    });
  }) : null, /*#__PURE__*/React.createElement(_buttonGroup.default, null, /*#__PURE__*/React.createElement(_button.default, _extends({
    variant: "primary",
    className: (0, _classnames.default)('at-gap at-flx at-flx-al-itm-ctr'),
    onClick: openMediaUploadFrame
  }, (0, _lodash.omit)(addButtonProps, 'text')), /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsFile
  }), addButtonProps.text ? addButtonProps.text :
  // eslint-disable-next-line no-nested-ternary
  data.length > 0 ? frameProps.multiple ? (0, _i18n.__)('Replace files', 'atrc-prefix-atrc') : (0, _i18n.__)('Replace file', 'atrc-prefix-atrc') : frameProps.multiple ? (0, _i18n.__)('Add files', 'atrc-prefix-atrc') : (0, _i18n.__)('Add file', 'atrc-prefix-atrc')), !['urlOnly', 'buttonOnly'] && data.length > 0 ? /*#__PURE__*/React.createElement(_button.default, {
    variant: "uploads",
    onClick: function onClick() {
      var newProps = {
        frm: value.frm || '',
        data: []
      };
      onChange(newProps);
    }
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-5')),
    type: "bootstrap",
    icon: _bs.BsX
  }), frameProps.multiple ? (0, _i18n.__)('Reset files', 'atrc-prefix-atrc') : (0, _i18n.__)('Remove file', 'atrc-prefix-atrc')) : null));
};
var ExternalFile = function ExternalFile(props) {
  var _props$value2 = props.value,
    value = _props$value2 === void 0 ? {} : _props$value2,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2;
  var _value$frm2 = value.frm,
    frm = _value$frm2 === void 0 ? '' : _value$frm2,
    _value$url = value.url,
    url = _value$url === void 0 ? '' : _value$url;
  if (frm === '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-file-ext'))
  }, /*#__PURE__*/React.createElement(_file.default, {
    src: url
  }), /*#__PURE__*/React.createElement(_text.default, {
    label: (0, _i18n.__)('File URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  }));
};
var AtrcControlFile = function AtrcControlFile(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value3 = props.value,
    value = _props$value3 === void 0 ? {} : _props$value3,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type2 = props.type,
    type = _props$type2 === void 0 ? '' : _props$type2,
    _props$onChange3 = props.onChange,
    _onChange = _props$onChange3 === void 0 ? function () {} : _props$onChange3,
    _props$allowSource = props.allowSource,
    allowSource = _props$allowSource === void 0 ? true : _props$allowSource,
    _props$allowSelf = props.allowSelf,
    allowSelf = _props$allowSelf === void 0 ? true : _props$allowSelf,
    _props$allowExternal = props.allowExternal,
    allowExternal = _props$allowExternal === void 0 ? true : _props$allowExternal,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _element.useState)(value.frm),
    _useState2 = _slicedToArray(_useState, 2),
    frm = _useState2[0],
    setMediaFrom = _useState2[1];
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = (0, _lodash.cloneDeep)(value);
    valueCloned[type] = newVal;
    if ('frm' === type) {
      setMediaFrom(newVal);
    }
    _onChange(valueCloned);
  };
  var setExternal = function setExternal(newVal) {
    var valueCloned = (0, _lodash.cloneDeep)(value);
    delete valueCloned.id;
    delete valueCloned.size;
    delete valueCloned.url;
    valueCloned.url = newVal;
    _onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-file'), className, variant ? (0, _prefixVars.default)('ctrl-file') + '-' + variant : '', 'urlOnly' === type ? 'at-flx at-al-itm-end at-jfy-cont-btw at-gap' : '')
  }, defaultProps), !['urlOnly', 'buttonOnly'].includes(type) && label ? /*#__PURE__*/React.createElement(_label.default, null, label) : null, ['urlOnly'].includes(type) ? /*#__PURE__*/React.createElement(_text.default, {
    label: label,
    value: value && value.data && value.data[0] && value.data[0].url,
    type: "url",
    onChange: function onChange(newVal) {
      var valueCloned = (0, _lodash.cloneDeep)(value);
      if (!('frm' in valueCloned)) {
        valueCloned.frm = '';
      }
      if (!('data' in valueCloned)) {
        valueCloned.data = [];
      }
      if (!valueCloned.data[0]) {
        valueCloned.data[0] = {};
      }
      valueCloned.data[0].url = newVal;
      _onChange(valueCloned);
    },
    resetProps: {
      className: (0, _classnames.default)('at-gap', 'at-flx-grw-1')
    }
  }) : null, !['urlOnly', 'buttonOnly'].includes(type) && allowSource ? /*#__PURE__*/React.createElement(_select2.default, {
    label: (0, _i18n.__)('File source', 'atrc-prefix-atrc'),
    value: frm,
    options: [{
      label: (0, _i18n.__)('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: (0, _i18n.__)('External', 'atrc-prefix-atrc'),
      value: 'external'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'frm');
    }
  }) : null, allowSelf ? /*#__PURE__*/React.createElement(SelfHostedFile, _extends({
    value: value,
    onChange: _onChange,
    type: type
  }, defaultProps)) : null, allowExternal ? /*#__PURE__*/React.createElement(ExternalFile, {
    value: value,
    onChange: setExternal
  }) : null);
};
var _default = exports.default = AtrcControlFile;
//# sourceMappingURL=index.js.map