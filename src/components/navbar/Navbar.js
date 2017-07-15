import React, { Component } from 'react';
import './Navbar.css';

export default class navbar extends Component {
  render() {
    return (
        <div className="navbar">
        <div className="navbar-inner">
           { this.props.children }
        </div>
        </div>
    );
  }
}
