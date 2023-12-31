/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Inbuilt*/
import AtrcGetRestBaseType from '../get-rest-base-types';

/*Local*/
const AtrcGetPost = async ({
  postType,
  restBase,
  restNamespace = '/wp/v2/',
  postId
}) => {
  if (!(restBase || postType)) {
    return [];
  }
  let path = restNamespace;
  if (!path) {
    path = '/wp/v2/';
  }
  if (restBase) {
    path += restBase;
  } else {
    const rtBase = await AtrcGetRestBaseType({
      postType
    });
    if (rtBase) {
      path += rtBase;
    } else {
      return [];
    }
  }
  path = path + '/' + postId;
  return await apiFetch({
    path
  });
};
export default AtrcGetPost;
//# sourceMappingURL=index.js.map