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
/*WordPress*/
import { useEffect, useRef, useState } from '@wordpress/element';

/*Library*/
var AtrcUseDelayFunction = function AtrcUseDelayFunction(fn) {
  var dla = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  if (!fn) return;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    totalFn = _useState4[0],
    setTotalFn = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    args = _useState6[0],
    setArgs = _useState6[1];
  var timeoutIdRef = useRef();
  var localCount = useRef(count);
  var localArgs = useRef(args);
  var localTotalFn = useRef(totalFn);
  var setLocalCount = function setLocalCount() {
    localCount.current++;
    setCount(localCount.current);
  };
  var setLocalArgs = function setLocalArgs(arg) {
    localArgs.current.push(arg);
    setArgs(localArgs.current);
  };
  var setLocalTotalFn = function setLocalTotalFn(type) {
    if ('add' === type) {
      localTotalFn.current++;
    } else {
      localTotalFn.current--;
    }
    setTotalFn(localTotalFn.current);
  };
  useEffect(function () {
    if (totalFn) {
      timeoutIdRef.current = setTimeout(function () {
        fn.apply(void 0, _toConsumableArray(args[count]));
        setLocalCount();
        setLocalTotalFn();
      }, dla);
    } else {
      clearTimeout();
    }
    return function () {
      clearTimeout();
    };
  }, [totalFn]);
  var clearTimeout = function clearTimeout() {
    window.clearTimeout(timeoutIdRef.current);
  };
  var dlaFn = function dlaFn() {
    setLocalTotalFn('add');
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }
    setLocalArgs(arg);
  };
  return {
    dlaFn: dlaFn,
    clearTimeout: clearTimeout
  };
};
export default AtrcUseDelayFunction;
//# sourceMappingURL=use-delay-function.js.map