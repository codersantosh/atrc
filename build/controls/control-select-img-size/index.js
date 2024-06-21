function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      label: __('Select', 'atrc-prefix-atrc')
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