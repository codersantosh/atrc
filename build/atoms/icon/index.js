function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { Icon } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcIconWp = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Icon, _extends({
    className: classnames('at-svg', className, variant ? AtrcPrefix('svg') + '-' + variant : '')
  }, defaultProps));
};
const AtrcIconTag = props => {
  const {
    icon,
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  const IconTag = icon;
  return /*#__PURE__*/React.createElement(IconTag, _extends({
    className: classnames('at-svg', className, variant ? AtrcPrefix('svg') + '-' + variant : '')
  }, defaultProps));
};
const AtrcIconUrl = props => {
  const {
    iconUrl,
    ...defaultProps
  } = props;
  const [icon, setIcon] = useState();
  useEffect(() => {
    async function fetchIcon() {
      const url = new URL(iconUrl);
      if (!url.pathname.endsWith('.svg')) {
        setIcon({
          error: true,
          msg: __('Error: Icon url should contain .svg extension', 'atrc-prefix-atrc')
        });
        return;
      }
      try {
        const response = await fetch(iconUrl);
        const data = await response.text();
        setIcon(data);
      } catch (error) {
        setIcon({
          error: true,
          msg: error.message || __('Error on icon url', 'atrc-prefix-atrc')
        });
      }
    }
    fetchIcon();
  }, [iconUrl]);
  if (!icon) {
    return null;
  }
  if (icon.error) {
    return icon.message;
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }, defaultProps));
};
const AtrcIcon = props => {
  const {
    className = '',
    variant = '',
    type = 'wp',
    svg = '',
    icon = '',
    ...defaultProps
  } = props;
  if (typeof icon === 'function') {
    return icon({
      className: classnames('at-svg', 'at-w', 'at-h', className, variant ? AtrcPrefix('svg') + '-' + variant : ''),
      ...defaultProps
    });
  }
  if (type === 'wp') {
    return /*#__PURE__*/React.createElement(AtrcIconWp, props);
  }
  if ('ri' === type) {
    return /*#__PURE__*/React.createElement(AtrcIconTag, props);
  }
  if (type === 'bootstrap') {
    return /*#__PURE__*/React.createElement(AtrcIconTag, props);
  }
  if (type === 'svg') {
    if (typeof svg === 'function') {
      return svg({
        className: classnames(className, variant ? AtrcPrefix('svg') + '-' + variant : ''),
        ...defaultProps
      });
    }
    const div = document.createElement('div');
    div.innerHTML = svg;
    const hasHtmlTags = div.querySelector('*') !== null;
    return hasHtmlTags ? /*#__PURE__*/React.createElement("span", _extends({
      className: classnames('at-svg', className, variant ? AtrcPrefix('svg') + '-' + variant : ''),
      dangerouslySetInnerHTML: {
        __html: svg
      }
    }, defaultProps)) : /*#__PURE__*/React.createElement("span", _extends({
      className: classnames('at-svg', className, variant ? AtrcPrefix('svg') + '-' + variant : '')
    }, defaultProps), svg);
  }
  if ('url' === type) {
    return /*#__PURE__*/React.createElement(AtrcIconUrl, props);
  }
  return null;
};
export default AtrcIcon;
//# sourceMappingURL=index.js.map