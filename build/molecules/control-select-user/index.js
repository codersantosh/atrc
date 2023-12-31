function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import classnames from 'classnames';
import { isString } from 'lodash';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcNotice from '../notice';
import AtrcGetUsers from '../../api/get-users';
import AtrcPrefix from '../../prefix-vars';

/* Local*/
const perPage = 100;
const getUsersOptions = async (queryArgs = null) => {
  const gotUsers = await AtrcGetUsers({
    queryArgs
  });
  const userOptions = [];
  if (gotUsers) {
    gotUsers.forEach(function (item) {
      let itemLabel = __('Untitled', 'atrc-prefix-atrc');
      if (item.name) {
        itemLabel = item.name;
      }
      userOptions.push({
        value: item.id,
        label: itemLabel
      });
    });
  }
  return userOptions;
};
function UserSelect(props) {
  let {
    label,
    value,
    onChange,
    showOptionNone = false,
    optionNoneValue = 0,
    options,
    className = '',
    wrapProps = {},
    isAsync = false,
    ...defaultProps
  } = props;
  const setUserId = val => {
    if (isString(val)) {
      onChange(Number(val));
    } else {
      onChange(val);
    }
  };
  if (showOptionNone && !isAsync) {
    options = [{
      value: optionNoneValue,
      label: __('Select', 'atrc-prefix-atrc')
    }, ...options];
  }
  const help = () => {
    if (isAsync) {
      return '';
    }
    let minLength = 1;
    if (showOptionNone) {
      minLength = 2;
    }
    if (options.length < minLength) {
      return __('No users', 'atrc-prefix-atrc');
    }
    return '';
  };
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({
    label: label,
    className: className,
    options: options,
    onChange: setUserId,
    value: value,
    help: help(),
    wrapProps: wrapProps,
    isAsync: isAsync
  }, defaultProps));
}

/*AtrcControlSelectUser*/
function AtrcControlSelectUser(props) {
  const {
    label = __('Users', 'atrc-prefix-atrc'),
    value,
    onChange,
    showOptionNone = true,
    optionNoneValue = 0,
    variant = '',
    className = '',
    roleIn = [],
    postType = '',
    postId = 0,
    ...defaultProps
  } = props;
  const post = useSelect(select => {
    if (postType && postId) {
      const query = {
        include: [postId]
      };
      const {
        getEntityRecords
      } = select(coreStore);
      return getEntityRecords('postType', postType, query);
    }
    return null;
  }, [postType, postId]);
  const {
    users,
    totalUsers
  } = useSelect(select => {
    const queryArgs = {
      per_page: perPage,
      _fields: 'id,name',
      context: 'view'
    };
    if (roleIn) {
      queryArgs.role__in = roleIn;
    }
    if (post && post.author) {
      queryArgs.include = [post.author];
    }
    const {
      getUsers
    } = select(coreStore);
    const gotUsers = getUsers(queryArgs);
    return {
      users: gotUsers,
      totalUsers: gotUsers && gotUsers.length
    };
  }, [post, roleIn]);
  const usersOptions = useMemo(() => {
    return (users ?? []).map(user => {
      return {
        value: user.id,
        label: decodeEntities(user.name)
      };
    });
  }, [users]);
  if (!usersOptions || !usersOptions.length) {
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No users found!', 'atrc-prefix-atrc'));
  }
  const userAsyncOptions = async inputValue => {
    try {
      const queryArgs = {
        per_page: perPage,
        _fields: 'id,name',
        context: 'view'
      };
      if (roleIn) {
        queryArgs.role__in = roleIn;
      }
      if (post && post.author) {
        queryArgs.include = [post.author];
      }
      if (inputValue) {
        queryArgs.search = inputValue;
      }
      const gotUsers = await getUsersOptions(queryArgs);
      return gotUsers;
    } catch (error) {
      console.error('Error fetching WordPress users:', error);
      return [];
    }
  };
  return /*#__PURE__*/React.createElement(UserSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-user'), className, variant ? AtrcPrefix('ctrl-select-user') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue,
    options: usersOptions,
    loadOptions: totalUsers && totalUsers >= perPage ? userAsyncOptions : usersOptions,
    isAsync: totalUsers && totalUsers >= perPage
  }, defaultProps));
}
export default AtrcControlSelectUser;
//# sourceMappingURL=index.js.map