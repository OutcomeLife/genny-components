'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./header');

Object.defineProperty(exports, 'Header2', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

var _sidebar = require('./body/sidebar');

Object.defineProperty(exports, 'Sidebar2', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sidebar).default;
  }
});

var _content = require('./body/content');

Object.defineProperty(exports, 'Content2', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_content).default;
  }
});

var _body = require('./body');

Object.defineProperty(exports, 'Body2', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_body).default;
  }
});

var _footer = require('./footer');

Object.defineProperty(exports, 'Footer2', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }