'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('components');

require('./Navbar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          logo = _props.logo,
          user = _props.user,
          dropdownListItem = _props.dropdownListItem,
          toggleClick = _props.toggleClick;

      var showDropdown = dropdownListItem === undefined || user === undefined ? null : _react2.default.createElement(_components.Dropdown, { user: user, dropdownListItem: dropdownListItem, className: 'default' });
      return _react2.default.createElement(
        'div',
        { className: 'nav' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-brand' },
          _react2.default.createElement(
            'table',
            { className: 'navbar-brand' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons', onClick: toggleClick },
                    ' menu'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { className: 'logo' },
                    logo
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'nav-right' },
          showDropdown
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  user: _propTypes2.default.object,
  logo: _propTypes2.default.string,
  dropdownListItem: _propTypes2.default.array,
  toggleClick: _propTypes2.default.func
};

Navbar.defaultProps = {
  logo: 'Company Logo'
};

exports.default = Navbar;
