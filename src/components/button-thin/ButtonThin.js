import React, { Component } from 'react';
import './ButtonThin.css';

export default class buttonThin extends Component {
  render() {
    return (
        <button onClick={this.props.onClick} className="btnThin">{this.props.label}</button>
    );
  }
}
