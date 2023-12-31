function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
 Type Object
 {
on
url
tgt
ttl
rel
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcText from '../../atoms/text';
import AtrcToggle from '../../atoms/toggle';
import AtrcPrefix from '../../prefix-vars';
import AtrcPanelRow from '../panel-row';

/*Local Components*/
const AtrcControlLink = props => {
  const {
    label = '',
    className = '',
    variant = '',
    value = {},
    onChange = () => {},
    allowOn = false,
    allowUrl = true,
    allowTitle = true,
    allowTarget = true,
    allowRel = false,
    ...defaultProps
  } = props;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    if (newVal) {
      valueCloned[type] = newVal;
    } else {
      delete valueCloned[type];
    }
    onChange(valueCloned);
  };
  const isAllowField = ({
    fieldType = ''
  }) => {
    if (allowOn) {
      if (!value || !value.on) {
        return false;
      }
    }
    if (allowUrl && 'url' === fieldType) {
      return true;
    }
    if (allowTitle && 'ttl' === fieldType) {
      return true;
    }
    if (allowTarget && 'tgt' === fieldType) {
      return true;
    }
    if (allowRel && 'rel' === fieldType) {
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(AtrcLabel, {
    className: classnames(AtrcPrefix('m-0'))
  }, label), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-link'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-link') + '-' + variant : '')
  }, defaultProps), allowOn && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcToggle, {
    label: __('Allow link', 'atrc-prefix-atrc'),
    checked: value && value.on,
    onChange: () => {
      let newVal = true;
      if (value && value.on) {
        newVal = false;
      }
      setAttr(newVal, 'on');
    }
  })), isAllowField({
    fieldType: 'url'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('URL', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value.url,
    type: "url",
    onChange: newVal => setAttr(newVal, 'url')
  })), isAllowField({
    fieldType: 'ttl'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Title', 'atrc-prefix-atrc'),
    value: value.ttl,
    type: "text",
    onChange: newVal => setAttr(newVal, 'ttl')
  })), isAllowField({
    fieldType: 'tgt'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcToggle, {
    label: __('Open in new tab', 'atrc-prefix-atrc'),
    checked: value && value.tgt === '_blank',
    onChange: () => {
      let newVal = '';
      if (value && value.tgt === '' || !value || !value.tgt) {
        newVal = '_blank';
      }
      setAttr(newVal, 'tgt');
    }
  })), isAllowField({
    fieldType: 'rel'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Relation', 'atrc-prefix-atrc'),
    value: value.rel,
    type: "text",
    onChange: newVal => setAttr(newVal, 'rel')
  })))));
};
export default AtrcControlLink;
//# sourceMappingURL=index.js.map