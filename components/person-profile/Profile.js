'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../components');

var _RadioButton = require('material-ui/RadioButton');

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

require('./profile.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.handleInputChange = function () {};

    _this.state = {};
    return _this;
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      var days = [];
      for (var i = 1; i < 32; i++) {
        days.push(i);
      }

      var months = [];
      for (var _i = 1; _i < 13; _i++) {
        months.push(_i);
      }

      var years = [];
      for (var _i2 = parseInt(new Date().getFullYear(), 10); _i2 > parseInt(new Date().getFullYear(), 10) - 50; _i2--) {
        years.push(_i2);
      }

      var residency = ["International", "Permanant Resident", "Citizen"];
      var locations = ["VIC", "NSW", "WA", "TAS", "SA", "NT"];
      var degrees = ["High School", "Diploma", "Bachelors", "Masters", "PhD"];
      var industries = ["All", "Accounting", "Public Health", "Business", "Planning", "Architecture"];

      var userImg = _react2.default.createElement(
        'i',
        { className: 'material-icons user-img' },
        'person'
      );
      if (this.props.userImg) userImg = _react2.default.createElement('img', { className: 'user-img', src: this.props.userImg, alt: '' });

      var styles = {
        activeBtnStyle: {
          width: "250px",
          fontSize: "14px",
          fontWeight: "normal",
          backgroundColor: "#00887A"
        },
        inactiveBtnStyle: {
          width: "250px",
          fontSize: "14px",
          fontWeight: "normal",
          backgroundColor: "#F1F1F1",
          color: "#333333"
        },
        inputStyle: {
          width: "100%",
          marginTop: "5px",
          marginBottom: "5px"
        },
        selectStyle: {
          containerStyle: {
            width: "80px",
            margin: "5px"
          },
          inputStyle: {
            width: "80px"
          },
          dropDownStyle: {
            width: "80px",
            backgroundColor: "#FFF"
          }
        },
        selectStyleLong: {
          containerStyle: {
            width: "100%",
            marginTop: "5px",
            marginBottom: "5px"
          },
          inputStyle: {
            width: "100%"
          },
          dropDownStyle: {
            backgroundColor: "#FFF"
          }
        },
        radioBtnStyle: {
          display: "inline-block",
          width: "75px"
        },
        radioBtnStyleLon: {
          display: "inline-block",
          width: "140px"
        },
        uploadBtnStyle: {
          width: "150px",
          margin: "0px",
          marginLeft: "10px",
          height: "30px"
        },
        btnStyleLong: {
          width: "200px",
          margin: "30px"
        },
        sliderStyle: {
          height: "30px",
          margin: "0px"
        }
      };

      var muiTheme = (0, _getMuiTheme2.default)({
        palette: {
          primary1Color: '#4EB8AA',
          textColor: '#333'
        },
        radioButton: {
          borderColor: '#999'
        },
        checkbox: {
          boxColor: '#999'
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'input-section-container' },
          _react2.default.createElement(
            'div',
            { className: 'input-section' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h2',
                null,
                'CREATE YOUR PROFILE'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'upload-photo' },
              'Upload your photo'
            ),
            _react2.default.createElement(_components.InputBox, { style: styles.inputStyle, placeholder: 'First Name' }),
            _react2.default.createElement(_components.InputBox, { style: styles.inputStyle, placeholder: 'Last Name' }),
            _react2.default.createElement(_components.InputBox, { style: styles.inputStyle, placeholder: 'Email' }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'ABOUT ME'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Date of Birth'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyle, placeholder: 'Day', options: days }),
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyle, placeholder: 'Month', options: months }),
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyle, placeholder: 'Year', options: years })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block check-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Gender'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(
                  _MuiThemeProvider2.default,
                  { muiTheme: muiTheme },
                  _react2.default.createElement(
                    _RadioButton.RadioButtonGroup,
                    { name: 'gender', defaultSelected: 'male', labelPosition: 'right' },
                    _react2.default.createElement(_RadioButton.RadioButton, {
                      style: styles.radioBtnStyle,
                      value: 'male',
                      label: 'Male' }),
                    _react2.default.createElement(_RadioButton.RadioButton, {
                      style: styles.radioBtnStyle,
                      value: 'female',
                      label: 'Female' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Contact Number'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.InputBox, { style: styles.inputStyle, type: 'number' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Location'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyleLong, options: locations })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Residency Status'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyleLong, options: residency })
              )
            ),
            _react2.default.createElement(_components.TextArea, { placeholder: 'Write something about yourself...' }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'RESUME'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(_components.InputBox, { placeholder: 'Upload your resume', type: 'text', style: styles.inputStyle }),
              _react2.default.createElement(_components.ButtonThick, { icon: 'add', label: 'Upload', style: styles.uploadBtnStyle })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'AVAILABILITY'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block check-block' },
              _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: muiTheme },
                _react2.default.createElement(
                  _RadioButton.RadioButtonGroup,
                  { name: 'availability', defaultSelected: 'immediately', labelPosition: 'right' },
                  _react2.default.createElement(_RadioButton.RadioButton, {
                    style: styles.radioBtnStyleLong,
                    value: 'immediately',
                    label: 'Immediately' }),
                  _react2.default.createElement(_RadioButton.RadioButton, {
                    style: styles.radioBtnStyleLong,
                    value: 'fromDate',
                    label: 'Available from' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement('span', { className: 'label' }),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyle, placeholder: 'Day', options: days }),
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyle, placeholder: 'Month', options: months }),
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyle, placeholder: 'Year', options: years })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'EDUCATION'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Highest Degree'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyleLong, options: degrees })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'University'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.InputBox, { style: styles.inputStyle, type: 'text' })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'SKILLS'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Profession/Industry'
              ),
              _react2.default.createElement(
                'span',
                { className: 'input' },
                _react2.default.createElement(_components.SelectBox, { style: styles.selectStyleLong, options: industries })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block slider-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Self assessment skill'
              ),
              _react2.default.createElement(
                'span',
                { className: 'slider-input' },
                _react2.default.createElement(
                  _MuiThemeProvider2.default,
                  { muiTheme: muiTheme },
                  _react2.default.createElement(_Slider2.default, { min: 0, max: 3, step: 1, value: 3, sliderStyle: styles.sliderStyle })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block slider-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Self assessment skill'
              ),
              _react2.default.createElement(
                'span',
                { className: 'slider-input' },
                _react2.default.createElement(
                  _MuiThemeProvider2.default,
                  { muiTheme: muiTheme },
                  _react2.default.createElement(_Slider2.default, { min: 0, max: 3, step: 1, value: 2, sliderStyle: styles.sliderStyle })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block slider-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Self assessment skill'
              ),
              _react2.default.createElement(
                'span',
                { className: 'slider-input' },
                _react2.default.createElement(
                  _MuiThemeProvider2.default,
                  { muiTheme: muiTheme },
                  _react2.default.createElement(_Slider2.default, { min: 0, max: 3, step: 1, value: 1, sliderStyle: styles.sliderStyle })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-block slider-block' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Self assessment skill'
              ),
              _react2.default.createElement(
                'span',
                { className: 'slider-input' },
                _react2.default.createElement(
                  _MuiThemeProvider2.default,
                  { muiTheme: muiTheme },
                  _react2.default.createElement(_Slider2.default, { min: 0, max: 3, step: 1, value: 0, sliderStyle: styles.sliderStyle })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'TERMS OF USE'
              )
            ),
            _react2.default.createElement(
              _MuiThemeProvider2.default,
              { muiTheme: muiTheme },
              _react2.default.createElement(_Checkbox2.default, { label: 'I accept the InternMatch Terms of use and InternMatch Privacy Policy' })
            ),
            _react2.default.createElement(_components.ButtonThick, { label: 'Sign Up', style: styles.btnStyleLong }),
            _react2.default.createElement(
              'div',
              { className: 'social-login' },
              _react2.default.createElement('img', { className: 'social-icon', src: 'images/fb.jpg', alt: '' }),
              _react2.default.createElement('img', { className: 'social-icon', src: 'images/google.png', alt: '' }),
              _react2.default.createElement('img', { className: 'social-icon', src: 'images/linkedin.png', alt: '' })
            )
          )
        ),
        _react2.default.createElement('div', { className: 'spacer' })
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;