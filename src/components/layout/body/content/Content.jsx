import React, { Component } from 'react';
 import './content.css';
export default class Content extends Component {

  render() {

    const { style } = this.props
    return (
      <div className="content" id="content" style={style}>
        {this.props.children}
      </div>

    );
  }
}
