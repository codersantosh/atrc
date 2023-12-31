/*Attributes Structure
 Type Object
 {
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",

    "type":"",
    "on3D":"",
    "ppv":"",

    "translX":"",
    "translY":"",
    "rotX":"",
    "rotY":"",
    "sclX":"",
    "sclY":"",
    "skewX":"",
    "skewY":"",
    "orgX":"",
    "orgY":"",
    "opa":"",
    "blr":"",
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, reduce, filter, keys, merge, pick, isArray } from 'lodash';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcToggle from '../../atoms/toggle';
import AtrcControlUnit from '../../atoms/control-unit';
import AtrcControlAnimationAnimateCss from './../control-animation-animate-css';
import AtrcControlTransform from './../control-transform';
import AtrcNotice from './../notice';
import AtrcPanelTools from './../panel-tools';

/*Local Components*/

/*same for initial and new*/
const mappingPredefinedValues = value => {
  const allowedProperties = keys({
    ani: 0,
    dla: 0,
    dur: 0,
    iter: 0
  });
  return value ? reduce(filter(keys(value), prop => allowedProperties.includes(prop)), (obj, prop) => ({
    ...obj,
    [prop]: value[prop]
  }), {}) : {};
};

/*same for initial and new*/
const allowedProperties = keys({
  ani: 0,
  dla: 0,
  dur: 0,
  iter: 0,
  type: 0,
  on3D: 0,
  ppv: 0,
  translX: 0,
  translY: 0,
  translZ: 0,
  rotX: 0,
  rotY: 0,
  rotZ: 0,
  sclX: 0,
  sclY: 0,
  sclZ: 0,
  skewX: 0,
  skewY: 0,
  opa: 0,
  blr: 0
});
const mappingNewStyleInitialValues = value => {
  return value ? reduce(filter(keys(value), prop => allowedProperties.includes(prop)), (obj, prop) => ({
    ...obj,
    [prop]: value[prop]
  }), {}) : {};
};
const updateValueProps = (newVal, value) => {
  if (!newVal || isEmpty(newVal)) {
    return {};
  }
  const updatedValue = merge({}, value, newVal);
  return pick(updatedValue, allowedProperties);
};
const CustomAnimation = ({
  label = '',
  value,
  onChange,
  resetCustom
}) => {
  const setNewStyleValuesAttr = newVal => {
    const newValues = updateValueProps(newVal, value);
    onChange(newValues);
  };
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcToggle, {
    label: __('Use 3D Transforms', 'atrc-prefix-atrc'),
    checked: value && value.on3D,
    onChange: () => setAttr(!(value && value.on3D), 'on3D')
  }), value && value.on3D ? /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Perspective', 'atrc-prefix-atrc'),
    value: value && value.ppv,
    onChange: newVal => setAttr(newVal, 'ppv')
  }) : null, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Type', 'atrc-prefix-atrc'),
    value: value && value.type,
    options: [{
      label: __('Visible on scroll', 'atrc-prefix-atrc'),
      value: 'visible'
    }, {
      label: __('Progressive on scroll', 'atrc-prefix-atrc'),
      value: 'progressive'
    }],
    onChange: newVal => setAttr(newVal, 'type')
  }), /*#__PURE__*/React.createElement(AtrcControlTransform, {
    label: 'progressive' === value.type ? __('Final transform', 'atrc-prefix-atrc') : __('New transform', 'atrc-prefix-atrc'),
    value: mappingNewStyleInitialValues(value),
    onChange: setNewStyleValuesAttr,
    allow3D: value && value.on3D,
    allowExtra: true
  }), /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false,
    autoDismiss: false
  }, __('Optional:', 'atrc-prefix-atrc'), 'progressive' === value.type ? __('For initial transformation, use the transform options.', 'atrc-prefix-atrc') : __('For a smooth transformation, use the transition options.', 'atrc-prefix-atrc')));
};
const RenderTabPanel = ({
  label = '',
  value,
  onChange,
  tab = 'predefined',
  resetCustom
}) => {
  if ('predefined' === tab) {
    return /*#__PURE__*/React.createElement(AtrcControlAnimationAnimateCss, {
      label: label,
      value: mappingPredefinedValues(value),
      onChange: onChange
    });
  }
  return /*#__PURE__*/React.createElement(CustomAnimation, {
    label: label,
    value: value,
    onChange: onChange,
    resetCustom: resetCustom
  });
};
const AtrcControlAnimationScroll = props => {
  const {
    label = '',
    value = {},
    variant = '',
    className = '',
    onChange = () => {},
    allowedOptions = true
  } = props;
  const doResetPredefined = valueCloned => {
    delete valueCloned.ani;
    delete valueCloned.dla;
    delete valueCloned.dur;
    delete valueCloned.iter;
    return valueCloned;
  };
  const doResetCustom = valueCloned => {
    delete valueCloned.type;
    delete valueCloned.on3D;
    delete valueCloned.ppv;
    delete valueCloned.translX;
    delete valueCloned.translY;
    delete valueCloned.translZ;
    delete valueCloned.rotX;
    delete valueCloned.rotY;
    delete valueCloned.rotZ;
    delete valueCloned.sclX;
    delete valueCloned.sclY;
    delete valueCloned.sclZ;
    delete valueCloned.skewX;
    delete valueCloned.skewY;
    delete valueCloned.opa;
    delete valueCloned.blr;
    return valueCloned;
  };
  const setPredefinedAttr = newVal => {
    const changedValues = mappingPredefinedValues(newVal);
    onChange(changedValues);
  };
  const setCustomAttr = newVal => {
    onChange(newVal);
  };
  const resetPredefined = () => {
    const valueCloned = Object.assign({}, value);
    onChange(doResetPredefined(valueCloned));
  };
  const resetCustom = () => {
    const valueCloned = Object.assign({}, value);
    onChange(doResetCustom(valueCloned));
  };
  const resetAll = () => {
    onChange({});
  };
  const hasTabValue = tab => {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'predefined') {
      return !!(value.ani || value.dla || value.dur || value.iter);
    }
    return !!(value.type || value.on3D || value.ppv || value.translX || value.translY || value.translZ || value.rotX || value.rotY || value.rotZ || value.sclX || value.sclY || value.sclZ || value.skewX || value.skewY || value.opa || value.blr);
  };
  const AllTabs = useMemo(() => {
    const tabsOptions = [];
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('predefined')) {
      tabsOptions.push({
        name: 'predefined',
        title: __('Predefined', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('predefined'),
        onDeselect: () => resetPredefined()
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('custom')) {
      tabsOptions.push({
        name: 'custom',
        title: __('Custom', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('custom'),
        onDeselect: () => resetCustom()
      });
    }
    return tabsOptions;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-ani-scr'), className, variant ? AtrcPrefix('ctrl-ani-scr') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    isRadio: true,
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => /*#__PURE__*/React.createElement(RenderTabPanel, {
    value: value,
    onChange: newVal => {
      if ('predefined' === tab) {
        setPredefinedAttr(newVal);
      } else {
        setCustomAttr(newVal);
      }
    },
    tab: tab,
    resetCustom: resetCustom,
    key: iDx
  })));
};
export default AtrcControlAnimationScroll;
//# sourceMappingURL=index.js.map