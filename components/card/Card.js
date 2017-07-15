'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Card.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var card = function (_Component) {
  _inherits(card, _Component);

  function card() {
    _classCallCheck(this, card);

    return _possibleConstructorReturn(this, (card.__proto__ || Object.getPrototypeOf(card)).apply(this, arguments));
  }

  _createClass(card, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-title' },
          _react2.default.createElement(
            'b',
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          _react2.default.createElement('img', { className: 'card-img', src: this.props.src }),
          _react2.default.createElement(
            'span',
            { className: 'card-text' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'b',
                null,
                this.props.line1
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              this.props.line2
            )
          )
        )
      );
    }
  }]);

  return card;
}(_react.Component);

exports.default = card;