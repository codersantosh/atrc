"use strict";(self.webpackChunkatrc=self.webpackChunkatrc||[]).push([[4054],{"./stories/controls/Boundary.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Boundary:function(){return Boundary},BoundaryTab:function(){return BoundaryTab},__namedExportsOrder:function(){return __namedExportsOrder}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@wordpress/i18n/build-module/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),_packages__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_exports__.default={title:"Controls/AtrcControlBoundary"};var Boundary=function(){var gotCss,dynamicCss,_useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({bd:{bdr:{},bdrRad:{},boxSdw:{}}}),2),settings=_useState[0],setSettings=_useState[1],_settings_bd=settings.bd,bd=void 0===_settings_bd?{}:_settings_bd,updateSetting=function(key,val){var clonedSettings=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(settings);clonedSettings[key]=val,setSettings(clonedSettings)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.Fvd,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.cTh,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Boundary","atrc-prefix-atrc"),value:bd,onChange:function(newVal){updateSetting("bd",newVal)},allowMinWidth:!0,allowWidth:!0,allowMaxWidth:!0,allowMinHeight:!0,allowHeight:!0,allowMaxHeight:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.jUI,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.FMg)((gotCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.SCi)({value:bd}),(dynamicCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.zOM)({cssObj:gotCss,selector:"#atrcUniqueSelector"}))?dynamicCss:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc")))})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Values","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.jUI,{content:JSON.stringify(bd,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})})},BoundaryTab=function(){var gotCss,dynamicCss,_useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({bdTab:{bdr:{},bdrRad:{},boxSdw:{}}}),2),settings=_useState[0],setSettings=_useState[1],_settings_bdTab=settings.bdTab,bdTab=void 0===_settings_bdTab?{}:_settings_bdTab,updateSetting=function(key,val){var clonedSettings=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(settings);clonedSettings[key]=val,setSettings(clonedSettings)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.Fvd,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.cTh,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Boundary Tab","atrc-prefix-atrc"),type:"tab",value:bdTab,onChange:function(newVal){updateSetting("bdTab",newVal)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.jUI,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.FMg)((gotCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.SCi)({value:bdTab,type:"tab"}),(dynamicCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.zOM)({cssObj:gotCss,selector:"#atrcUniqueSelector"}))?dynamicCss:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc")))})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Values","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.jUI,{content:JSON.stringify(bdTab,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})})};Boundary.parameters={...Boundary.parameters,docs:{...Boundary.parameters?.docs,source:{originalSource:"() => {\n  const [settings, setSettings] = useState({\n    bd: {\n      bdr: {},\n      bdrRad: {},\n      boxSdw: {}\n    }\n  });\n  const {\n    bd = {}\n  } = settings;\n  const updateSetting = (key, val) => {\n    const clonedSettings = cloneDeep(settings);\n    clonedSettings[key] = val;\n    setSettings(clonedSettings);\n  };\n  const getCss = () => {\n    const gotCss = AtrcControlBoundaryCss({\n      value: bd\n    });\n    const dynamicCss = AtrcGenerateDynamicCss({\n      cssObj: gotCss,\n      selector: '#atrcUniqueSelector'\n    });\n    if (dynamicCss) {\n      return dynamicCss;\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <>\r\n            <AtrcWireFrameContentSidebar renderContent={<>\r\n                        <AtrcControlBoundary label={__('Boundary', 'atrc-prefix-atrc')} value={bd} onChange={newVal => {\n        updateSetting('bd', newVal);\n      }} allowMinWidth={true} allowWidth={true} allowMaxWidth={true} allowMinHeight={true} allowHeight={true} allowMaxHeight={true} />\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                    </>} renderSidebar={<>\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Values', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcPreTemplate1 content={JSON.stringify(bd, null, 2)} />\r\n                    </>} sidebarProps={{\n      sidebarCol: 'at-col-6'\n    }} contentProps={{\n      contentCol: 'at-col-6'\n    }} />\r\n        </>;\n}",...Boundary.parameters?.docs?.source}}},BoundaryTab.parameters={...BoundaryTab.parameters,docs:{...BoundaryTab.parameters?.docs,source:{originalSource:"() => {\n  const [settings, setSettings] = useState({\n    bdTab: {\n      bdr: {},\n      bdrRad: {},\n      boxSdw: {}\n    }\n  });\n  const {\n    bdTab = {}\n  } = settings;\n  const updateSetting = (key, val) => {\n    const clonedSettings = cloneDeep(settings);\n    clonedSettings[key] = val;\n    setSettings(clonedSettings);\n  };\n  const getCss = () => {\n    const gotCss = AtrcControlBoundaryCss({\n      value: bdTab,\n      type: 'tab'\n    });\n    const dynamicCss = AtrcGenerateDynamicCss({\n      cssObj: gotCss,\n      selector: '#atrcUniqueSelector'\n    });\n    if (dynamicCss) {\n      return dynamicCss;\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <>\r\n            <AtrcWireFrameContentSidebar renderContent={<>\r\n                        <AtrcControlBoundary label={__('Boundary Tab', 'atrc-prefix-atrc')} type='tab' value={bdTab} onChange={newVal => {\n        updateSetting('bdTab', newVal);\n      }} />\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                    </>} renderSidebar={<>\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Values', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcPreTemplate1 content={JSON.stringify(bdTab, null, 2)} />\r\n                    </>} sidebarProps={{\n      sidebarCol: 'at-col-6'\n    }} contentProps={{\n      contentCol: 'at-col-6'\n    }} />\r\n        </>;\n}",...BoundaryTab.parameters?.docs?.source}}};let __namedExportsOrder=["Boundary","BoundaryTab"]}}]);