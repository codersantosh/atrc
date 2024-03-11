/*#__PURE__*/React.createElement(AtrcControlFile, {
  label: __('Logo', 'brand-master'),
  value: mapImgValue,
  onChange: function onChange(newVal) {
    var requiredVal = {};
    if (newVal.frm) {
      requiredVal.frm = newVal.frm;
    }
    if (newVal.data && newVal.data[0]) {
      var newImg = newVal.data[0];
      requiredVal.id = newImg.id;
      requiredVal.url = newImg.url;
      requiredVal.alt = newImg.title;
      requiredVal.ttl = newImg.title;
      requiredVal.w = newImg.w;
      requiredVal.h = newImg.h;
    }
    updateLogo('img', requiredVal);
  },
  selectSourceProps: {
    label: __('Image source', 'brand-master')
  },
  addButtonProps: {
    text: __('Add logo', 'brand-master')
  },
  removeButtonProps: {
    text: __('Remove logo', 'brand-master')
  },
  frameProps: {
    title: __('Select logo from images', 'atrc-prefix-atrc'),
    button: {
      text: __('Select logo', 'atrc-prefix-atrc')
    },
    multiple: false,
    library: {
      type: 'image'
    }
  }
});
//# sourceMappingURL=file-as-image.js.map