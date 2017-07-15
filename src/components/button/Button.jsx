import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render () {
    const { type, size, btnText, className, onClick, icon, ...other } = this.props;
    return (
      <button
        className={className}
        onClick={onClick}
        type={type}
        size={size}
        icon={icon}
        {...other}
      >
        {( icon ) && <i className="material-icons">{icon}</i>}
        <span>{btnText}</span>
      </button>
    );
  }
}


Button.defaultProps = {
  type: 'btn btn-default',
  size: 'normal',
  btnText: 'Hello',
  className: 'btn',
};

Button.propTypes = {
  type: PropTypes.string,
  btnText: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string
};

export default Button;
