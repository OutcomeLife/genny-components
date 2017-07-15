import React, { Component } from 'react';
import './Icon.css';

class Icon extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} />
      </div>
    );
  }
}

export default Icon;

