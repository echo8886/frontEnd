"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _home = _interopRequireDefault(require("../../pages/Home/home"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var RouterConf = function RouterConf() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/Home",
      replace: true
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Home",
    element: /*#__PURE__*/_react.default.createElement(_home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "*",
    element: /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/",
      replace: true
    })
  }));
};
var _default = exports.default = RouterConf;