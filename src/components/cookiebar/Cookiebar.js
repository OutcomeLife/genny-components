import React, { Component } from 'react';
import './Cookiebar.css';

export default class cookiebar extends Component {
  render() {
    return (
        <div className="cookiebar">
        <div className="cookiebar-inner">
      
            	<i className="material-icons cookie-icon">{this.props.icon}</i>              

              {this.props.path.map((item,i)=>{
                if(i===0)
                return (<span key={"cookie"+i} className="cookie-label"> {item} </span>);
              else
                return (<span key={"cookie"+i} className="cookie-label-group"><i className="material-icons arrow-icon">keyboard_arrow_right</i><span className="cookie-label"> {item} </span></span>);
              })}
              
   
        </div>
        </div>
    );
  }
}
