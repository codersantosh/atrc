"use strict";(self.webpackChunkatrc=self.webpackChunkatrc||[]).push([[5937],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{aD:function(){return action}});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./stories/controls/BlockShape.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@wordpress/i18n/build-module/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),_packages__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_exports__.default={title:"Controls/AtrcControlBlockShape",component:_packages__WEBPACK_IMPORTED_MODULE_4__.JQN,tags:["autodocs"],argTypes:{onChange:{action:"onChange"}},args:{value:{tType:"svg",tSvgFrm:"def",tSvgDefd:"",tSvgCust:"",tFlipV:"",tFlipH:"",tSvgCl:"",tImgFrm:"",tImgId:"",tImgUrl:"",tImgSz:"",xsTH:"",smTH:"",mdTH:"",lgTH:"",xlTH:"",xxlTH:"",tW:"",smTW:"",mdTW:"",lgTW:"",xlTW:"",xxlTW:"",tZT:"",bType:"svg",bSvgFrm:"def",bSvgDefd:"",bSvgCust:"",bFlipV:"",bFlipH:"",bSvgCl:"",bImgFrm:"",bImgId:"",bImgUrl:"",bImgSz:"",xsBH:"",smBH:"",mdBH:"",lgBH:"",xlBH:"",xxlBH:"",bW:"",smBW:"",mdBW:"",lgBW:"",xlBW:"",xxlBW:"",bZT:""}}};var Default=(function(args){var _useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(args.value),2),value=_useState[0],setValue=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.JQN,{value:value,onChange:function(newValue){setValue(newValue),args.onChange(newValue),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("onChange")(newValue)}})}).bind({}),Example=function(){var _useState=_sliced_to_array((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({tType:"svg",tSvgFrm:"def",tSvgDefd:"",tSvgCust:"",tFlipV:"",tFlipH:"",tSvgCl:"",tImgFrm:"",tImgId:"",tImgUrl:"",tImgSz:"",xsTH:"",smTH:"",mdTH:"",lgTH:"",xlTH:"",xxlTH:"",xsTW:"",smTW:"",mdTW:"",lgTW:"",xlTW:"",xxlTW:"",tZIdx:"",bType:"svg",bSvgFrm:"def",bSvgDefd:"",bSvgCust:"",bFlipV:"",bFlipH:"",bSvgCl:"",bImgFrm:"",bImgId:"",bImgUrl:"",bImgSz:"",xsBH:"",smBH:"",mdBH:"",lgBH:"",xlBH:"",xxlBH:"",xsBW:"",smBW:"",mdBW:"",lgBW:"",xlBW:"",xxlBW:"",bZIdx:""}),2),value=_useState[0],setValue=_useState[1],_value_tType=value.tType,_value_tSvgFrm=value.tSvgFrm,_value_tSvgDefd=value.tSvgDefd,_value_tSvgCust=value.tSvgCust,_value_tFlipV=value.tFlipV,_value_tFlipH=value.tFlipH,_value_tSvgCl=value.tSvgCl,_value_tImgUrl=(value.tImgFrm,value.tImgId,value.tImgUrl),_value_xsTH=(value.tImgSz,value.xsTH),_value_smTH=value.smTH,_value_mdTH=value.mdTH,_value_lgTH=value.lgTH,_value_xlTH=value.xlTH,_value_xxlTH=value.xxlTH,_value_tZT=(value.tW,value.smTW,value.mdTW,value.lgTW,value.xlTW,value.xxlTW,value.tZT),_value_bType=value.bType,_value_bSvgFrm=value.bSvgFrm,_value_bSvgDefd=value.bSvgDefd,_value_bSvgCust=value.bSvgCust,_value_bFlipV=value.bFlipV,_value_bFlipH=value.bFlipH,_value_bSvgCl=value.bSvgCl,_value_bImgUrl=(value.bImgFrm,value.bImgId,value.bImgUrl),_value_xsBH=(value.bImgSz,value.xsBH),_value_smBH=value.smBH,_value_mdBH=value.mdBH,_value_lgBH=value.lgBH,_value_xlBH=value.xlBH,_value_xxlBH=value.xxlBH,_value_bZT=(value.bW,value.smBW,value.mdBW,value.lgBW,value.xlBW,value.xxlBW,value.bZT);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.Fvd,{renderContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.JQN,{value:value,onChange:function(newValue){setValue(function(prevValue){return Object.fromEntries(Object.entries(_object_spread({},prevValue,newValue)).filter(function(param){var _param=_sliced_to_array(param,2),key=_param[0];return""!==_param[1]&&key in newValue}))})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shape","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_packages__WEBPACK_IMPORTED_MODULE_4__.lAY,{style:{position:"relative",height:"250px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.BC3,{type:void 0===_value_tType?"svg":_value_tType,svgFrm:void 0===_value_tSvgFrm?"def":_value_tSvgFrm,svgDefd:void 0===_value_tSvgDefd?"":_value_tSvgDefd,svgCust:void 0===_value_tSvgCust?"":_value_tSvgCust,svgCl:void 0===_value_tSvgCl?"":_value_tSvgCl,flipV:void 0===_value_tFlipV?"":_value_tFlipV,flipH:void 0===_value_tFlipH?"":_value_tFlipH,imgUrl:void 0===_value_tImgUrl?"":_value_tImgUrl,xsH:void 0===_value_xsTH?"":_value_xsTH,smH:void 0===_value_smTH?"":_value_smTH,mdH:void 0===_value_mdTH?"":_value_mdTH,lgH:void 0===_value_lgTH?"":_value_lgTH,xlH:void 0===_value_xlTH?"":_value_xlTH,xxlH:void 0===_value_xxlTH?"":_value_xxlTH,zT:void 0===_value_tZT?"":_value_tZT,className:"at-shp-t"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.BC3,{type:void 0===_value_bType?"svg":_value_bType,svgFrm:void 0===_value_bSvgFrm?"def":_value_bSvgFrm,svgDefd:void 0===_value_bSvgDefd?"":_value_bSvgDefd,svgCust:void 0===_value_bSvgCust?"":_value_bSvgCust,svgCl:void 0===_value_bSvgCl?"":_value_bSvgCl,flipV:void 0===_value_bFlipV?"":_value_bFlipV,flipH:void 0===_value_bFlipH?"":_value_bFlipH,imgUrl:void 0===_value_bImgUrl?"":_value_bImgUrl,xsH:void 0===_value_xsBH?"":_value_xsBH,smH:void 0===_value_smBH?"":_value_smBH,mdH:void 0===_value_mdBH?"":_value_mdBH,lgH:void 0===_value_lgBH?"":_value_lgBH,xlH:void 0===_value_xlBH?"":_value_xlBH,xxlH:void 0===_value_xxlBH?"":_value_xxlBH,zT:void 0===_value_bZT?"":_value_bZT,className:"at-shp-t"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynamic CSS","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.jUI,{content:(0,_packages__WEBPACK_IMPORTED_MODULE_4__.FMg)(function(){var gotCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.Gfh)({value:value});if(console.log(gotCss),gotCss){var topCss=gotCss.topCss,bottomCss=gotCss.bottomCss,dynamicCss=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.zOM)({cssObj:topCss,selector:"#atrcUniqueSelector .at-shp-t"});if(dynamicCss+=(0,_packages__WEBPACK_IMPORTED_MODULE_4__.zOM)({cssObj:bottomCss,selector:"#atrcUniqueSelector .at-shp-b"}))return dynamicCss}return(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty css","atrc-prefix-atrc")}())})]}),renderSidebar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.c8U,{tag:"h3",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("at-m"),children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Value","atrc-prefix-atrc")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages__WEBPACK_IMPORTED_MODULE_4__.jUI,{content:JSON.stringify(value,null,2)})]}),sidebarProps:{sidebarCol:"at-col-6"},contentProps:{contentCol:"at-col-6"}})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = newValue => {\n    setValue(newValue);\n    args.onChange(newValue);\n    action('onChange')(newValue);\n  };\n  return <AtrcControlBlockShape value={value} onChange={handleChange} />;\n}",...Default.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState({\n    tType: 'svg',\n    tSvgFrm: 'def',\n    tSvgDefd: '',\n    tSvgCust: '',\n    tFlipV: '',\n    tFlipH: '',\n    tSvgCl: '',\n    tImgFrm: '',\n    tImgId: '',\n    tImgUrl: '',\n    tImgSz: '',\n    xsTH: '',\n    smTH: '',\n    mdTH: '',\n    lgTH: '',\n    xlTH: '',\n    xxlTH: '',\n    xsTW: '',\n    smTW: '',\n    mdTW: '',\n    lgTW: '',\n    xlTW: '',\n    xxlTW: '',\n    tZIdx: '',\n    bType: 'svg',\n    bSvgFrm: 'def',\n    bSvgDefd: '',\n    bSvgCust: '',\n    bFlipV: '',\n    bFlipH: '',\n    bSvgCl: '',\n    bImgFrm: '',\n    bImgId: '',\n    bImgUrl: '',\n    bImgSz: '',\n    xsBH: '',\n    smBH: '',\n    mdBH: '',\n    lgBH: '',\n    xlBH: '',\n    xxlBH: '',\n    xsBW: '',\n    smBW: '',\n    mdBW: '',\n    lgBW: '',\n    xlBW: '',\n    xxlBW: '',\n    bZIdx: ''\n  });\n  const {\n    tType = 'svg',\n    tSvgFrm = 'def',\n    tSvgDefd = '',\n    tSvgCust = '',\n    tFlipV = '',\n    tFlipH = '',\n    tSvgCl = '',\n    tImgFrm = '',\n    tImgId = '',\n    tImgUrl = '',\n    tImgSz = '',\n    xsTH = '',\n    smTH = '',\n    mdTH = '',\n    lgTH = '',\n    xlTH = '',\n    xxlTH = '',\n    tW = '',\n    smTW = '',\n    mdTW = '',\n    lgTW = '',\n    xlTW = '',\n    xxlTW = '',\n    tZT = '',\n    bType = 'svg',\n    bSvgFrm = 'def',\n    bSvgDefd = '',\n    bSvgCust = '',\n    bFlipV = '',\n    bFlipH = '',\n    bSvgCl = '',\n    bImgFrm = '',\n    bImgId = '',\n    bImgUrl = '',\n    bImgSz = '',\n    xsBH = '',\n    smBH = '',\n    mdBH = '',\n    lgBH = '',\n    xlBH = '',\n    xxlBH = '',\n    bW = '',\n    smBW = '',\n    mdBW = '',\n    lgBW = '',\n    xlBW = '',\n    xxlBW = '',\n    bZT = ''\n  } = value;\n  const handleChange = newValue => {\n    setValue(prevValue => {\n      // Filter out keys with empty values and keys not present in the new value\n      const filteredValue = Object.fromEntries(Object.entries({\n        ...prevValue,\n        ...newValue\n      }).filter(([key, value]) => value !== '' && key in newValue));\n      return filteredValue;\n    });\n  };\n  const getCss = () => {\n    const gotCss = AtrcControlBlockShapeCss({\n      value\n    });\n    console.log(gotCss);\n    if (gotCss) {\n      const {\n        topCss,\n        bottomCss\n      } = gotCss;\n      let dynamicCss = AtrcGenerateDynamicCss({\n        cssObj: topCss,\n        selector: '#atrcUniqueSelector .at-shp-t'\n      });\n      dynamicCss += AtrcGenerateDynamicCss({\n        cssObj: bottomCss,\n        selector: '#atrcUniqueSelector .at-shp-b'\n      });\n      if (dynamicCss) {\n        return dynamicCss;\n      }\n    }\n    return __('Empty css', 'atrc-prefix-atrc');\n  };\n  return <>\r\n            <AtrcWireFrameContentSidebar renderContent={<>\r\n                        <AtrcControlBlockShape value={value} onChange={handleChange} />\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Shape', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcWrap style={{\n        position: 'relative',\n        height: '250px'\n      }}>\r\n                            <AtrcBlockShape type={tType} svgFrm={tSvgFrm} svgDefd={tSvgDefd} svgCust={tSvgCust} svgCl={tSvgCl} flipV={tFlipV} flipH={tFlipH} imgUrl={tImgUrl} xsH={xsTH} smH={smTH} mdH={mdTH} lgH={lgTH} xlH={xlTH} xxlH={xxlTH} zT={tZT} className='at-shp-t' />\r\n                            <AtrcBlockShape type={bType} svgFrm={bSvgFrm} svgDefd={bSvgDefd} svgCust={bSvgCust} svgCl={bSvgCl} flipV={bFlipV} flipH={bFlipH} imgUrl={bImgUrl} xsH={xsBH} smH={smBH} mdH={mdBH} lgH={lgBH} xlH={xlBH} xxlH={xxlBH} zT={bZT} className='at-shp-t' />\r\n                        </AtrcWrap>\r\n\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Dynamic CSS', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />\r\n                    </>} renderSidebar={<>\r\n                        <AtrcText tag='h3' className={classnames('at-m')}>\r\n                            {__('Value', 'atrc-prefix-atrc')}\r\n                        </AtrcText>\r\n                        <AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />\r\n                    </>} sidebarProps={{\n      sidebarCol: 'at-col-6'\n    }} contentProps={{\n      contentCol: 'at-col-6'\n    }} />\r\n        </>;\n}",...Example.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Example"]}}]);