/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../wrap';

/*Local Components*/
const AtrcFile = props => {
  const {
    src = '',
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  if (!src) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('thumbnail', className)
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "centered"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://localhost/gutentor/wp-includes/images/media/archive.png",
    className: "icon",
    draggable: "false",
    alt: ""
  })), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "filename"
  }, /*#__PURE__*/React.createElement(AtrcWord, null, "abc.zip"))));
};
export default AtrcFile;
//# sourceMappingURL=index.js.map