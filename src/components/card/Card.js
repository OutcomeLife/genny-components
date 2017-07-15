import React, {Component} from 'react';
import './Card.css';

export default class card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          <b>{this.props.title}</b>
        </div>
        <div className="card-content">
          <img className="card-img" src={this.props.src} />
          <span className="card-text">
            <div>
              <b>{this.props.line1}</b>
            </div>
            <div>{this.props.line2}</div>
          </span>
        </div>
      </div>
    );
  }
}
