/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Inbuilt*/
import AtrcGetRestBaseTaxonomy from '../get-rest-base-taxonomy';

/*Local*/
const AtrcGetTerm = async ({
  tax,
  restBase,
  restNamespace = '/wp/v2/',
  termId
}) => {
  if (!(restBase || tax)) {
    return [];
  }
  let path = restNamespace;
  if (!path) {
    path = '/wp/v2/';
  }
  if (restBase) {
    path += restBase;
  } else {
    const rtBase = await AtrcGetRestBaseTaxonomy({
      tax
    });
    if (rtBase) {
      path += rtBase;
    } else {
      return [];
    }
  }
  path = path + '/' + termId;
  return await apiFetch({
    path
  });
};
export default AtrcGetTerm;
//# sourceMappingURL=index.js.map