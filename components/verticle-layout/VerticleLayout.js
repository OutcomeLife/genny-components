'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../components');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _materialUi = require('material-ui');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _demoData = require('./demoData');

var _demoData2 = _interopRequireDefault(_demoData);

var _container = require('../../components/container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticleLayout = function (_Component) {
    _inherits(VerticleLayout, _Component);

    function VerticleLayout(props) {
        _classCallCheck(this, VerticleLayout);

        var _this = _possibleConstructorReturn(this, (VerticleLayout.__proto__ || Object.getPrototypeOf(VerticleLayout)).call(this, props));

        _this.handleDatePickerChange = function (e, date) {
            console.log(date);
        };

        (0, _reactTapEventPlugin2.default)();
        _this.state = { error: {}, value: {}, valueDropdown: {}, currentValue: {} };
        _this.handleInput = _this.handleInput.bind(_this);
        _this.handleClickMenuItem = _this.handleClickMenuItem.bind(_this);
        return _this;
    }

    _createClass(VerticleLayout, [{
        key: 'validate',
        value: function validate(e, regx, errorText, code) {
            var _state = this.state,
                value = _state.value,
                error = _state.error;

            var errorMessage = error;

            if (value[code] != undefined && value[code].match(regx) && value[code]) {
                if (Object.keys(error).length !== 0) {
                    delete errorMessage[code];
                    this.setState({ error: errorMessage });
                }
            } else {
                errorMessage[code] = errorText;
                this.setState({ error: errorMessage });
            }
        }
    }, {
        key: 'handleInput',
        value: function handleInput(e, validation, error, code) {
            var value = this.state.value;
            value[code] = e.target.value;
            this.setState({ value: value });
            if (e.target.value.length >= 2) {
                this.validate(e, validation, error, code);
            }
        }
    }, {
        key: 'handleClickMenuItem',
        value: function handleClickMenuItem(e, value, code) {
            var val = this.state.valueDropdown;
            var curValue = this.state.currentValue;
            if (code in val) {
                val[code][value] = value;
                curValue[code] = value;
            } else {
                val[code] = _defineProperty({}, value, value);
                curValue[code] = value;
            }
            this.setState({ valueDropdown: val, currentValue: curValue });
        }
    }, {
        key: 'processJson',
        value: function processJson() {
            var _this2 = this;

            var a = [];
            var Json = this.props.data === undefined ? _demoData2.default : this.props.data;
            Json.map(function (data) {
                switch (data.type) {
                    case "text":
                        a.push(_react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _MuiThemeProvider2.default,
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(_materialUi.TextField, {
                                        hintText: data.label,
                                        floatingLabelText: data.label,
                                        onBlur: function onBlur(e) {
                                            return _this2.validate(e, data.validation, data.errorText, data.code);
                                        },
                                        onChange: function onChange(e) {
                                            return _this2.handleInput(e, data.validation, data.errorText, data.code);
                                        },
                                        errorText: _this2.state.error === null ? _this2.state.error : _this2.state.error[data.code]
                                    })
                                )
                            )
                        ));
                        break;
                    case "dropdown":
                        var value = function value() {
                            if (Object.keys(_this2.state.valueDropdown).length === 0) {
                                return data.options[0];
                            } else {
                                if (_this2.state.valueDropdown[data.code] !== undefined) {
                                    return _this2.state.valueDropdown[data.code][_this2.state.currentValue[data.code]];
                                } else {
                                    return data.options[0];
                                }
                            }
                        };
                        a.push(_react2.default.createElement(
                            _MuiThemeProvider2.default,
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _materialUi.DropDownMenu,
                                    {
                                        value: value(),
                                        style: { marginLeft: "-25px" }
                                    },
                                    data.options.map(function (option) {
                                        return _react2.default.createElement(_materialUi.MenuItem, { value: option, primaryText: option, key: option, onClick: function onClick(e) {
                                                return _this2.handleClickMenuItem(e, option, data.code);
                                            } });
                                    })
                                )
                            )
                        ));
                        break;
                    case "date":
                        a.push(_react2.default.createElement(
                            _MuiThemeProvider2.default,
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_materialUi.DatePicker, { hintText: 'date picker', mode: 'landscape', onChange: _this2.handleDatePickerChange })
                            )
                        ));
                        break;
                    case "time":
                        a.push(_react2.default.createElement(
                            _MuiThemeProvider2.default,
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_materialUi.TimePicker, { hintText: 'time picker' })
                            )
                        ));
                        break;
                    case "textarea":
                        a.push(_react2.default.createElement(
                            _MuiThemeProvider2.default,
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_materialUi.TextField, { hintText: data.label, rows: 8, floatingLabelText: data.label, multiLine: true })
                            )
                        ));
                        break;
                    default:
                        break;
                }
            });
            return a;
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.processJson(),
                _react2.default.createElement(
                    'p',
                    { style: { color: "black" } },
                    ' error message : ',
                    JSON.stringify(this.state.error, null, 4),
                    ' ',
                    _react2.default.createElement('br', null),
                    'values : ',
                    JSON.stringify(this.state.value, null, 4),
                    ' ',
                    _react2.default.createElement('br', null),
                    'valueDropdown: ',
                    JSON.stringify(this.state.valueDropdown, null, 4),
                    ' ',
                    _react2.default.createElement('br', null),
                    'currentValue = ',
                    JSON.stringify(this.state.currentValue, null, 4)
                )
            );
        }
    }]);

    return VerticleLayout;
}(_react.Component);

exports.default = VerticleLayout;