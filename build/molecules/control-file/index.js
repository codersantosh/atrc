function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    frm = '',
	data=[
		{
			id:'',
			url:'',
		},
		{
			id:'',
			url:'',
		}
	]
}

map(obj, (currentValue, currentKey) => ( { value: key, label: key } ))

wp_enqueue_media(); is needed to work this
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import classnames from 'classnames';
import { BsFile, BsX } from 'react-icons/bs';
import { cloneDeep, omit } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcFile from '../../atoms/file';
import AtrcNotice from '../notice';
import AtrcButtonGroup from '../button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const SelfHostedFile = props => {
  const {
    type = '',
    value = {
      frm: '',
      data: []
    },
    addButtonProps = {},
    onChange = () => {}
  } = props;
  const {
    frm = '',
    data = []
  } = value;
  if (!(typeof wp !== 'undefined' && wp.media)) {
    return /*#__PURE__*/React.createElement(AtrcNotice, null, __('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc'));
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const frameProps = useMemo(() => {
    if (props.frameProps) {
      return props.frameProps;
    }
    return {
      title: __('Select or upload file', 'atrc-prefix-atrc'),
      button: {
        text: __('Select', 'atrc-prefix-atrc')
      },
      multiple: false,
      library: {
        type: 'image'
      }
    };
  }, []);
  const openMediaUploadFrame = () => {
    const frame = wp.media(cloneDeep(frameProps));
    frame.on('select', () => {
      const attachments = frame.state().get('selection').toJSON();
      setMedia(attachments);
    });
    frame.open();
  };
  const setMedia = media => {
    if (!media || !media[0].id) {
      return;
    }
    const newProps = {
      frm: value.frm || '',
      data: []
    };
    if (frameProps.multiple) {
      newProps.data = media.slice(0);
    } else {
      newProps.data.push(media[0]);
    }
    onChange(newProps);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const files = useSelect(select => {
    const {
      getMedia
    } = select(coreStore);
    return data && '' === frm ? data.map(obj => getMedia(obj.id, {
      context: 'view'
    })) : null;
  }, [data, frm]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('control-file-self-hosted'))
  }, !['urlOnly', 'buttonOnly'].includes(type) ? files.map((obj, key) => /*#__PURE__*/React.createElement(AtrcFile, {
    src: obj.url,
    key: key
  })) : null, /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, _extends({
    variant: "primary",
    className: classnames('at-gap at-flx at-flx-al-itm-ctr'),
    onClick: openMediaUploadFrame
  }, omit(addButtonProps, 'text')), /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsFile
  }), addButtonProps.text ? addButtonProps.text :
  // eslint-disable-next-line no-nested-ternary
  data.length > 0 ? frameProps.multiple ? __('Replace files', 'atrc-prefix-atrc') : __('Replace file', 'atrc-prefix-atrc') : frameProps.multiple ? __('Add files', 'atrc-prefix-atrc') : __('Add file', 'atrc-prefix-atrc')), !['urlOnly', 'buttonOnly'] && data.length > 0 ? /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "uploads",
    onClick: () => {
      const newProps = {
        frm: value.frm || '',
        data: []
      };
      onChange(newProps);
    }
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5')),
    type: "bootstrap",
    icon: BsX
  }), frameProps.multiple ? __('Reset files', 'atrc-prefix-atrc') : __('Remove file', 'atrc-prefix-atrc')) : null));
};
const ExternalFile = props => {
  const {
    value = {},
    onChange = () => {}
  } = props;
  const {
    frm = '',
    url = ''
  } = value;
  if (frm === '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-file-ext'))
  }, /*#__PURE__*/React.createElement(AtrcFile, {
    src: url
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('File URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  }));
};
const AtrcControlFile = props => {
  const {
    label = '',
    value = {},
    variant = '',
    className = '',
    type = '',
    onChange = () => {},
    allowSource = true,
    allowSelf = true,
    allowExternal = true,
    ...defaultProps
  } = props;
  const [frm, setMediaFrom] = useState(value.frm);
  const setAttr = (newVal, type) => {
    const valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    if ('frm' === type) {
      setMediaFrom(newVal);
    }
    onChange(valueCloned);
  };
  const setExternal = newVal => {
    const valueCloned = cloneDeep(value);
    delete valueCloned.id;
    delete valueCloned.size;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-file'), className, variant ? AtrcPrefix('ctrl-file') + '-' + variant : '', 'urlOnly' === type ? 'at-flx at-al-itm-end at-jfy-cont-btw at-gap' : '')
  }, defaultProps), !['urlOnly', 'buttonOnly'].includes(type) && label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, ['urlOnly'].includes(type) ? /*#__PURE__*/React.createElement(AtrcText, {
    label: label,
    value: value && value.data && value.data[0] && value.data[0].url,
    type: "url",
    onChange: newVal => {
      const valueCloned = cloneDeep(value);
      if (!('frm' in valueCloned)) {
        valueCloned.frm = '';
      }
      if (!('data' in valueCloned)) {
        valueCloned.data = [];
      }
      if (!valueCloned.data[0]) {
        valueCloned.data[0] = {};
      }
      valueCloned.data[0].url = newVal;
      onChange(valueCloned);
    },
    resetProps: {
      className: classnames('at-gap', 'at-flx-grw-1')
    }
  }) : null, !['urlOnly', 'buttonOnly'].includes(type) && allowSource ? /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('File source', 'atrc-prefix-atrc'),
    value: frm,
    options: [{
      label: __('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('External', 'atrc-prefix-atrc'),
      value: 'external'
    }],
    onChange: newVal => setAttr(newVal, 'frm')
  }) : null, allowSelf ? /*#__PURE__*/React.createElement(SelfHostedFile, _extends({
    value: value,
    onChange: onChange,
    type: type
  }, defaultProps)) : null, allowExternal ? /*#__PURE__*/React.createElement(ExternalFile, {
    value: value,
    onChange: setExternal
  }) : null);
};
export default AtrcControlFile;
//# sourceMappingURL=index.js.map