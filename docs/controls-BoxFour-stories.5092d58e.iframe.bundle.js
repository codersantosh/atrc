"use strict";(self.webpackChunkatrc=self.webpackChunkatrc||[]).push([[681],{"./stories/controls/BoxFour.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxFour:function(){return BoxFour},BoxFourDevice:function(){return BoxFourDevice},BoxFourDeviceTab:function(){return BoxFourDeviceTab},BoxFourTab:function(){return BoxFourTab},__namedExportsOrder:function(){return __namedExportsOrder}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@wordpress/i18n/build-module/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),_packages__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_exports__.default={title:"Controls/AtrcControlBoxFour"};var BoxFour=function(){var gotCss,_useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({boxFour:{t:"",r:"",b:"",l:""}}),2),settings=_useState[0],setSettings=_useState[1],_settings_boxFour=settings.boxFour,boxFour=void 0===_settings_boxFour?{}:_settings_boxFour,updateSetting=function(key,val){var clonedSettings=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(settings);clonedSettings[key]=val,setSettings(clonedSettings)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.K_P,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.pYu,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Control Unit","atrc-prefix-atrc"),value:boxFour,onChange:function(newVal){updateSetting("boxFour",newVal)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.fa0)((gotCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.D7D)({value:boxFour,property:"--at-m"}))?gotCss:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc"))})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Example value","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:JSON.stringify(boxFour,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})},BoxFourDevice=function(){var _useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({boxFourDevice:{xsT:"",xsB:"",xsR:"",xsL:"",smT:"",smB:"",smR:"",smL:"",mdT:"",mdB:"",mdR:"",mdL:"",lgT:"",lgB:"",lgR:"",lgL:"",xlT:"",xlB:"",xlR:"",xlL:"",xxlT:"",xxlB:"",xxlR:"",xxlL:""}}),2),settings=_useState[0],setSettings=_useState[1],_settings_boxFourDevice=settings.boxFourDevice,boxFourDevice=void 0===_settings_boxFourDevice?{}:_settings_boxFourDevice,updateSetting=function(key,val){var clonedSettings=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(settings);clonedSettings[key]=val,setSettings(clonedSettings)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.K_P,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.NLA,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Control Unit Device","atrc-prefix-atrc"),value:boxFourDevice,onChange:function(newVal){updateSetting("boxFourDevice",newVal)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.fa0)(function(){var boxCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.Ui)({value:boxFourDevice,property:"--at-m"});if(!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(boxCss)){var dynamicCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.ee5)({cssObj:boxCss,selector:"#atrcUniqueSelector"});if(dynamicCss)return dynamicCss}return(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc")}())})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Values","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:JSON.stringify(boxFourDevice,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})},BoxFourTab=function(){var _useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({boxFourTab:{t:"2px",b:"2px",r:"2px",l:"2px",tHover:"3px",bHover:"3px",rHover:"3px",lHover:"3px"}}),2),settings=_useState[0],setSettings=_useState[1],_settings_boxFourTab=settings.boxFourTab,boxFourTab=void 0===_settings_boxFourTab?{}:_settings_boxFourTab,updateSetting=function(key,val){var clonedSettings=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(settings);clonedSettings[key]=val,setSettings(clonedSettings)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.K_P,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.oRO,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Control Unit Tab","atrc-prefix-atrc"),value:boxFourTab,onChange:function(newVal){updateSetting("boxFourTab",newVal)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.fa0)(function(){var boxCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.$aT)({value:boxFourTab,property:"--at-m"});if(!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(boxCss)){var dynamicCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.ee5)({cssObj:boxCss,selector:"#atrcUniqueSelector"});if(dynamicCss)return dynamicCss}return(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc")}())})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Values","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:JSON.stringify(boxFourTab,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})},BoxFourDeviceTab=function(){var _useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({boxFourDeviceTab:{xsT:"1px",xsB:"1px",xsR:"1px",xsL:"1px",mdT:"2px",mdR:"2px",mdB:"2px",mdL:"2px",lgT:"3px",lgR:"3px",lgB:"3px",lgL:"3px",xlT:"4px",xlR:"4px",xlB:"4px",xlL:"4px",xlTHover:"8px",xlRHover:"8px",xlBHover:"8px",xlLHover:"8px",xsTHover:"5px",xsBHover:"5px",xsRHover:"5px",xsLHover:"5px",mdTHover:"6px",mdRHover:"6px",mdBHover:"6px",mdLHover:"6px",lgTHover:"7px",lgRHover:"7px",lgBHover:"7px",lgLHover:"7px"}}),2),settings=_useState[0],setSettings=_useState[1],_settings_boxFourDeviceTab=settings.boxFourDeviceTab,boxFourDeviceTab=void 0===_settings_boxFourDeviceTab?{}:_settings_boxFourDeviceTab,updateSetting=function(key,val){var clonedSettings=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(settings);clonedSettings[key]=val,setSettings(clonedSettings)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.K_P,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.mvb,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Control Unit Device Tab","atrc-prefix-atrc"),value:boxFourDeviceTab,onChange:function(newVal){updateSetting("boxFourDeviceTab",newVal)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.fa0)(function(){var boxCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.DVB)({value:boxFourDeviceTab,property:"--at-m"});if(!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(boxCss)){var dynamicCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.ee5)({cssObj:boxCss,selector:"#atrcUniqueSelector"});if(dynamicCss)return dynamicCss}return(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc")}())})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.o7H,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Values","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.vDd,{content:JSON.stringify(boxFourDeviceTab,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})};BoxFour.parameters={...BoxFour.parameters,docs:{...BoxFour.parameters?.docs,source:{originalSource:"() => {\n  const [settings, setSettings] = useState({\n    boxFour: {\n      t: '',\n      r: '',\n      b: '',\n      l: ''\n    }\n  });\n  const {\n    boxFour = {}\n  } = settings;\n  const updateSetting = (key, val) => {\n    const clonedSettings = cloneDeep(settings);\n    clonedSettings[key] = val;\n    setSettings(clonedSettings);\n  };\n  const getCss = () => {\n    const gotCss = AtrcControlBoxFourShorthandCssOnly({\n      value: boxFour,\n      property: '--at-m'\n    });\n    if (gotCss) {\n      return gotCss;\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <AtrcWireFrameContentSidebar renderContent={<>\r\n                    <AtrcControlBoxFour label={__('Control Unit', 'atrc-prefix-atrc')} value={boxFour} onChange={newVal => {\n      updateSetting('boxFour', newVal);\n    }} />\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                </>} renderSidebar={<>\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Example value', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={JSON.stringify(boxFour, null, 2)} />\r\n                </>} sidebarProps={{\n    sidebarCol: 'at-col-6'\n  }} contentProps={{\n    contentCol: 'at-col-6'\n  }} />;\n}",...BoxFour.parameters?.docs?.source}}},BoxFourDevice.parameters={...BoxFourDevice.parameters,docs:{...BoxFourDevice.parameters?.docs,source:{originalSource:"() => {\n  const [settings, setSettings] = useState({\n    boxFourDevice: {\n      xsT: '',\n      xsB: '',\n      xsR: '',\n      xsL: '',\n      smT: '',\n      smB: '',\n      smR: '',\n      smL: '',\n      mdT: '',\n      mdB: '',\n      mdR: '',\n      mdL: '',\n      lgT: '',\n      lgB: '',\n      lgR: '',\n      lgL: '',\n      xlT: '',\n      xlB: '',\n      xlR: '',\n      xlL: '',\n      xxlT: '',\n      xxlB: '',\n      xxlR: '',\n      xxlL: ''\n    }\n  });\n  const {\n    boxFourDevice = {}\n  } = settings;\n  const updateSetting = (key, val) => {\n    const clonedSettings = cloneDeep(settings);\n    clonedSettings[key] = val;\n    setSettings(clonedSettings);\n  };\n  const getCss = () => {\n    const boxCss = AtrcControlBoxFourDeviceCss({\n      value: boxFourDevice,\n      property: '--at-m'\n    });\n    if (!isEmpty(boxCss)) {\n      const dynamicCss = AtrcGenerateDynamicCss({\n        cssObj: boxCss,\n        selector: '#atrcUniqueSelector'\n      });\n      if (dynamicCss) {\n        return dynamicCss;\n      }\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <AtrcWireFrameContentSidebar renderContent={<>\r\n                    <AtrcControlBoxFourDevice label={__('Control Unit Device', 'atrc-prefix-atrc')} value={boxFourDevice} onChange={newVal => {\n      updateSetting('boxFourDevice', newVal);\n    }} />\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                </>} renderSidebar={<>\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Values', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={JSON.stringify(boxFourDevice, null, 2)} />\r\n                </>} sidebarProps={{\n    sidebarCol: 'at-col-6'\n  }} contentProps={{\n    contentCol: 'at-col-6'\n  }} />;\n}",...BoxFourDevice.parameters?.docs?.source}}},BoxFourTab.parameters={...BoxFourTab.parameters,docs:{...BoxFourTab.parameters?.docs,source:{originalSource:"() => {\n  const [settings, setSettings] = useState({\n    boxFourTab: {\n      t: '2px',\n      b: '2px',\n      r: '2px',\n      l: '2px',\n      tHover: '3px',\n      bHover: '3px',\n      rHover: '3px',\n      lHover: '3px'\n    }\n  });\n  const {\n    boxFourTab = {}\n  } = settings;\n  const updateSetting = (key, val) => {\n    const clonedSettings = cloneDeep(settings);\n    clonedSettings[key] = val;\n    setSettings(clonedSettings);\n  };\n  const getCss = () => {\n    const boxCss = AtrcControlBoxFourTabCss({\n      value: boxFourTab,\n      property: '--at-m'\n    });\n    if (!isEmpty(boxCss)) {\n      const dynamicCss = AtrcGenerateDynamicCss({\n        cssObj: boxCss,\n        selector: '#atrcUniqueSelector'\n      });\n      if (dynamicCss) {\n        return dynamicCss;\n      }\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <AtrcWireFrameContentSidebar renderContent={<>\r\n                    <AtrcControlBoxFourTab label={__('Control Unit Tab', 'atrc-prefix-atrc')} value={boxFourTab} onChange={newVal => {\n      updateSetting('boxFourTab', newVal);\n    }} />\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                </>} renderSidebar={<>\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Values', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={JSON.stringify(boxFourTab, null, 2)} />\r\n                </>} sidebarProps={{\n    sidebarCol: 'at-col-6'\n  }} contentProps={{\n    contentCol: 'at-col-6'\n  }} />;\n}",...BoxFourTab.parameters?.docs?.source}}},BoxFourDeviceTab.parameters={...BoxFourDeviceTab.parameters,docs:{...BoxFourDeviceTab.parameters?.docs,source:{originalSource:"() => {\n  const [settings, setSettings] = useState({\n    boxFourDeviceTab: {\n      xsT: '1px',\n      xsB: '1px',\n      xsR: '1px',\n      xsL: '1px',\n      mdT: '2px',\n      mdR: '2px',\n      mdB: '2px',\n      mdL: '2px',\n      lgT: '3px',\n      lgR: '3px',\n      lgB: '3px',\n      lgL: '3px',\n      xlT: '4px',\n      xlR: '4px',\n      xlB: '4px',\n      xlL: '4px',\n      xlTHover: '8px',\n      xlRHover: '8px',\n      xlBHover: '8px',\n      xlLHover: '8px',\n      xsTHover: '5px',\n      xsBHover: '5px',\n      xsRHover: '5px',\n      xsLHover: '5px',\n      mdTHover: '6px',\n      mdRHover: '6px',\n      mdBHover: '6px',\n      mdLHover: '6px',\n      lgTHover: '7px',\n      lgRHover: '7px',\n      lgBHover: '7px',\n      lgLHover: '7px'\n    }\n  });\n  const {\n    boxFourDeviceTab = {}\n  } = settings;\n  const updateSetting = (key, val) => {\n    const clonedSettings = cloneDeep(settings);\n    clonedSettings[key] = val;\n    setSettings(clonedSettings);\n  };\n  const getCss = () => {\n    const boxCss = AtrcControlBoxFourDeviceTabCss({\n      value: boxFourDeviceTab,\n      property: '--at-m'\n    });\n    if (!isEmpty(boxCss)) {\n      const dynamicCss = AtrcGenerateDynamicCss({\n        cssObj: boxCss,\n        selector: '#atrcUniqueSelector'\n      });\n      if (dynamicCss) {\n        return dynamicCss;\n      }\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <AtrcWireFrameContentSidebar renderContent={<>\r\n                    <AtrcControlBoxFourDeviceTab label={__('Control Unit Device Tab', 'atrc-prefix-atrc')} value={boxFourDeviceTab} onChange={newVal => {\n      updateSetting('boxFourDeviceTab', newVal);\n    }} />\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                </>} renderSidebar={<>\r\n                    <AtrcText tag='h3' className={classnames('at-m')}>\r\n                        {__('Values', 'atrc-prefix-atrc')}\r\n                    </AtrcText>\r\n                    <AtrcPreTemplate1 content={JSON.stringify(boxFourDeviceTab, null, 2)} />\r\n                </>} sidebarProps={{\n    sidebarCol: 'at-col-6'\n  }} contentProps={{\n    contentCol: 'at-col-6'\n  }} />;\n}",...BoxFourDeviceTab.parameters?.docs?.source}}};let __namedExportsOrder=["BoxFour","BoxFourDevice","BoxFourTab","BoxFourDeviceTab"]}}]);