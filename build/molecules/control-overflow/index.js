function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcControlSelectDevice from '../control-select-device';
import AtrcPanelTools from '../panel-tools';
import OverflowOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcOverflowControl = props => {
  const {
    label = '',
    className = '',
    variant = '',
    value = {},
    onChange = () => {},
    ...defaultProps
  } = props;
  const OverflowTabs = useMemo(() => {
    return [{
      name: 'ovf',
      title: label,
      hasValue: !isEmpty(value),
      onDeselect: () => onChange({})
    }];
  }, [value]);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-ovf'), className, variant ? AtrcPrefix('ctrl-ovf') + '-' + variant : ''),
    label: label,
    resetAll: () => onChange({}),
    tools: OverflowTabs
  }, activeItems => map(activeItems, (item, iDx) => /*#__PURE__*/React.createElement(AtrcControlSelectDevice, _extends({
    label: __('Overflow', 'atrc-prefix-atrc'),
    options: OverflowOptions,
    value: value,
    onChange: onChange,
    key: iDx
  }, defaultProps))));
};
export default AtrcOverflowControl;
//# sourceMappingURL=index.js.map