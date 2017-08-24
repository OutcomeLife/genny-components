'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./dropdown.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    _this.renderDropdown = function () {
      var showUserProfile = _this.state.showUserProfile;

      if (showUserProfile === false) {
        document.getElementById('dropdown-container').style.display = 'block';
        _this.setState({ showUserProfile: true, transform: 'rotate(180deg)' });
      } else {
        document.getElementById('dropdown-container').style.display = 'none';
        _this.setState({ showUserProfile: false, transform: 'rotate(0deg)' });
      }
    };

    _this.hideDropdown = function () {
      document.getElementById('dropdown-container').style.display = 'none';
      _this.setState({ showUserProfile: false, transform: 'rotate(0deg)' });
    };

    _this.state = { showUserProfile: false, transform: 'rotate(0)' };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          dropdownListItem = _props.dropdownListItem,
          className = _props.className,
          style = _props.style;
      var _state = this.state,
          showUserProfile = _state.showUserProfile,
          transform = _state.transform;


      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement(
          'div',
          { className: 'dropdown' },
          _react2.default.createElement(
            'div',
            { tabIndex: '0', className: showUserProfile ? 'user-profile-active' : 'user-profile', onBlur: this.hideDropdown, onClick: this.renderDropdown, style: {
                transition: '0.3s ease-in'
              } },
            _react2.default.createElement(
              'span',
              null,
              user.name
            ),
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('img', { src: user.image, className: 'userImage', alt: 'userImg' }),
              _react2.default.createElement(
                'i',
                { className: 'material-icons', style: {
                    transform: '' + transform,
                    transition: '0.5s ease transform'
                  } },
                'keyboard_arrow_down'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown-container', id: 'dropdown-container' },
            dropdownListItem.map(function (item) {
              return _react2.default.createElement(
                'li',
                { onMouseDown: item.onClick, key: item.name },
                _react2.default.createElement(
                  'a',
                  { href: item.name },
                  item.name,
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons', style: {
                        fontSize: '18px',
                        float: 'right',
                        paddingRight: '5px'
                      } },
                    item.icon
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  user: _propTypes2.default.object,
  dropdownListItem: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object

};

Dropdown.defaultProps = {
  user: { name: 'unique_prakash2002@yahoo.com', image: '/images/user.png' },
  className: 'default'
};

exports.default = Dropdown;