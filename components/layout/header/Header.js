'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./header.css');

var _ = require('../../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      showSidebar: true
    };

    _this._renderSidebar = _this._renderSidebar.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: '_renderSidebar',
    value: function _renderSidebar() {
      var showSidebar = this.state.showSidebar;

      if (showSidebar === true) {
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('content').style.marginLeft = "0";
        this.setState({ showSidebar: false });
      } else {
        document.getElementById('sidebar').style.width = "200px";
        document.getElementById('content').style.marginLeft = "200px";
        this.setState({ showSidebar: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          logo = _props.logo,
          dropdownListItem = _props.dropdownListItem;

      user === undefined ? user = { image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png', name: 'prakash' } : user;
      logo === undefined ? logo = "logo" : logo;

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
                    { className: 'material-icons', onClick: this._renderSidebar },
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
          _react2.default.createElement(_.Dropdown, { user: user, dropdownListItem: dropdownListItem, className: 'default' })
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;