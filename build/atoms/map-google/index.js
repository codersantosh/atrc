function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["id", "apiKey", "loc", "lat", "lng", "zoom", "mapTypeId", "draggable", "typeCtrl", "zoomCtrl", "fullScreenCtrl", "streetViewCtrl", "markers", "mapStyle", "mapStyleCust", "className", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */
import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/* Library */
import classNames from 'classnames';

/* Inbuilt */
import AtrcUniqueID from '../../utils/unique-id';

/* Local */
var AtrcGoogleMap = function AtrcGoogleMap(_ref) {
  var id = _ref.id,
    apiKey = _ref.apiKey,
    _ref$loc = _ref.loc,
    loc = _ref$loc === void 0 ? 'Gorkh Durbar' : _ref$loc,
    lat = _ref.lat,
    lng = _ref.lng,
    _ref$zoom = _ref.zoom,
    zoom = _ref$zoom === void 0 ? 15 : _ref$zoom,
    _ref$mapTypeId = _ref.mapTypeId,
    mapTypeId = _ref$mapTypeId === void 0 ? 'roadmap' : _ref$mapTypeId,
    draggable = _ref.draggable,
    typeCtrl = _ref.typeCtrl,
    zoomCtrl = _ref.zoomCtrl,
    fullScreenCtrl = _ref.fullScreenCtrl,
    streetViewCtrl = _ref.streetViewCtrl,
    markers = _ref.markers,
    mapStyle = _ref.mapStyle,
    mapStyleCust = _ref.mapStyleCust,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    defaultProps = _objectWithoutProperties(_ref, _excluded);
  var mapID = id || AtrcUniqueID();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    scriptLoaded = _useState2[0],
    setScriptLoaded = _useState2[1];
  var _useState3 = useState(apiKey ? __('Script is not loaded', 'atrc-prefix-atrc') : ''),
    _useState4 = _slicedToArray(_useState3, 2),
    msg = _useState4[0],
    setMessage = _useState4[1];
  var gMap;

  /* Load script */
  useEffect(function () {
    if (!apiKey) {
      return;
    }
    var scriptId = 'atrc-prefix-atrc-google-map-api';
    if (!document.getElementById(scriptId) && typeof window.google === 'undefined') {
      var script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey);
      script.defer = true;
      script.async = true;
      script.id = scriptId;
      // Add onload function to script
      script.onload = function () {
        setScriptLoaded(true);
      };
      // Append script element to the document.
      document.head.appendChild(script);
    }
  }, []);
  function addInfoWindow(marker, markerId, title, description) {
    var contentString = "<div class=\"at-map-overview\"><h6 class=\"at-map-overview-title\">".concat(title, "</h6><div class=\"at-map-overview-content\">").concat(description ? "<p>".concat(description, "</p>") : '', "<a class=\"at-map-overview-delete\" onclick=\"removeMarker( '").concat(markerId, "' )\">").concat(__('Delete Marker', 'atrc-prefix-atrc'), "</a></div></div>");

    // eslint-disable-next-line no-undef
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function () {
      infowindow.open(gMap, marker);
    });
  }
  function cycleMarkers(newMarkers) {
    if (newMarkers && 0 < newMarkers.length) {
      newMarkers.forEach(function (marker) {
        var latitude = marker.lat;
        var longitude = marker.lng;
        // eslint-disable-next-line no-undef
        var position = new google.maps.LatLng(latitude, longitude);

        // eslint-disable-next-line no-undef
        var mark = new google.maps.Marker({
          position: position,
          map: gMap,
          title: marker.title,
          e4Draggable: true
        });

        // eslint-disable-next-line no-undef
        google.maps.event.addListener(mark, 'dragend', function (event) {
          var newLat = event.latLng.lat();
          var newLng = event.latLng.lng();
          var markersCloned = newMarkers.map(function (newMaker) {
            if (marker.id === Number(newMaker.id)) {
              return _objectSpread(_objectSpread({}, marker), {}, {
                lat: newLat,
                lng: newLng
              });
            }
            return marker;
          });
          onChange({
            markers: markersCloned
          });
        });
        addInfoWindow(mark, marker.id, marker.title, marker.desc);
      });
    }
  }
  useEffect(function () {
    if (!apiKey) {
      return;
    }
    if (!scriptLoaded) {
      setMessage(__('Script is not loaded', 'atrc-prefix-atrc'));
      return;
    }
    // eslint-disable-next-line no-undef
    if (typeof google === 'undefined' || google === null) {
      setMessage(__('google is undefined or null', 'atrc-prefix-atrc'));
      return;
    }
    setMessage('');

    /* Init Map */
    // eslint-disable-next-line no-undef
    gMap = new google.maps.Map(document.getElementById(mapID), {
      center: {
        lat: Number(lat) || 28.0045,
        lng: Number(lng) || 84.6284
      },
      gestureHandling: 'cooperative',
      zoom: zoom,
      mapTypeId: mapTypeId
    });
    if (loc && !lat && !lng) {
      var request = {
        query: loc,
        fields: ['name', 'geometry']
      };

      // eslint-disable-next-line no-undef
      var service = new google.maps.places.PlacesService(gMap);
      service.findPlaceFromQuery(request, function (results, status) {
        // eslint-disable-next-line no-undef
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          if (0 < results.length) {
            gMap.setCenter(results[0].geometry.loc);
          }
        }
      });
    }
    gMap.addListener('zoom_changed', function () {
      var newZoom = gMap.getZoom();
      onChange({
        zoom: newZoom
      });
    });
    gMap.addListener('maptypeid_changed', function () {
      var newMapTypeId = gMap.getMapTypeId();
      onChange({
        mapTypeId: newMapTypeId
      });
    });
    gMap.addListener('bounds_changed', function () {
      var location = gMap.getCenter();
      if (location) {
        var latitude = location.lat();
        var longitude = location.lng();
        onChange({
          lat: latitude.toString(),
          lng: longitude.toString()
        });
      }
    });

    /* Markers */
    cycleMarkers(markers);
  }, [scriptLoaded]);
  return apiKey || msg ? /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(className, 'at-map'),
    id: mapID
  }, defaultProps), msg) : /*#__PURE__*/React.createElement("iframe", _extends({
    title: sprintf(
    // translators: %s: location
    __('Embedded content from Google Maps. Location: %s.', 'atrc-prefix-atrc'), loc),
    src: "https://maps.google.com/maps?q=".concat(encodeURIComponent(loc), "&t=&z=").concat(zoom, "&ie=UTF8&output=embed"),
    frameBorder: "0",
    className: classNames(className, 'at-map'),
    id: mapID
  }, defaultProps));
};
export default AtrcGoogleMap;
//# sourceMappingURL=index.js.map