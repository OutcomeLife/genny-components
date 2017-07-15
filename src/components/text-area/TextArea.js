import React, { Component } from 'react';
import './TextArea.css';

export default class TextArea extends Component {
  render() {
    return (
       <textarea style={this.props.style} 
       rows={this.props.rows}
       className="text-area" 
       placeholder={this.props.placeholder} 
       onChange={this.props.handleChange} />
    );
  }
}
