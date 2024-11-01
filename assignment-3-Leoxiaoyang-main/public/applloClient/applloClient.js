"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _client = require("@apollo/client");
// 创建 HTTP 链接，指向 GraphQL 后端地址
var httpLink = (0, _client.createHttpLink)({
  uri: 'http://localhost:3001/graphql'
});

// 创建 Apollo Client 实例
var client = new _client.ApolloClient({
  link: httpLink,
  cache: new _client.InMemoryCache() // 使用内存缓存优化查询
});
var _default = exports.default = client;