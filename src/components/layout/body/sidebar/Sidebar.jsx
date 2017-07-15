import React, { Component } from 'react';
import './sidebar.css';


export default class Sidebar extends Component {

  render() {
    const { style } = this.props;
    return (
      <div className="sidebar" id="sidebar" style={style}>
      {this.props.children}
      </div>

    );
  }
}
