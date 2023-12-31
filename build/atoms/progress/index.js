function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { forwardRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../wrap';
import AtrcIsGradientColor from '../../utils/is-gradient-color';
import { AtrcIsLinearGradientColor } from '../../utils/is-gradient-color';
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcProgressSvgGradientColor = ({
  gradient,
  uniqueId
}) => {
  // Extracting the degree value
  if (!gradient.includes('linear') || !gradient.match(/(\d+)deg/)) {
    return null;
  }
  const deg = gradient.match(/(\d+)deg/)[1];

  // Extracting the color stops
  const colorStopRegex = /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\s*\)\s*(\d+%)/g;
  const colorStops = [];
  let match;
  while ((match = colorStopRegex.exec(gradient)) !== null) {
    const [, r, g, b, a, offset] = match;
    const colorValues = [r, g, b];
    if (a !== undefined) {
      colorValues.push(a);
    }
    colorStops.push({
      offset,
      color: `rgba(${colorValues.join(', ')})`
    });
  }

  // Creating the object.
  const gradientObject = {
    deg: `rotate(${deg})`,
    colors: colorStops
  };
  return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: 'at-lg-' + uniqueId,
    gradientTransform: `${gradientObject.deg}`
  }, gradientObject.colors.map((item, iDx) => /*#__PURE__*/React.createElement("stop", {
    key: iDx,
    offset: item.offset,
    stopColor: item.color
  }))));
};
const AtrcProgress = (props, ref) => {
  const {
    className = '',
    type = '',
    variant = '',
    barColor = '',
    uniqueId = '',
    hasAnimation = '',
    children = '',
    ...defaultProps
  } = props;
  if ('cir' === type) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      className: classnames('at-prog', 'at-prog-cir', className, variant ? AtrcPrefix('prog') + '-' + variant : ''),
      ref: ref
    }, defaultProps), /*#__PURE__*/React.createElement("svg", {
      className: "at-svg at-w at-h",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-1 -1 34 34"
    }, AtrcIsLinearGradientColor(barColor) ? /*#__PURE__*/React.createElement(AtrcProgressSvgGradientColor, {
      gradient: barColor,
      uniqueId: uniqueId
    }) : null, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.9155",
      className: classnames('at-svg-cir', 'at-prog-cir__trk')
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.9155",
      className: classnames('at-svg-cir', 'at-prog-cir__bar', hasAnimation ? 'at-prog-cir__bar-ani' : null)
    })), children ? /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-prog-cir-txt at-pos"
    }, children) : null);
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames('at-prog', 'at-prog-hor', className, variant ? AtrcPrefix('prog') + '-' + variant : ''),
    ref: ref
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-prog-bar at-ovf at-h at-w at-trs', AtrcIsGradientColor(barColor) ? 'at-bg-img' : 'at-bg-cl')
  }, children));
};
export default forwardRef(AtrcProgress);
//# sourceMappingURL=index.js.map