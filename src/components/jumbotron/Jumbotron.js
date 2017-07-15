import React, { Component } from 'react';
import './Jumbotron.css';

export default class jumbotron extends Component {
  render() {
    return (
        <div className="jumbotron">
        <div>
        <div className="jumbotron-title">
        {this.props.title}
        </div>
        <div className="jumbotron-sub-title">
        {this.props.subTitle}
        </div>
        </div>
        </div>
    );
  }
}
