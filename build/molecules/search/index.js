function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { SearchControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components and Functions*/
const AtrcSearchBtn = props => {
  const {
    doSearch,
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcButton, _extends({}, defaultProps, {
    onClick: () => doSearch(),
    className: classnames(className, AtrcPrefix('btn-search'), 'at-m')
  }));
};
const AtrcSearch = props => {
  const {
    type = '',
    className = '',
    variant = '',
    placeholder = '',
    value = '',
    doSearch = '',
    allowButton = true,
    buttonProps = {},
    wrapProps = {}
  } = props;
  const [input, setInput] = useState(value);
  /*Run only once on mount*/
  useEffect(() => {
    if ('keyDown' === type) {
      doSearch(input);
    }
  }, [input]);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, wrapProps, {
    className: classnames(AtrcPrefix('search-wrp'), wrapProps.className ? wrapProps.className : '', 'at-flx', 'at-al-itm-ctr')
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx-grow-1'),
    variant: "input-box"
  }, /*#__PURE__*/React.createElement(SearchControl, {
    className: classnames(AtrcPrefix('search'), className, variant ? AtrcPrefix('search') + '-' + variant : ''),
    placeholder: placeholder || __('Search', 'atrc-prefix-atrc'),
    value: input,
    onChange: setInput,
    onKeyDown: e => {
      if (e.keyCode === 13) {
        doSearch(input);
      }
    }
  })), allowButton ? /*#__PURE__*/React.createElement(AtrcSearchBtn, _extends({
    doSearch: () => doSearch(input),
    children: __('Search', 'atrc-prefix-atrc')
  }, buttonProps)) : null);
};
export default AtrcSearch;
//# sourceMappingURL=index.js.map