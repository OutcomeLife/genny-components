'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Jumbotron.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jumbotron = function (_Component) {
  _inherits(jumbotron, _Component);

  function jumbotron() {
    _classCallCheck(this, jumbotron);

    return _possibleConstructorReturn(this, (jumbotron.__proto__ || Object.getPrototypeOf(jumbotron)).apply(this, arguments));
  }

  _createClass(jumbotron, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'jumbotron' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'jumbotron-title' },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'jumbotron-sub-title' },
            this.props.subTitle
          )
        )
      );
    }
  }]);

  return jumbotron;
}(_react.Component);

exports.default = jumbotron;