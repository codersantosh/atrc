var _excluded = ["label", "value", "variant", "className", "type", "onChange", "allowSource", "allowSelf", "allowExternal"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
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
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import classnames from 'classnames';
import { BsFile, BsX } from 'react-icons/bs';
import { cloneDeep, omit } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcFile from '../../atoms/file';
import AtrcNotice from '../notice';
import AtrcButtonGroup from '../button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

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
    return /*#__PURE__*/React.createElement(AtrcNotice, null, __('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc'));
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var frameProps = useMemo(function () {
    if (props.frameProps) {
      return props.frameProps;
    }
    return {
      title: __('Select or upload file', 'atrc-prefix-atrc'),
      button: {
        text: __('Select', 'atrc-prefix-atrc')
      },
      multiple: false,
      library: {
        type: 'image'
      }
    };
  }, []);
  var openMediaUploadFrame = function openMediaUploadFrame() {
    var frame = wp.media(cloneDeep(frameProps));
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
  var files = useSelect(function (select) {
    var _select = select(coreStore),
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
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('control-file-self-hosted'))
  }, !['urlOnly', 'buttonOnly'].includes(type) ? files.map(function (obj, key) {
    return /*#__PURE__*/React.createElement(AtrcFile, {
      src: obj.url,
      key: key
    });
  }) : null, /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, _extends({
    variant: "primary",
    className: classnames('at-gap at-flx at-flx-al-itm-ctr'),
    onClick: openMediaUploadFrame
  }, omit(addButtonProps, 'text')), /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsFile
  }), addButtonProps.text ? addButtonProps.text :
  // eslint-disable-next-line no-nested-ternary
  data.length > 0 ? frameProps.multiple ? __('Replace files', 'atrc-prefix-atrc') : __('Replace file', 'atrc-prefix-atrc') : frameProps.multiple ? __('Add files', 'atrc-prefix-atrc') : __('Add file', 'atrc-prefix-atrc')), !['urlOnly', 'buttonOnly'] && data.length > 0 ? /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "uploads",
    onClick: function onClick() {
      var newProps = {
        frm: value.frm || '',
        data: []
      };
      onChange(newProps);
    }
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5')),
    type: "bootstrap",
    icon: BsX
  }), frameProps.multiple ? __('Reset files', 'atrc-prefix-atrc') : __('Remove file', 'atrc-prefix-atrc')) : null));
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
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-file-ext'))
  }, /*#__PURE__*/React.createElement(AtrcFile, {
    src: url
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('File URL', 'atrc-prefix-atrc'),
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
  var _useState = useState(value.frm),
    _useState2 = _slicedToArray(_useState, 2),
    frm = _useState2[0],
    setMediaFrom = _useState2[1];
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    if ('frm' === type) {
      setMediaFrom(newVal);
    }
    _onChange(valueCloned);
  };
  var setExternal = function setExternal(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.id;
    delete valueCloned.size;
    delete valueCloned.url;
    valueCloned.url = newVal;
    _onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-file'), className, variant ? AtrcPrefix('ctrl-file') + '-' + variant : '', 'urlOnly' === type ? 'at-flx at-al-itm-end at-jfy-cont-btw at-gap' : '')
  }, defaultProps), !['urlOnly', 'buttonOnly'].includes(type) && label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, ['urlOnly'].includes(type) ? /*#__PURE__*/React.createElement(AtrcText, {
    label: label,
    value: value && value.data && value.data[0] && value.data[0].url,
    type: "url",
    onChange: function onChange(newVal) {
      var valueCloned = cloneDeep(value);
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
      className: classnames('at-gap', 'at-flx-grw-1')
    }
  }) : null, !['urlOnly', 'buttonOnly'].includes(type) && allowSource ? /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('File source', 'atrc-prefix-atrc'),
    value: frm,
    options: [{
      label: __('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('External', 'atrc-prefix-atrc'),
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
export default AtrcControlFile;
//# sourceMappingURL=index.js.map