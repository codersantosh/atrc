function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* WordPress*/
/* WordPress*/
import { useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/*Library*/

import classnames from 'classnames';
import { debounce, isArray, isNumber, isString } from 'lodash';

/*Inbuilt */
import { AtrcDynamicSelect } from '../../atoms/select';
import AtrcNotice from '../notice';
import AtrcGetTerms from '../../api/get-terms';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/* Local*/
const perPage = 100;
const getTermsOptions = async ({
  tax,
  restBase,
  restNamespace,
  queryArgs = null
}) => {
  const gotItems = await AtrcGetTerms({
    tax,
    restBase,
    restNamespace,
    queryArgs
  });
  const options = [];
  if (gotItems) {
    gotItems.forEach(function (item) {
      options.push({
        value: item.id,
        label: item.name || __('Untitled', 'atrc-prefix-atrc')
      });
    });
  }
  return options;
};

/*Select Term*/
function AtrcControlSelectTerm(props) {
  const {
    label = __('Terms', 'atrc-prefix-atrc'),
    value,
    onChange,
    showOptionNone = true,
    optionNoneValue = 0,
    tax = '',
    variant = '',
    className = '',
    relation = '',
    relationId = 0,
    ...defaultProps
  } = props;
  const [hasFixNotice, setHasFixNotice] = useState(true);
  const queryArgs = useSelect(select => {
    const newQueryArgs = {
      per_page: perPage,
      _fields: 'id,name',
      context: 'view'
    };
    if (relation) {
      if ('child' === relation) {
        /*get children by relation id*/
        newQueryArgs.parent = [relationId];
      } else if ('termParent' === relation) {
        const {
          getEntityRecord
        } = select(coreStore);
        const gotItem = getEntityRecord('taxonomy', tax, relationId);
        if (gotItem && gotItem.parent) {
          /*get parent by relation id*/
          newQueryArgs.include = [gotItem.parent];
        }
      }
    }
    return newQueryArgs;
  }, [relation, relationId]);
  const {
    terms,
    totalItems
  } = useSelect(select => {
    const {
      getEntityRecords
    } = select(coreStore);
    const gotItems = getEntityRecords('taxonomy', tax, queryArgs);
    return {
      terms: gotItems,
      totalItems: gotItems && gotItems.length
    };
  }, [tax, queryArgs]);
  const options = useMemo(() => {
    return (terms ?? []).map(term => {
      return {
        value: term.id,
        label: decodeEntities(term.name)
      };
    });
  }, [terms]);
  const isAsync = useMemo(() => {
    return totalItems && totalItems >= perPage;
  }, [totalItems]);
  const defaultValue = useSelect(select => {
    const newQueryArgs = {
      _fields: 'id,name',
      context: 'view'
    };
    if (isAsync && value) {
      if (isArray(value)) {
        newQueryArgs.include = value;
      } else if (isNumber(value)) {
        newQueryArgs.include = [value];
      } else if (isString(value)) {
        const valArray = value.split(',');
        newQueryArgs.include = [valArray];
      }
      if (newQueryArgs.include) {
        const {
          getEntityRecords
        } = select(coreStore);
        const gotItems = getEntityRecords('taxonomy', tax, newQueryArgs);
        if (gotItems && isArray(gotItems) && gotItems.length) {
          if (gotItems.length > 1) {
            return gotItems.map(term => {
              return {
                value: term.id,
                label: decodeEntities(term.name)
              };
            });
          }
          return {
            value: gotItems[0].id,
            label: decodeEntities(gotItems[0].name)
          };
        }
      }
    }
    return null;
  }, [isAsync, value]);
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No terms found!', 'atrc-prefix-atrc'));
  }
  if (isAsync) {
    if (hasFixNotice) {
      return /*#__PURE__*/React.createElement(AtrcNotice, {
        autoDismiss: 5000,
        isDismissible: false,
        onAutoRemove: () => {
          setHasFixNotice(false);
        }
      }, __('Loading…', 'atrc-prefix-atrc'));
    }
    const asyncOptions = async inputValue => {
      try {
        const query = {
          tax
        };
        if (inputValue) {
          query.queryArgs = {
            search: inputValue
          };
        }
        return await getTermsOptions(query);
      } catch (error) {
        console.error('Error fetching WordPress terms:', error);
        return [];
      }
    };
    // Debounce the loadOptions function with a 300ms delay
    const debouncedLoadOptions = debounce(asyncOptions, 300);
    return /*#__PURE__*/React.createElement(AtrcDynamicSelect, _extends({
      label: label,
      className: classnames(AtrcPrefix('ctrl-select-term'), className, variant ? AtrcPrefix('ctrl-select-term') + '-' + variant : ''),
      defaultValue: defaultValue,
      onChange: onChange,
      showOptionNone: showOptionNone,
      optionNoneValue: optionNoneValue,
      options: options,
      loadOptions: debouncedLoadOptions,
      isAsync: isAsync
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtrcDynamicSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-term'), className, variant ? AtrcPrefix('ctrl-select-term') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue,
    options: options
  }, defaultProps));
}
export default AtrcControlSelectTerm;
//# sourceMappingURL=index.js.map