'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./InputBox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputBox = function (_Component) {
  _inherits(inputBox, _Component);

  function inputBox(props) {
    _classCallCheck(this, inputBox);

    var _this = _possibleConstructorReturn(this, (inputBox.__proto__ || Object.getPrototypeOf(inputBox)).call(this, props));

    _this.handleKeyPress = function (evt) {
      console.log(evt.keyCode);
      if (_this.props.onKeyPress) _this.props.onKeyPress(evt);
    };

    _this.state = { error: props.error ? props.error : false };
    return _this;
  }

  _createClass(inputBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState = { error: nextProps.error ? nextProps.error : false };
    }
  }, {
    key: 'render',
    value: function render() {

      var className = "input-box";
      if (this.state.error) className += " error";
      return _react2.default.createElement('input', {
        type: this.props.type,
        style: this.props.style,
        className: className,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange,
        onKeyUp: this.handleKeyPress });
    }
  }]);

  return inputBox;
}(_react.Component);

exports.default = inputBox;