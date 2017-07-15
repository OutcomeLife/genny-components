import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import './SelectBox.css';


class  SelectBox extends Component {

	constructor(props){
		super(props);
		this.state={
			dropdownVisible:false,
			value:""
		};
	}

	handleChange = () => {
		this.props.handleChange();
	}

	handleClick = (evt) => {
		if(this.state.dropdownVisible){
			let value = evt.target.getAttribute("value");		
			this.setState({value:value, dropdownVisible:false});
		}
		else
			this.setState({dropdownVisible:true});
	}

	handleClickOutside = (e) => {		
		this.setState({	    		
	    		dropdownVisible:false
	    	});
	}

  render() {

  	

  	let dropDownStyle = {};
  	if(this.props.style){
  		dropDownStyle=this.props.dropdownStyle?this.props.style.dropDownStyle:{};
  	}

  	dropDownStyle.display=(this.state.dropdownVisible)?"block":"none";



    return (
    	<div className="select-section" style={this.props.style?this.props.style.containerStyle:null}>

    	<div className="select-container" onClick={this.handleClick} >

    	<input className="select-box"  
    	style={this.props.style?this.props.style.inputStyle:null}
    	placeholder={this.props.placeholder} 
    	onChange={this.handleChange} 
    	
    	readOnly={true}
    	 value={this.state.value}/>
    	 <i className="material-icons select-icon">keyboard_arrow_down</i>
    	 </div>

    	<div className="select-dropdown" style={dropDownStyle}>
		  {this.props.options.map((item,i)=>{
		  	return <div key={i} value={item} className="select-option" onClick={this.handleClick}>{item}</div>;
		  })}
		</div>
		</div>
    );
  }
}

export default onClickOutside(SelectBox);