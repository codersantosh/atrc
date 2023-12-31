"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcUsePostTerms;
var _data = require("@wordpress/data");
var _coreData = require("@wordpress/core-data");
/*WordPress*/

/* Local */
var EMPTY_ARRAY = [];
function AtrcUsePostTerms(_ref) {
  var _term$visibility2;
  var postId = _ref.postId,
    _ref$taxonomy = _ref.taxonomy,
    taxonomy = _ref$taxonomy === void 0 ? 'category' : _ref$taxonomy,
    _ref$showEmpty = _ref.showEmpty,
    showEmpty = _ref$showEmpty === void 0 ? false : _ref$showEmpty,
    _ref$showOnlyTopLevel = _ref.showOnlyTopLevel,
    showOnlyTopLevel = _ref$showOnlyTopLevel === void 0 ? false : _ref$showOnlyTopLevel;
  var term = (0, _data.useSelect)(function (select) {
    var _taxObj$visibility;
    if (!taxonomy) return {};
    var _select = select(_coreData.store),
      getTaxonomy = _select.getTaxonomy;
    var taxObj = getTaxonomy(taxonomy);
    return taxObj !== null && taxObj !== void 0 && (_taxObj$visibility = taxObj.visibility) !== null && _taxObj$visibility !== void 0 && _taxObj$visibility.publicly_queryable ? taxObj : {};
  }, [taxonomy]);
  var slug = term.slug;
  return (0, _data.useSelect)(function (select) {
    var _term$visibility;
    var visible = term === null || term === void 0 || (_term$visibility = term.visibility) === null || _term$visibility === void 0 ? void 0 : _term$visibility.publicly_queryable;
    if (!visible) {
      return {
        postTerms: EMPTY_ARRAY,
        isLoading: false,
        hasPostTerms: false
      };
    }
    var _select2 = select(_coreData.store),
      getEntityRecords = _select2.getEntityRecords,
      isResolving = _select2.isResolving;
    var args = {
      per_page: -1,
      context: 'view',
      hide_empty: !showEmpty
    };
    if (postId) {
      args.post = postId;
    }
    if (showOnlyTopLevel) {
      args.parent = 0;
    }
    var taxonomyArgs = ['taxonomy', slug, args];
    var terms = getEntityRecords.apply(void 0, taxonomyArgs);
    return {
      postTerms: terms,
      isLoading: isResolving('getEntityRecords', taxonomyArgs),
      hasPostTerms: !!(terms !== null && terms !== void 0 && terms.length)
    };
  }, [postId, term === null || term === void 0 || (_term$visibility2 = term.visibility) === null || _term$visibility2 === void 0 ? void 0 : _term$visibility2.publicly_queryable, slug, showEmpty, showOnlyTopLevel]);
}
//# sourceMappingURL=use-post-terms.js.map