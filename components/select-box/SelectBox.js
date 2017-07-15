'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

require('./SelectBox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBox = function (_Component) {
	_inherits(SelectBox, _Component);

	function SelectBox(props) {
		_classCallCheck(this, SelectBox);

		var _this = _possibleConstructorReturn(this, (SelectBox.__proto__ || Object.getPrototypeOf(SelectBox)).call(this, props));

		_this.handleChange = function () {
			_this.props.handleChange();
		};

		_this.handleClick = function (evt) {
			if (_this.state.dropdownVisible) {
				var value = evt.target.getAttribute("value");
				_this.setState({ value: value, dropdownVisible: false });
			} else _this.setState({ dropdownVisible: true });
		};

		_this.handleClickOutside = function (e) {
			_this.setState({
				dropdownVisible: false
			});
		};

		_this.state = {
			dropdownVisible: false,
			value: ""
		};
		return _this;
	}

	_createClass(SelectBox, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var dropDownStyle = {};
			if (this.props.style) {
				dropDownStyle = this.props.dropdownStyle ? this.props.style.dropDownStyle : {};
			}

			dropDownStyle.display = this.state.dropdownVisible ? "block" : "none";

			return _react2.default.createElement(
				'div',
				{ className: 'select-section', style: this.props.style ? this.props.style.containerStyle : null },
				_react2.default.createElement(
					'div',
					{ className: 'select-container', onClick: this.handleClick },
					_react2.default.createElement('input', { className: 'select-box',
						style: this.props.style ? this.props.style.inputStyle : null,
						placeholder: this.props.placeholder,
						onChange: this.handleChange,

						readOnly: true,
						value: this.state.value }),
					_react2.default.createElement(
						'i',
						{ className: 'material-icons select-icon' },
						'keyboard_arrow_down'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'select-dropdown', style: dropDownStyle },
					this.props.options.map(function (item, i) {
						return _react2.default.createElement(
							'div',
							{ key: i, value: item, className: 'select-option', onClick: _this2.handleClick },
							item
						);
					})
				)
			);
		}
	}]);

	return SelectBox;
}(_react.Component);

exports.default = (0, _reactOnclickoutside2.default)(SelectBox);