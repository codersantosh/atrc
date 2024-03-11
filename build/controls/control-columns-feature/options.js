/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Local */
/**
 * Columns options
 *
 * @type {Array}
 */
export var OneColumnOptions = function OneColumnOptions() {
  return [{
    label: __('One column', 'atrc-prefix-atrc'),
    value: '1-1',
    icon: function icon(_ref) {
      var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        xmlns: "http://www.w3.org/2000/svg",
        d: "M61,65H7a4,4,0,0,1-4-4V7A4,4,0,0,1,7,3H61a4,4,0,0,1,4,4V61A4,4,0,0,1,61,65ZM7,7V61H61V7Z"
      }));
    }
  }];
};
export var TwoColumnsOptions = function TwoColumnsOptions() {
  return [{
    label: __('2-1', 'atrc-prefix-atrc'),
    value: '2-1',
    icon: function icon(_ref2) {
      var _ref2$className = _ref2.className,
        className = _ref2$className === void 0 ? '' : _ref2$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M29.5,64.5H5.5a2,2,0,0,1-2-2V5.5a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2v57A2,2,0,0,1,29.5,64.5Zm-21-3h18a2,2,0,0,0,2-2V8.5a2,2,0,0,0-2-2H8.5a2,2,0,0,0-2,2v51A2,2,0,0,0,8.5,61.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M62.5,64.5h-24a2,2,0,0,1-2-2V5.5a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2v57A2,2,0,0,1,62.5,64.5Zm-21-3h18a2,2,0,0,0,2-2V8.5a2,2,0,0,0-2-2h-18a2,2,0,0,0-2,2v51A2,2,0,0,0,41.5,61.5Z"
      }));
    }
  }, {
    label: __('2-2', 'atrc-prefix-atrc'),
    value: '2-2',
    icon: function icon(_ref3) {
      var _ref3$className = _ref3.className,
        className = _ref3$className === void 0 ? '' : _ref3$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5.5,36.5h57a2,2,0,0,1,2,2v24a2,2,0,0,1-2,2H5.5a2,2,0,0,1-2-2v-24A2,2,0,0,1,5.5,36.5Zm3,25h51a2,2,0,0,0,2-2v-18a2,2,0,0,0-2-2H8.5a2,2,0,0,0-2,2v18A2,2,0,0,0,8.5,61.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5.5,3.5h57a2,2,0,0,1,2,2v24a2,2,0,0,1-2,2H5.5a2,2,0,0,1-2-2V5.5A2,2,0,0,1,5.5,3.5Zm3,25h51a2,2,0,0,0,2-2V8.5a2,2,0,0,0-2-2H8.5a2,2,0,0,0-2,2v18A2,2,0,0,0,8.5,28.5Z"
      }));
    }
  }];
};
export var ThreeColumnsOptions = function ThreeColumnsOptions() {
  return [{
    label: __('3-1', 'atrc-prefix-atrc'),
    value: '3-1',
    icon: function icon(_ref4) {
      var _ref4$className = _ref4.className,
        className = _ref4$className === void 0 ? '' : _ref4$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M18,64.5H6A2.5,2.5,0,0,1,3.5,62V6A2.5,2.5,0,0,1,6,3.5H18A2.5,2.5,0,0,1,20.5,6V62A2.5,2.5,0,0,1,18,64.5Zm-11.5-3h11V6.5H6.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M40,64.5H28A2.5,2.5,0,0,1,25.5,62V6A2.5,2.5,0,0,1,28,3.5H40A2.5,2.5,0,0,1,42.5,6V62A2.5,2.5,0,0,1,40,64.5Zm-11.5-3h11V6.5h-11Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M62,64.5H50A2.5,2.5,0,0,1,47.5,62V6A2.5,2.5,0,0,1,50,3.5H62A2.5,2.5,0,0,1,64.5,6V62A2.5,2.5,0,0,1,62,64.5Zm-11.5-3h11V6.5h-11Z"
      }));
    }
  }, {
    label: __('3-2', 'atrc-prefix-atrc'),
    value: '3-2',
    icon: function icon(_ref5) {
      var _ref5$className = _ref5.className,
        className = _ref5$className === void 0 ? '' : _ref5$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V61A3.5,3.5,0,0,1,61,64.5ZM40,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V28A3.5,3.5,0,0,1,28,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H28A3.5,3.5,0,0,1,31.5,40V61A3.5,3.5,0,0,1,28,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('3-3', 'atrc-prefix-atrc'),
    value: '3-3',
    icon: function icon(_ref6) {
      var _ref6$className = _ref6.className,
        className = _ref6$className === void 0 ? '' : _ref6$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V61A3.5,3.5,0,0,1,28,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H40A3.5,3.5,0,0,1,36.5,28V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM40,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V40A3.5,3.5,0,0,1,40,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-21-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('3-4', 'atrc-prefix-atrc'),
    value: '3-4',
    icon: function icon(_ref7) {
      var _ref7$className = _ref7.className,
        className = _ref7$className === void 0 ? '' : _ref7$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V28A3.5,3.5,0,0,1,28,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H40A3.5,3.5,0,0,1,36.5,28V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM40,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('3-5', 'atrc-prefix-atrc'),
    value: '3-5',
    icon: function icon(_ref8) {
      var _ref8$className = _ref8.className,
        className = _ref8$className === void 0 ? '' : _ref8$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H28A3.5,3.5,0,0,1,31.5,40V61A3.5,3.5,0,0,1,28,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V40A3.5,3.5,0,0,1,40,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-21-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }];
};
export var FourColumnsOptions = function FourColumnsOptions() {
  return [{
    label: __('4-1', 'atrc-prefix-atrc'),
    value: '4-1',
    icon: function icon(_ref9) {
      var _ref9$className = _ref9.className,
        className = _ref9$className === void 0 ? '' : _ref9$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M12.5,64.5H6A2.5,2.5,0,0,1,3.5,62V6A2.5,2.5,0,0,1,6,3.5h6.5A2.5,2.5,0,0,1,15,6V62A2.5,2.5,0,0,1,12.5,64.5Zm-6-3H12V6.5H6.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M29,64.5H22.5A2.5,2.5,0,0,1,20,62V6a2.5,2.5,0,0,1,2.5-2.5H29A2.5,2.5,0,0,1,31.5,6V62A2.5,2.5,0,0,1,29,64.5Zm-6-3h5.5V6.5H23Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M45.5,64.5H39A2.5,2.5,0,0,1,36.5,62V6A2.5,2.5,0,0,1,39,3.5h6.5A2.5,2.5,0,0,1,48,6V62A2.5,2.5,0,0,1,45.5,64.5Zm-6-3H45V6.5H39.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M62,64.5H55.5A2.5,2.5,0,0,1,53,62V6a2.5,2.5,0,0,1,2.5-2.5H62A2.5,2.5,0,0,1,64.5,6V62A2.5,2.5,0,0,1,62,64.5Zm-6-3h5.5V6.5H56Z"
      }));
    }
  }, {
    label: __('4-2', 'atrc-prefix-atrc'),
    value: '4-2',
    icon: function icon(_ref10) {
      var _ref10$className = _ref10.className,
        className = _ref10$className === void 0 ? '' : _ref10$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M28,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V28A3.5,3.5,0,0,1,28,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H40A3.5,3.5,0,0,1,36.5,28V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM40,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H28A3.5,3.5,0,0,1,31.5,40V61A3.5,3.5,0,0,1,28,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V40A3.5,3.5,0,0,1,40,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-21-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-3', 'atrc-prefix-atrc'),
    value: '4-3',
    icon: function icon(_ref11) {
      var _ref11$className = _ref11.className,
        className = _ref11$className === void 0 ? '' : _ref11$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V61A3.5,3.5,0,0,1,28,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,20.5H40A3.5,3.5,0,0,1,36.5,17V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V17A3.5,3.5,0,0,1,61,20.5ZM40,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,42.5H40A3.5,3.5,0,0,1,36.5,39V29A3.5,3.5,0,0,1,40,25.5H61A3.5,3.5,0,0,1,64.5,29V39A3.5,3.5,0,0,1,61,42.5Zm-21-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V51A3.5,3.5,0,0,1,40,47.5H61A3.5,3.5,0,0,1,64.5,51V61A3.5,3.5,0,0,1,61,64.5Zm-21-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-4', 'atrc-prefix-atrc'),
    value: '4-4',
    icon: function icon(_ref12) {
      var _ref12$className = _ref12.className,
        className = _ref12$className === void 0 ? '' : _ref12$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V61A3.5,3.5,0,0,1,61,64.5ZM40,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,20.5H7A3.5,3.5,0,0,1,3.5,17V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V17A3.5,3.5,0,0,1,28,20.5ZM7,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,42.5H7A3.5,3.5,0,0,1,3.5,39V29A3.5,3.5,0,0,1,7,25.5H28A3.5,3.5,0,0,1,31.5,29V39A3.5,3.5,0,0,1,28,42.5ZM7,28.5a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V51A3.5,3.5,0,0,1,7,47.5H28A3.5,3.5,0,0,1,31.5,51V61A3.5,3.5,0,0,1,28,64.5ZM7,50.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-5', 'atrc-prefix-atrc'),
    value: '4-5',
    icon: function icon(_ref13) {
      var _ref13$className = _ref13.className,
        className = _ref13$className === void 0 ? '' : _ref13$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V40A3.5,3.5,0,0,1,51,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H17A3.5,3.5,0,0,1,20.5,40V61A3.5,3.5,0,0,1,17,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-6', 'atrc-prefix-atrc'),
    value: '4-6',
    icon: function icon(_ref14) {
      var _ref14$className = _ref14.className,
        className = _ref14$className === void 0 ? '' : _ref14$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H51A3.5,3.5,0,0,1,47.5,28V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM51,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V28A3.5,3.5,0,0,1,17,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-7', 'atrc-prefix-atrc'),
    value: '4-7',
    icon: function icon(_ref15) {
      var _ref15$className = _ref15.className,
        className = _ref15$className === void 0 ? '' : _ref15$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V61A3.5,3.5,0,0,1,17,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-32-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H51A3.5,3.5,0,0,1,47.5,28V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM51,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-8', 'atrc-prefix-atrc'),
    value: '4-8',
    icon: function icon(_ref16) {
      var _ref16$className = _ref16.className,
        className = _ref16$className === void 0 ? '' : _ref16$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V61A3.5,3.5,0,0,1,61,64.5ZM51,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V28A3.5,3.5,0,0,1,17,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-9', 'atrc-prefix-atrc'),
    value: '4-9',
    icon: function icon(_ref17) {
      var _ref17$className = _ref17.className,
        className = _ref17$className === void 0 ? '' : _ref17$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V61A3.5,3.5,0,0,1,61,64.5ZM51,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H17A3.5,3.5,0,0,1,20.5,40V61A3.5,3.5,0,0,1,17,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('4-10', 'atrc-prefix-atrc'),
    value: '4-10',
    icon: function icon(_ref18) {
      var _ref18$className = _ref18.className,
        className = _ref18$className === void 0 ? '' : _ref18$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V61A3.5,3.5,0,0,1,17,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V40A3.5,3.5,0,0,1,51,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }];
};
export var FiveColumnsOptions = function FiveColumnsOptions() {
  return [{
    label: __('5-1', 'atrc-prefix-atrc'),
    value: '5-1',
    icon: function icon(_ref19) {
      var _ref19$className = _ref19.className,
        className = _ref19$className === void 0 ? '' : _ref19$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M9.2,64H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H9.2a2,2,0,0,1,2,2V62A2,2,0,0,1,9.2,64ZM6,6H6V62H9.2V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M22.4,64H19.2a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h3.2a2,2,0,0,1,2,2V62A2,2,0,0,1,22.4,64ZM19.2,6h0V62h3.2V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M35.6,64H32.4a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h3.2a2,2,0,0,1,2,2V62A2,2,0,0,1,35.6,64ZM32.4,6h0V62h3.2V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M48.8,64H45.6a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h3.2a2,2,0,0,1,2,2V62A2,2,0,0,1,48.8,64ZM45.6,6h0V62h3.2V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M62,64H58.8a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2H62a2,2,0,0,1,2,2V62A2,2,0,0,1,62,64ZM58.8,6h0V62H62V6Z"
      }));
    }
  }, {
    label: __('5-2', 'atrc-prefix-atrc'),
    value: '5-2',
    icon: function icon(_ref20) {
      var _ref20$className = _ref20.className,
        className = _ref20$className === void 0 ? '' : _ref20$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M40,31.5H31a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,31,3.5h9A3.5,3.5,0,0,1,43.52,7V28A3.5,3.5,0,0,1,40,31.5Zm-9-25a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H52a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,52,3.5h9A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5Zm-9-25a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M40,64.5H31a3.5,3.5,0,0,1-3.5-3.5V40A3.5,3.5,0,0,1,31,36.5h9a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,40,64.5Zm-9-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H52a3.5,3.5,0,0,1-3.5-3.5V40A3.5,3.5,0,0,1,52,36.5h9A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-9-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V61A3.5,3.5,0,0,1,17,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-3', 'atrc-prefix-atrc'),
    value: '5-3',
    icon: function icon(_ref21) {
      var _ref21$className = _ref21.className,
        className = _ref21$className === void 0 ? '' : _ref21$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M37,31.5H28a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,28,3.5h9A3.5,3.5,0,0,1,40.47,7V28A3.5,3.5,0,0,1,37,31.5Zm-9-25a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5h9A3.5,3.5,0,0,1,19.49,7V28A3.5,3.5,0,0,1,16,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M37,64.5H28a3.5,3.5,0,0,1-3.5-3.5V40A3.5,3.5,0,0,1,28,36.5h9a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,37,64.5Zm-9-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5h9a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,16,64.5Zm-9-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V61A3.5,3.5,0,0,1,61,64.5ZM51,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-4', 'atrc-prefix-atrc'),
    value: '5-4',
    icon: function icon(_ref22) {
      var _ref22$className = _ref22.className,
        className = _ref22$className === void 0 ? '' : _ref22$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V61A3.5,3.5,0,0,1,39,64.5ZM29,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H51A3.5,3.5,0,0,1,47.5,28V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM51,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V40A3.5,3.5,0,0,1,51,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V28A3.5,3.5,0,0,1,17,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H17A3.5,3.5,0,0,1,20.5,40V61A3.5,3.5,0,0,1,17,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-5', 'atrc-prefix-atrc'),
    value: '5-5',
    icon: function icon(_ref23) {
      var _ref23$className = _ref23.className,
        className = _ref23$className === void 0 ? '' : _ref23$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V28A3.5,3.5,0,0,1,17,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H51A3.5,3.5,0,0,1,47.5,28V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM51,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H28A3.5,3.5,0,0,1,31.5,40V61A3.5,3.5,0,0,1,28,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V40A3.5,3.5,0,0,1,40,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-21-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-6', 'atrc-prefix-atrc'),
    value: '5-6',
    icon: function icon(_ref24) {
      var _ref24$className = _ref24.className,
        className = _ref24$className === void 0 ? '' : _ref24$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H17A3.5,3.5,0,0,1,20.5,40V61A3.5,3.5,0,0,1,17,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V40A3.5,3.5,0,0,1,51,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V28A3.5,3.5,0,0,1,28,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H40A3.5,3.5,0,0,1,36.5,28V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM40,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-7', 'atrc-prefix-atrc'),
    value: '5-7',
    icon: function icon(_ref25) {
      var _ref25$className = _ref25.className,
        className = _ref25$className === void 0 ? '' : _ref25$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M28,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V28A3.5,3.5,0,0,1,28,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H28A3.5,3.5,0,0,1,31.5,40V61A3.5,3.5,0,0,1,28,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,20.5H40A3.5,3.5,0,0,1,36.5,17V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V17A3.5,3.5,0,0,1,61,20.5ZM40,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,42.5H40A3.5,3.5,0,0,1,36.5,39V29A3.5,3.5,0,0,1,40,25.5H61A3.5,3.5,0,0,1,64.5,29V39A3.5,3.5,0,0,1,61,42.5Zm-21-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V51A3.5,3.5,0,0,1,40,47.5H61A3.5,3.5,0,0,1,64.5,51V61A3.5,3.5,0,0,1,61,64.5Zm-21-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-8', 'atrc-prefix-atrc'),
    value: '5-8',
    icon: function icon(_ref26) {
      var _ref26$className = _ref26.className,
        className = _ref26$className === void 0 ? '' : _ref26$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H40A3.5,3.5,0,0,1,36.5,28V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM40,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V40A3.5,3.5,0,0,1,40,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-21-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,20.5H7A3.5,3.5,0,0,1,3.5,17V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V17A3.5,3.5,0,0,1,28,20.5ZM7,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,42.5H7A3.5,3.5,0,0,1,3.5,39V29A3.5,3.5,0,0,1,7,25.5H28A3.5,3.5,0,0,1,31.5,29V39A3.5,3.5,0,0,1,28,42.5ZM7,28.5a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V51A3.5,3.5,0,0,1,7,47.5H28A3.5,3.5,0,0,1,31.5,51V61A3.5,3.5,0,0,1,28,64.5ZM7,50.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('5-9', 'atrc-prefix-atrc'),
    value: '5-9',
    icon: function icon(_ref27) {
      var _ref27$className = _ref27.className,
        className = _ref27$className === void 0 ? '' : _ref27$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H17A3.5,3.5,0,0,1,20.5,40V61A3.5,3.5,0,0,1,17,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V40A3.5,3.5,0,0,1,51,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H51A3.5,3.5,0,0,1,47.5,28V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM51,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39.5,6.5v22H6.5V6.5h33m1-3H5.5a2,2,0,0,0-2,2v24a2,2,0,0,0,2,2h35a2,2,0,0,0,2-2V5.5a2,2,0,0,0-2-2Z"
      }));
    }
  }, {
    label: __('5-10', 'atrc-prefix-atrc'),
    value: '5-10',
    icon: function icon(_ref28) {
      var _ref28$className = _ref28.className,
        className = _ref28$className === void 0 ? '' : _ref28$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M59.5,64.5h-10A3.5,3.5,0,0,1,46,61V40a3.5,3.5,0,0,1,3.5-3.5h10A3.5,3.5,0,0,1,63,40V61A3.5,3.5,0,0,1,59.5,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h10A.5.5,0,0,0,60,61V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M37.5,64.5h-10A3.5,3.5,0,0,1,24,61V40a3.5,3.5,0,0,1,3.5-3.5h10A3.5,3.5,0,0,1,41,40V61A3.5,3.5,0,0,1,37.5,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h10A.5.5,0,0,0,38,61V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15.5,64.5H5.5A3.5,3.5,0,0,1,2,61V40a3.5,3.5,0,0,1,3.5-3.5h10A3.5,3.5,0,0,1,19,40V61A3.5,3.5,0,0,1,15.5,64.5Zm-10-25A.5.5,0,0,0,5,40V61a.5.5,0,0,0,.5.5h10A.5.5,0,0,0,16,61V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15.5,31.5H5.5A3.5,3.5,0,0,1,2,28V7A3.5,3.5,0,0,1,5.5,3.5h10A3.5,3.5,0,0,1,19,7V28A3.5,3.5,0,0,1,15.5,31.5Zm-10-25A.5.5,0,0,0,5,7V28a.5.5,0,0,0,.5.5h10A.5.5,0,0,0,16,28V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M60,6.5v22H27V6.5H60m1-3H26a2,2,0,0,0-2,2v24a2,2,0,0,0,2,2H61a2,2,0,0,0,2-2V5.5a2,2,0,0,0-2-2Z"
      }));
    }
  }, {
    label: __('5-11', 'atrc-prefix-atrc'),
    value: '5-11',
    icon: function icon(_ref29) {
      var _ref29$className = _ref29.className,
        className = _ref29$className === void 0 ? '' : _ref29$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M59.5,30h-10A3.5,3.5,0,0,1,46,26.5V5.5A3.5,3.5,0,0,1,49.5,2h10A3.5,3.5,0,0,1,63,5.5v21A3.5,3.5,0,0,1,59.5,30ZM49.5,5a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5V5.5a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M37.5,30h-10A3.5,3.5,0,0,1,24,26.5V5.5A3.5,3.5,0,0,1,27.5,2h10A3.5,3.5,0,0,1,41,5.5v21A3.5,3.5,0,0,1,37.5,30ZM27.5,5a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5V5.5a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15.5,30H5.5A3.5,3.5,0,0,1,2,26.5V5.5A3.5,3.5,0,0,1,5.5,2h10A3.5,3.5,0,0,1,19,5.5v21A3.5,3.5,0,0,1,15.5,30ZM5.5,5a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5V5.5a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15.5,63H5.5A3.5,3.5,0,0,1,2,59.5v-21A3.5,3.5,0,0,1,5.5,35h10A3.5,3.5,0,0,1,19,38.5v21A3.5,3.5,0,0,1,15.5,63ZM5.5,38a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-21a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M60,38V60H27V38H60m1-3H26a2,2,0,0,0-2,2V61a2,2,0,0,0,2,2H61a2,2,0,0,0,2-2V37a2,2,0,0,0-2-2Z"
      }));
    }
  }, {
    label: __('5-12', 'atrc-prefix-atrc'),
    value: '5-12',
    icon: function icon(_ref30) {
      var _ref30$className = _ref30.className,
        className = _ref30$className === void 0 ? '' : _ref30$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,30H7a3.5,3.5,0,0,1-3.5-3.5V5.5A3.5,3.5,0,0,1,7,2H17a3.5,3.5,0,0,1,3.5,3.5v21A3.5,3.5,0,0,1,17,30ZM7,5a.5.5,0,0,0-.5.5v21A.5.5,0,0,0,7,27H17a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,17,5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,30H29a3.5,3.5,0,0,1-3.5-3.5V5.5A3.5,3.5,0,0,1,29,2H39a3.5,3.5,0,0,1,3.5,3.5v21A3.5,3.5,0,0,1,39,30ZM29,5a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,39,5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,30H51a3.5,3.5,0,0,1-3.5-3.5V5.5A3.5,3.5,0,0,1,51,2H61a3.5,3.5,0,0,1,3.5,3.5v21A3.5,3.5,0,0,1,61,30ZM51,5a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,61,5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,63H51a3.5,3.5,0,0,1-3.5-3.5v-21A3.5,3.5,0,0,1,51,35H61a3.5,3.5,0,0,1,3.5,3.5v21A3.5,3.5,0,0,1,61,63ZM51,38a.5.5,0,0,0-.5.5v21a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5v-21A.5.5,0,0,0,61,38Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39.5,38V60H6.5V38h33m1-3H5.5a2,2,0,0,0-2,2V61a2,2,0,0,0,2,2h35a2,2,0,0,0,2-2V37a2,2,0,0,0-2-2Z"
      }));
    }
  }];
};
export var SixColumnsOptions = function SixColumnsOptions() {
  return [{
    label: __('6-1', 'atrc-prefix-atrc'),
    value: '6-1',
    icon: function icon(_ref31) {
      var _ref31$className = _ref31.className,
        className = _ref31$className === void 0 ? '' : _ref31$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.67,64H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H8.67a2,2,0,0,1,2,2V62A2,2,0,0,1,8.67,64ZM6,6H6V62H8.67V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.33,64H16.67a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h2.67a2,2,0,0,1,2,2V62A2,2,0,0,1,19.33,64ZM16.67,6h0V62h2.67V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30,64H27.33a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2H30a2,2,0,0,1,2,2V62A2,2,0,0,1,30,64ZM27.33,6h0V62H30V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M40.67,64H38a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h2.67a2,2,0,0,1,2,2V62A2,2,0,0,1,40.67,64ZM38,6h0V62h2.67V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M51.33,64H48.67a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h2.67a2,2,0,0,1,2,2V62A2,2,0,0,1,51.33,64ZM48.67,6h0V62h2.67V6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M62,64H59.33a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2H62a2,2,0,0,1,2,2V62A2,2,0,0,1,62,64ZM59.33,6h0V62H62V6Z"
      }));
    }
  }, {
    label: __('6-2', 'atrc-prefix-atrc'),
    value: '6-2',
    icon: function icon(_ref32) {
      var _ref32$className = _ref32.className,
        className = _ref32$className === void 0 ? '' : _ref32$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M28,20.5H7A3.5,3.5,0,0,1,3.5,17V7A3.5,3.5,0,0,1,7,3.5H28A3.5,3.5,0,0,1,31.5,7V17A3.5,3.5,0,0,1,28,20.5ZM7,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,20.5H40A3.5,3.5,0,0,1,36.5,17V7A3.5,3.5,0,0,1,40,3.5H61A3.5,3.5,0,0,1,64.5,7V17A3.5,3.5,0,0,1,61,20.5ZM40,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,42.5H7A3.5,3.5,0,0,1,3.5,39V29A3.5,3.5,0,0,1,7,25.5H28A3.5,3.5,0,0,1,31.5,29V39A3.5,3.5,0,0,1,28,42.5ZM7,28.5a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,42.5H40A3.5,3.5,0,0,1,36.5,39V29A3.5,3.5,0,0,1,40,25.5H61A3.5,3.5,0,0,1,64.5,29V39A3.5,3.5,0,0,1,61,42.5Zm-21-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,64.5H7A3.5,3.5,0,0,1,3.5,61V51A3.5,3.5,0,0,1,7,47.5H28A3.5,3.5,0,0,1,31.5,51V61A3.5,3.5,0,0,1,28,64.5ZM7,50.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H40A3.5,3.5,0,0,1,36.5,61V51A3.5,3.5,0,0,1,40,47.5H61A3.5,3.5,0,0,1,64.5,51V61A3.5,3.5,0,0,1,61,64.5Zm-21-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-3', 'atrc-prefix-atrc'),
    value: '6-3',
    icon: function icon(_ref33) {
      var _ref33$className = _ref33.className,
        className = _ref33$className === void 0 ? '' : _ref33$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V28A3.5,3.5,0,0,1,17,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H51A3.5,3.5,0,0,1,47.5,28V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5ZM51,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H17A3.5,3.5,0,0,1,20.5,40V61A3.5,3.5,0,0,1,17,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V40A3.5,3.5,0,0,1,51,36.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-10-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-4', 'atrc-prefix-atrc'),
    value: '6-4',
    icon: function icon(_ref34) {
      var _ref34$className = _ref34.className,
        className = _ref34$className === void 0 ? '' : _ref34$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V61A3.5,3.5,0,0,1,17,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,20.5H29a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,29,3.5H61A3.5,3.5,0,0,1,64.51,7V17A3.5,3.5,0,0,1,61,20.5ZM29,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29a3.5,3.5,0,0,1-3.5-3.5V51A3.5,3.5,0,0,1,29,47.5H39a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,39,64.5Zm-10-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51a3.5,3.5,0,0,1-3.5-3.5V51A3.5,3.5,0,0,1,51,47.5H61a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,61,64.5Zm-10-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,42.5H29a3.5,3.5,0,0,1-3.5-3.5V29A3.5,3.5,0,0,1,29,25.5H39a3.5,3.5,0,0,1,3.5,3.5V39A3.5,3.5,0,0,1,39,42.5Zm-10-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,42.5H51a3.5,3.5,0,0,1-3.5-3.5V29A3.5,3.5,0,0,1,51,25.5H61a3.5,3.5,0,0,1,3.5,3.5V39A3.5,3.5,0,0,1,61,42.5Zm-10-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-5', 'atrc-prefix-atrc'),
    value: '6-5',
    icon: function icon(_ref35) {
      var _ref35$className = _ref35.className,
        className = _ref35$className === void 0 ? '' : _ref35$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.51,7V61A3.5,3.5,0,0,1,61,64.5ZM51,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,20.5H7A3.5,3.5,0,0,1,3.5,17V7A3.5,3.5,0,0,1,7,3.5H39A3.5,3.5,0,0,1,42.5,7V17A3.5,3.5,0,0,1,39,20.5ZM7,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V51A3.5,3.5,0,0,1,29,47.5H39A3.5,3.5,0,0,1,42.5,51V61A3.5,3.5,0,0,1,39,64.5Zm-10-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V51A3.5,3.5,0,0,1,7,47.5H17A3.5,3.5,0,0,1,20.5,51V61A3.5,3.5,0,0,1,17,64.5ZM7,50.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,42.5H29A3.5,3.5,0,0,1,25.5,39V29A3.5,3.5,0,0,1,29,25.5H39A3.5,3.5,0,0,1,42.5,29V39A3.5,3.5,0,0,1,39,42.5Zm-10-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,42.5H7A3.5,3.5,0,0,1,3.5,39V29A3.5,3.5,0,0,1,7,25.5H17A3.5,3.5,0,0,1,20.5,29V39A3.5,3.5,0,0,1,17,42.5ZM7,28.5a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-6', 'atrc-prefix-atrc'),
    value: '6-6',
    icon: function icon(_ref36) {
      var _ref36$className = _ref36.className,
        className = _ref36$className === void 0 ? '' : _ref36$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V61A3.5,3.5,0,0,1,17,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,42.5H29a3.5,3.5,0,0,1-3.5-3.5V29A3.5,3.5,0,0,1,29,25.5H61a3.5,3.5,0,0,1,3.5,3.5V39A3.5,3.5,0,0,1,61,42.5Zm-32-14a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29a3.5,3.5,0,0,1-3.5-3.5V51A3.5,3.5,0,0,1,29,47.5H39a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,39,64.5Zm-10-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51a3.5,3.5,0,0,1-3.5-3.5V51A3.5,3.5,0,0,1,51,47.5H61a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,61,64.5Zm-10-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,20.5H29a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.51,7V17A3.5,3.5,0,0,1,39,20.5ZM29,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,20.5H51a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.51,7V17A3.5,3.5,0,0,1,61,20.5ZM51,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-7', 'atrc-prefix-atrc'),
    value: '6-7',
    icon: function icon(_ref37) {
      var _ref37$className = _ref37.className,
        className = _ref37$className === void 0 ? '' : _ref37$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51a3.5,3.5,0,0,1-3.5-3.5V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.51,7V61A3.5,3.5,0,0,1,61,64.5ZM51,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,42.5H7A3.5,3.5,0,0,1,3.5,39V29A3.5,3.5,0,0,1,7,25.5H39A3.5,3.5,0,0,1,42.5,29V39A3.5,3.5,0,0,1,39,42.5ZM7,28.5a.5.5,0,0,0-.5.5V39a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V29a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H29A3.5,3.5,0,0,1,25.5,61V51A3.5,3.5,0,0,1,29,47.5H39A3.5,3.5,0,0,1,42.5,51V61A3.5,3.5,0,0,1,39,64.5Zm-10-14a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V51A3.5,3.5,0,0,1,7,47.5H17A3.5,3.5,0,0,1,20.5,51V61A3.5,3.5,0,0,1,17,64.5ZM7,50.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V51a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,20.5H29A3.5,3.5,0,0,1,25.5,17V7A3.5,3.5,0,0,1,29,3.5H39A3.5,3.5,0,0,1,42.5,7V17A3.5,3.5,0,0,1,39,20.5ZM29,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17,20.5H7A3.5,3.5,0,0,1,3.5,17V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V17A3.5,3.5,0,0,1,17,20.5ZM7,6.5a.5.5,0,0,0-.5.5V17a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-8', 'atrc-prefix-atrc'),
    value: '6-8',
    icon: function icon(_ref38) {
      var _ref38$className = _ref38.className,
        className = _ref38$className === void 0 ? '' : _ref38$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17,64.5H7A3.5,3.5,0,0,1,3.5,61V7A3.5,3.5,0,0,1,7,3.5H17A3.5,3.5,0,0,1,20.5,7V61A3.5,3.5,0,0,1,17,64.5ZM7,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H17a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M31.67,64.5H29A3.5,3.5,0,0,1,25.5,61V40A3.5,3.5,0,0,1,29,36.5h2.67a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,31.67,64.5ZM29,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h2.67a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M46.33,64.5H43.67a3.5,3.5,0,0,1-3.5-3.5V40a3.5,3.5,0,0,1,3.5-3.5h2.67a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,46.33,64.5Zm-2.67-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h2.67a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H58.33a3.5,3.5,0,0,1-3.5-3.5V40a3.5,3.5,0,0,1,3.5-3.5H61A3.5,3.5,0,0,1,64.5,40V61A3.5,3.5,0,0,1,61,64.5Zm-2.67-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,31.5H58.33a3.5,3.5,0,0,1-3.5-3.5V7a3.5,3.5,0,0,1,3.5-3.5H61A3.5,3.5,0,0,1,64.5,7V28A3.5,3.5,0,0,1,61,31.5Zm-2.67-25a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M46.33,31.5H29A3.5,3.5,0,0,1,25.5,28V7A3.5,3.5,0,0,1,29,3.5H46.33A3.5,3.5,0,0,1,49.83,7V28A3.5,3.5,0,0,1,46.33,31.5ZM29,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H46.33a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }, {
    label: __('6-9', 'atrc-prefix-atrc'),
    value: '6-9',
    icon: function icon(_ref39) {
      var _ref39$className = _ref39.className,
        className = _ref39$className === void 0 ? '' : _ref39$className;
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h', className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M61,64.5H51A3.5,3.5,0,0,1,47.5,61V7A3.5,3.5,0,0,1,51,3.5H61A3.5,3.5,0,0,1,64.5,7V61A3.5,3.5,0,0,1,61,64.5ZM51,6.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H61a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,64.5H36.33a3.5,3.5,0,0,1-3.5-3.5V40a3.5,3.5,0,0,1,3.5-3.5H39A3.5,3.5,0,0,1,42.5,40V61A3.5,3.5,0,0,1,39,64.5Zm-2.67-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M24.33,64.5H21.67a3.5,3.5,0,0,1-3.5-3.5V40a3.5,3.5,0,0,1,3.5-3.5h2.67a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,24.33,64.5Zm-2.67-25a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5h2.67a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9.67,64.5H7A3.5,3.5,0,0,1,3.5,61V40A3.5,3.5,0,0,1,7,36.5H9.67a3.5,3.5,0,0,1,3.5,3.5V61A3.5,3.5,0,0,1,9.67,64.5ZM7,39.5a.5.5,0,0,0-.5.5V61a.5.5,0,0,0,.5.5H9.67a.5.5,0,0,0,.5-.5V40a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9.67,31.5H7A3.5,3.5,0,0,1,3.5,28V7A3.5,3.5,0,0,1,7,3.5H9.67A3.5,3.5,0,0,1,13.17,7V28A3.5,3.5,0,0,1,9.67,31.5ZM7,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H9.67a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M39,31.5H21.67a3.5,3.5,0,0,1-3.5-3.5V7a3.5,3.5,0,0,1,3.5-3.5H39A3.5,3.5,0,0,1,42.5,7V28A3.5,3.5,0,0,1,39,31.5ZM21.67,6.5a.5.5,0,0,0-.5.5V28a.5.5,0,0,0,.5.5H39a.5.5,0,0,0,.5-.5V7a.5.5,0,0,0-.5-.5Z"
      }));
    }
  }];
};
//# sourceMappingURL=options.js.map