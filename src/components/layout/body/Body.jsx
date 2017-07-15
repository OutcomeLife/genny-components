import React, { Component } from 'react';
import './body.css';

class Body extends Component {

	render() {
		const style2  = this.props.style;

		return (
			<div className="body" style={style2}>
				{this.props.children}
			</div>
			);
	}
}
export default Body;
