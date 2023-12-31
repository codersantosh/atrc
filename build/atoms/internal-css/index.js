/*STYLIS : https://www.npmjs.com/package/stylis*/
import { compile, serialize, stringify, middleware, prefixer } from 'stylis';

/*Process the Raw CSS*/
export const AtrcGetProcessedCss = rawCss => {
  if (!rawCss) {
    return null;
  }
  return serialize(compile(rawCss), middleware([prefixer, stringify]));
};

/*Render CSS inside style tag*/
const AtrcInternalCss = props => {
  const {
    children,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("style", defaultProps, AtrcGetProcessedCss(children));
};
export default AtrcInternalCss;
//# sourceMappingURL=index.js.map