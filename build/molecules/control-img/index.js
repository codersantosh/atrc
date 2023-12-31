function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    frm = '',
    id = 0,
    url ='',
    alt ='',
    ttl ='',
    sz ='',
    w ='',
    h ='',
}

map(obj, (currentValue, currentKey) => ( { value: key, label: key } ))
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/*Library*/
import classnames from 'classnames';
import { BsImage, BsTrash } from 'react-icons/bs';
import { isEmpty, map, reduce } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcImg from '../../atoms/img';
import AtrcPanelTools from '../panel-tools';
import AtrcNotice from '../notice';
import AtrcPanelRow from '../panel-row';
import AtrcTooltip from '../tooltip';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const SelfHostedImg = props => {
  const isFirstRender = useRef(true);
  if (!(typeof wp !== 'undefined' && wp.media)) {
    return /*#__PURE__*/React.createElement(AtrcNotice, null, __('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc'));
  }
  const {
    value = {},
    onChange = () => {}
  } = props;
  const {
    frm = '',
    id = null,
    sizes = null,
    srcset = '',
    alt = null,
    ttl = null,
    sz = 'full',
    w = null,
    h = null,
    url = ''
  } = value;

  /* for local management */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [media, setMedia] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imgSz, setImgSize] = useState(sz);

  /* On change handler */
  const setAttrs = newVals => {
    const valueCloned = Object.assign({}, value);
    onChange({
      ...valueCloned,
      ...newVals
    });
  };

  /* Run at first, only once for first time*/
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (id && !media) {
      /* Need to use wp.media becuase const { getMedia } = select(coreStore); doesnot provide same and alos required properties */
      wp.media.attachment(id).fetch({
        success(attachment) {
          if (attachment.attributes) {
            setMedia(attachment.attributes);
          }
        }
      });
    }
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageSizes = useSelect(select => {
    const settings = select(blockEditorStore).getSettings();
    return id && '' === frm ? settings.imageSizes : null;
  }, [id, frm]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageSizesOptions = useMemo(() => {
    if (media && media.sizes) {
      const keyValues = reduce(imageSizes, (accumulator, {
        name,
        slug
      }) => {
        accumulator[slug] = {
          value: slug,
          label: name
        };
        return accumulator;
      }, {});
      return {
        keys: Object.keys(keyValues),
        options: reduce(media.sizes, (accumulator, currentValue, currentKey) => {
          if (keyValues[currentKey]) {
            accumulator.push(keyValues[currentKey]);
          } else {
            accumulator.push({
              value: currentKey,
              label: currentKey
            });
          }
          return accumulator;
        }, [])
      };
    }
    return null;
  }, [imageSizes, media]);

  /* set attributes when media change */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (!media || !media.id) {
        return;
      }
      const newVals = {
        id: media.id
      };
      let mediaSize = imgSz;
      if (!mediaSize) {
        mediaSize = 'full';
      }
      if (media.sizes && media.sizes[mediaSize] && media.sizes[mediaSize].url) {
        newVals.url = media.sizes && media.sizes[mediaSize] && media.sizes[mediaSize].url ? media.sizes[mediaSize].url : media.url;
      } else {
        newVals.url = media.url;
      }
      if (media.sizes[mediaSize]) {
        const {
          width,
          height,
          abSrcset
        } = media.sizes[mediaSize];
        newVals.w = width + 'px';
        newVals.h = height + 'px';
        newVals.srcset = abSrcset;
        newVals.sizes = `(max-width: ${width}px) 100vw, ${width}px)`;
      }
      newVals.alt = media.alt;
      newVals.ttl = media.title;
      newVals.sz = mediaSize;
      setAttrs(newVals);
    }
  }, [media, imgSz]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-img-slf-hosted'), 'at-pos', 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    src: url,
    alt: alt,
    title: ttl,
    sizes: sizes,
    srcset: srcset,
    width: w,
    height: h
  }), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: setMedia,
    allowedTypes: ['image', 'video'],
    title: __('Select or upload background media', 'atrc-prefix-atrc'),
    value: id,
    render: ({
      open
    }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "uploads",
      className: classnames('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
      onClick: open
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsImage
    }), id ? __('Replace media', 'atrc-prefix-atrc') : __('Add media', 'atrc-prefix-atrc')), id ? /*#__PURE__*/React.createElement(AtrcTooltip, {
      className: classnames(AtrcPrefix('uploads-del'), 'at-pos'),
      text: __('Remove media', 'atrc-prefix-atrc')
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      className: classnames('at-bdr-rad', 'at-flx', 'at-w', 'at-h', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
      variant: "delete",
      onClick: () => setAttrs({
        id: null,
        url: null
      })
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsTrash
    }))) : null)
  })), imageSizesOptions && imageSizesOptions.options ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Image size', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: sz,
    defaultValue: "full",
    options: imageSizesOptions.options,
    onChange: setImgSize
  })) : null)));
};
const ExternalImg = props => {
  const {
    value = {},
    onChange = () => {}
  } = props;
  const {
    frm = '',
    url = '',
    alt = '',
    ttl = ''
  } = value;
  if (frm === '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-img-ext'))
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    className: classnames('at-m'),
    src: url,
    alt: alt,
    title: ttl
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Image URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  })));
};
const ImgDetails = props => {
  const {
    value = {},
    onChange = () => {}
  } = props;
  const {
    alt = '',
    ttl = ''
  } = value;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-img-img-details'))
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Image details', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Alt text', 'atrc-prefix-atrc'),
    value: alt,
    onChange: newVal => onChange(newVal, 'alt')
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Title', 'atrc-prefix-atrc'),
    value: ttl,
    onChange: newVal => onChange(newVal, 'ttl')
  })));
};
const ImgSettings = props => {
  const {
    value = {},
    onChange = () => {},
    allowDetails = true
  } = props;
  const resetDetails = () => {
    const valueCloned = Object.assign({}, value);
    delete valueCloned.alt;
    delete valueCloned.ttl;
    onChange(valueCloned);
  };
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const hasTabValue = tab => {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'details') {
      return !!(value.alt || value.ttl);
    }
    return false;
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowDetails) {
      tabs.push({
        name: 'details',
        title: __('Image details', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('details'),
        onDeselect: () => resetDetails()
      });
    }
    return tabs;
  }, []);
  if (!allowDetails) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Settings', 'atrc-prefix-atrc'),
    resetAll: () => onChange({}),
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => {
    if ('details' === tab) {
      return /*#__PURE__*/React.createElement(ImgDetails, {
        value: value,
        onChange: setAttr,
        key: iDx
      });
    }
    return null;
  }));
};
const AtrcControlImg = props => {
  const {
    label = '',
    value = {},
    variant = '',
    className = '',
    onChange = () => {},
    allowSource = true,
    allowSelf = true,
    allowExternal = true,
    allowDetails = true,
    allowSettings = true,
    ...defaultProps
  } = props;
  const {
    frm = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const setExternal = newVal => {
    const valueCloned = Object.assign({}, value);
    delete valueCloned.id;
    delete valueCloned.sz;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-img'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-img') + '-' + variant : '')
  }, defaultProps), label && /*#__PURE__*/React.createElement(AtrcLabel, null, label), allowSource && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Image source', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: frm,
    options: [{
      label: __('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('External', 'atrc-prefix-atrc'),
      value: 'ext'
    }],
    onChange: newVal => setAttr(newVal, 'frm')
  })), allowSelf && '' === frm ? /*#__PURE__*/React.createElement(SelfHostedImg, {
    value: value,
    onChange: onChange
  }) : null, allowExternal && 'ext' === frm ? /*#__PURE__*/React.createElement(ExternalImg, {
    value: value,
    onChange: setExternal
  }) : null, allowSettings && 'ext' === frm && (value.id || value.url) ? /*#__PURE__*/React.createElement(ImgSettings, {
    value: value,
    onChange: onChange,
    allowDetails: allowDetails
  }) : null);
};
export default AtrcControlImg;
//# sourceMappingURL=index.js.map