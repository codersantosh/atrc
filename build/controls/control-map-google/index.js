function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';

/*Attributes Structure
Type Object
{
loc
lat
lng
markers:[]
mapTypeId
gestureHandling
zoom
mapTypeControl
zoomControl
fullscreenControl 
streetViewControl
}
 * */

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlText from '../control-text';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcPanelBody from '../../molecules/panel-body';
import AtrcNotice from '../../molecules/notice';
import AtrcRepeater from '../../molecules/repeater';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';
import AtrcRepeaterGroupAdd from '../../molecules/repeater/repeater-group-add';
import AtrcRepeaterGroup from '../../molecules/repeater/repeater-group';
import AtrcControlTextarea from '../control-textarea';
import AtrcControlSelect from '../control-select';
import AtrcControlRange from '../control-range';
import AtrcControlToggle from '../control-toggle';

/*Local*/
var AtrcControlMapGoogle = function AtrcControlMapGoogle(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$apiKey = props.apiKey,
    apiKey = _props$apiKey === void 0 ? '' : _props$apiKey;
  var _value$loc = value.loc,
    loc = _value$loc === void 0 ? '' : _value$loc,
    _value$lat = value.lat,
    lat = _value$lat === void 0 ? '' : _value$lat,
    _value$lng = value.lng,
    lng = _value$lng === void 0 ? '' : _value$lng,
    _value$markers = value.markers,
    markers = _value$markers === void 0 ? [] : _value$markers,
    _value$mapTypeId = value.mapTypeId,
    mapTypeId = _value$mapTypeId === void 0 ? 'roadmap' : _value$mapTypeId,
    _value$gestureHandlin = value.gestureHandling,
    gestureHandling = _value$gestureHandlin === void 0 ? 'auto' : _value$gestureHandlin,
    _value$zoom = value.zoom,
    zoom = _value$zoom === void 0 ? 10 : _value$zoom,
    mapTypeControl = value.mapTypeControl,
    zoomControl = value.zoomControl,
    fullscreenControl = value.fullscreenControl,
    streetViewControl = value.streetViewControl;

  // Initialize the state with an empty array
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    notice = _useState2[0],
    setNotice = _useState2[1];
  var setAttr = function setAttr(type, newVal) {
    var valueCloned = cloneDeep(value);
    if (newVal) {
      valueCloned[type] = newVal;
    } else {
      delete valueCloned[type];
    }
    onChange(valueCloned);
  };

  /* Markers add/update/delete */
  // Function to delete a marker
  var deleteMarker = function deleteMarker(markerIndex) {
    // Make a copy of the item array
    var updatedMarkers = _toConsumableArray(markers);

    // Remove the item at the specified idx
    updatedMarkers.splice(markerIndex, 1);

    //Add notice to user
    setNotice(__('Map marker deleted.', 'atrc-prefix-atrc'));

    // Set the updated value array as the new state
    setAttr('markers', updatedMarkers);
  };
  var updateMarker = function updateMarker(type, newVal, index) {
    var updatedMarkers = _toConsumableArray(markers);
    updatedMarkers[index][type] = newVal;
    setAttr('markers', updatedMarkers);
  };
  var addMarker = function addMarker() {
    var updatedMarkers = [].concat(_toConsumableArray(markers), [{
      loc: '',
      lat: '',
      lng: '',
      title: '',
      desc: ''
    }]);
    setAttr('markers', updatedMarkers);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(AtrcLabel, {
    className: classnames(AtrcPrefix('m-0'))
  }, label), !apiKey ? /*#__PURE__*/React.createElement(AtrcPanelRow, null, /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    dangerouslySetInnerHTML: {
      __html: sprintf(
      // translators: %s: tag name a
      __('To utilize advanced map functionalities, a %1$sGoogle Map API Key%2$s is needed.', 'atrc-prefix-atrc'), "<a href='https://developers.google.com/maps/documentation/places/web-service/overview'>", '</a>')
    }
  }))) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Location', 'atrc-prefix-atrc'),
    type: "text",
    placeholder: __('Enter a location…', 'atrc-prefix-atrc'),
    value: loc,
    onChange: function onChange(newVal) {
      setAttr('loc', newVal);
    }
  })), apiKey ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Latitude', 'atrc-prefix-atrc'),
    type: "number",
    placeholder: __('Enter latitude…', 'atrc-prefix-atrc'),
    value: lat,
    onChange: function onChange(newVal) {
      setAttr('lat', newVal);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Longitude', 'atrc-prefix-atrc'),
    type: "number",
    placeholder: __('Enter longitude', 'atrc-prefix-atrc'),
    value: lng,
    onChange: function onChange(newVal) {
      setAttr('lng', newVal);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcPanelBody, {
    className: classnames('at-flx-grw-1'),
    title: __('Markers', 'atrc-prefix-atrc'),
    initialOpen: false
  }, notice && /*#__PURE__*/React.createElement(AtrcNotice, {
    onRemove: function onRemove() {
      return setNotice('');
    },
    onAutoRemove: function onAutoRemove() {
      return setNotice('');
    }
  }, notice), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'))
  }, /*#__PURE__*/React.createElement(AtrcRepeater, {
    groups: function groups() {
      return markers.map(function (variation, index) {
        return /*#__PURE__*/React.createElement(AtrcRepeaterGroup, {
          markerIndex: index,
          deleteGroup: deleteMarker,
          groupTitle: sprintf(
          // translators: %d: Index
          __('Marker %d', 'atrc-prefix-atrc'), index + 1),
          deleteTitle: __('Remove marker', 'atrc-prefix-atrc'),
          key: index
        }, /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcControlText, {
          label: __('Enter a location…', 'atrc-prefix-atrc'),
          type: "text",
          placeholder: __('Enter a location…', 'atrc-prefix-atrc'),
          value: variation.loc,
          onChange: function onChange(newVal) {
            return updateMarker('loc', newVal, index);
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcControlText, {
          label: __('Latitude', 'atrc-prefix-atrc'),
          type: "number",
          placeholder: __('Enter latitude…', 'atrc-prefix-atrc'),
          value: variation.lat,
          onChange: function onChange(newVal) {
            return updateMarker('lat', newVal, index);
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcControlText, {
          label: __('Longitude', 'atrc-prefix-atrc'),
          type: "number",
          placeholder: __('Enter longitude', 'atrc-prefix-atrc'),
          value: variation.lng,
          onChange: function onChange(newVal) {
            return updateMarker('lng', newVal, index);
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcControlText, {
          label: __('Marker title', 'atrc-prefix-atrc'),
          type: "text",
          placeholder: __('Custom marker', 'atrc-prefix-atrc'),
          value: variation.title,
          onChange: function onChange(newVal) {
            return updateMarker('title', newVal, index);
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcControlTextarea, {
          label: __('Marker description', 'atrc-prefix-atrc'),
          type: "text",
          placeholder: __('Custom marker', 'atrc-prefix-atrc'),
          value: variation.desc,
          onChange: function onChange(newVal) {
            return updateMarker('desc', newVal, index);
          }
        })));
      });
    },
    addGroup: function addGroup() {
      return /*#__PURE__*/React.createElement(AtrcRepeaterGroupAdd, {
        addGroup: addMarker,
        tooltipText: __('Add marker', 'atrc-prefix-atrc'),
        label: __('Add marker', 'atrc-prefix-atrc')
      });
    }
  })))), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcPanelBody, {
    className: classnames('at-flx-grw-1'),
    title: __('Map options', 'atrc-prefix-atrc'),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Full Screen Control', 'atrc-prefix-atrc'),
    checked: fullscreenControl,
    onChange: function onChange() {
      setAttr('fullscreenControl', !fullscreenControl);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Gesture handling', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: gestureHandling,
    options: [{
      label: __('Cooperative', 'atrc-prefix-atrc'),
      value: 'cooperative'
    }, {
      label: __('Greedy', 'atrc-prefix-atrc'),
      value: 'greedy'
    }, {
      label: __('None', 'atrc-prefix-atrc'),
      value: 'none'
    }, {
      label: __('Auto', 'atrc-prefix-atrc'),
      value: 'auto'
    }],
    onChange: function onChange(newVal) {
      setAttr('gestureHandling', newVal);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Map Type', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: mapTypeId,
    options: [{
      label: __('Road Map', 'atrc-prefix-atrc'),
      value: 'roadmap'
    }, {
      label: __('Satellite View', 'atrc-prefix-atrc'),
      value: 'satellite'
    }, {
      label: __('Hybrid', 'atrc-prefix-atrc'),
      value: 'hybrid'
    }, {
      label: __('Terrain', 'atrc-prefix-atrc'),
      value: 'terrain'
    }],
    onChange: function onChange(newVal) {
      setAttr('mapTypeId', newVal);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Map Type Control', 'atrc-prefix-atrc'),
    checked: mapTypeControl,
    onChange: function onChange() {
      setAttr('mapTypeControl', !mapTypeControl);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Zoom Control', 'atrc-prefix-atrc'),
    checked: zoomControl,
    onChange: function onChange(newVal) {
      setAttr('zoomControl', !zoomControl);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Streen View Control', 'atrc-prefix-atrc'),
    checked: streetViewControl,
    onChange: function onChange() {
      setAttr('streetViewControl', !streetViewControl);
    }
  })))), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlRange, {
    label: __('Map Zoom Level', 'atrc-prefix-atrc'),
    value: zoom,
    min: 0,
    max: 20,
    onChange: function onChange(newVal) {
      setAttr('zoom', newVal);
    }
  }))) : null);
};
export default AtrcControlMapGoogle;
//# sourceMappingURL=index.js.map