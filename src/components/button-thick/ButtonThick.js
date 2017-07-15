import React, { Component } from 'react';
import './ButtonThick.css';

export default class buttonThick extends Component {


  render() {

  	let icon = "";

	if(this.props.icon)
		icon=(<i className="material-icons btn-icon">{this.props.icon}</i>);

    return (
        <button onClick={this.props.onClick} className="btnThick themeOne" style={this.props.style}>{icon} {this.props.label}</button>
    );
  }
}
