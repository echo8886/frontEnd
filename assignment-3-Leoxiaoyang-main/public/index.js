"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _reactRouterDom = require("react-router-dom");
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var root = _client.default.createRoot(document.getElementById('contents'));
root.render(/*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null))));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();