"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _view = _interopRequireDefault(require("../../compontent/view/view"));
var _disPlayTraveller = _interopRequireDefault(require("../../compontent/DisPlayTraveller/disPlayTraveller"));
require("./index.css");
var _navbar = _interopRequireDefault(require("../../compontent/Navbar/navbar"));
var _client = require("@apollo/client");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Header = _antd.Layout.Header,
  Footer = _antd.Layout.Footer,
  Sider = _antd.Layout.Sider,
  Content = _antd.Layout.Content;
var Title = _antd.Typography.Title;
var LIST_TRAVELLERS_QUERY = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ListTravellers {\n    listTravellers {\n      _id\n      key\n      name\n      phone\n      seatStatus\n      seatNumber\n      date\n    }\n  }\n"])));
var Home = function Home() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    travellers = _useState2[0],
    setTravellers = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];

  // 使用 useQuery 钩子执行 GraphQL 查询
  var _useQuery = (0, _client.useQuery)(LIST_TRAVELLERS_QUERY),
    loading = _useQuery.loading,
    error = _useQuery.error,
    data = _useQuery.data;
  (0, _react.useEffect)(function () {
    if (data) {
      var formattedTravellers = data.listTravellers.map(function (traveller) {
        var formattedDate = formatDate(traveller.date);
        return _objectSpread(_objectSpread({}, traveller), {}, {
          date: formattedDate,
          key: traveller._id
        });
      });
      setTravellers(formattedTravellers);
    }
  }, [data]);
  var formatDate = function formatDate(date) {
    if (!date) return null;
    var d = new Date(date);
    if (isNaN(d.getTime())) return null;
    var year = d.getFullYear();
    var month = ('0' + (d.getMonth() + 1)).slice(-2);
    var day = ('0' + d.getDate()).slice(-2);
    return "".concat(year, "-").concat(month, "-").concat(day);
  };
  if (loading) return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  if (error) return /*#__PURE__*/_react.default.createElement("div", null, "Error :( ", error.message);
  var recomposeVisible = function recomposeVisible() {
    setVisible(!visible);
  };
  var setData = function setData(travellers) {
    setTravellers(travellers);
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Layout, {
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(Sider, {
    style: {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#1677ff'
    }
  }, "Sider"), /*#__PURE__*/_react.default.createElement(_antd.Layout, null, /*#__PURE__*/_react.default.createElement(Header, {
    style: {
      textAlign: 'center',
      color: '#fff',
      height: '10vh',
      lineHeight: '64px',
      backgroundColor: '#4096ff'
    }
  }, /*#__PURE__*/_react.default.createElement(_navbar.default, {
    onVisibleChange: recomposeVisible,
    data: travellers,
    setData: setData
  })), /*#__PURE__*/_react.default.createElement(Content, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: 0,
      backgroundColor: '#0958d9'
    }
  }, /*#__PURE__*/_react.default.createElement(_disPlayTraveller.default, {
    travellers: travellers,
    visible: visible,
    recomposeVisible: recomposeVisible,
    setData: setData
  }), /*#__PURE__*/_react.default.createElement(Title, {
    style: {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#1677ff'
    },
    level: 2
  }, "Train seat reservation status"), /*#__PURE__*/_react.default.createElement(_view.default, {
    traveller: travellers,
    setTraveller: setData
  })), /*#__PURE__*/_react.default.createElement(Footer, {
    style: {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#4096ff'
    }
  }, "Footer")));
};
var _default = exports.default = Home;