import React, { Component } from 'react';
import './InputBox.css';

export default class inputBox extends Component {

	constructor(props){
		super(props);
		this.state={error:props.error?props.error:false}
	}

	componentWillReceiveProps(nextProps){
		this.setState={error:nextProps.error?nextProps.error:false}
	}

	handleKeyPress = (evt) => {
		console.log(evt.keyCode)
		if(this.props.onKeyPress)
			this.props.onKeyPress(evt);
	}

  render() {

  	let className = "input-box";
  	if(this.state.error)
  		className += " error";
    return (
       <input 
	   type={this.props.type}
       style={this.props.style}
       className={className}
       placeholder={this.props.placeholder}
       onChange={this.props.onChange}
       onKeyUp={this.handleKeyPress} />
    );
  }
}
