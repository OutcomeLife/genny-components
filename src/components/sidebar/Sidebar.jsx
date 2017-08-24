import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component {
  render () {
    const { style, title } = this.props;
    return (
      <div className='sidebar' id='sidebar' style={style}>
        <div className='title'>{title}</div>
        {this.props.children}
      </div>

    );
  }
}
