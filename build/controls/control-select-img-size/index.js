function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React from 'react';

/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/*Library*/
import { map } from 'lodash';
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelect from '../control-select';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Local*/
function AtrcControlSelectImgSize(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Image size', 'atrc-prefix-atrc') : _props$label,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? true : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? 0 : _props$optionNoneValu,
    _props$optionNoneLabe = props.optionNoneLabel,
    optionNoneLabel = _props$optionNoneLabe === void 0 ? __('Select', 'atrc-prefix-atrc') : _props$optionNoneLabe,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps;
  var _useSelect = useSelect(function (select) {
      var settings = select(blockEditorStore).getSettings();
      return {
        imageSizes: settings.imageSizes
      };
    }, []),
    imageSizes = _useSelect.imageSizes;
  var imageSizesOptions = useMemo(function () {
    if (imageSizes) {
      return map(imageSizes, function (_ref) {
        var name = _ref.name,
          slug = _ref.slug;
        return {
          value: slug,
          label: name
        };
      });
    }
    return [];
  }, [imageSizes]);
  if (showOptionNone) {
    imageSizesOptions = [{
      value: optionNoneValue,
      label: optionNoneLabel
    }].concat(_toConsumableArray(imageSizesOptions));
  }
  return /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-img-sz'), className, variant ? AtrcPrefix('ctrl-select-img-sz') + '-' + variant : ''),
    value: value,
    options: imageSizesOptions,
    onChange: onChange,
    wrapProps: wrapProps
  });
}
export default AtrcControlSelectImgSize;
//# sourceMappingURL=index.js.map