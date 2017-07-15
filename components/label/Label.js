'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Label.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      { className: props.className },
      props.children
    )
  );
};

Label.defaultProps = {
  className: 'label label-primary'
};

exports.default = Label;