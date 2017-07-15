import React, { Component } from 'react';
import Card from '../card';
import './Grid.css';

export default class gridDisplay extends Component {

	constructor(props){
		super(props);
		this.state={
			data:[
			{
				title:"Accountant",
				image:"https://seeklogo.com/images/X/xero-logo-150F46D39F-seeklogo.com.png",
				line1:"Xero Ltd",
				line2:"Carlton VIC"
			},
			{
				title:"Accountant",
				image:"https://seeklogo.com/images/X/xero-logo-150F46D39F-seeklogo.com.png",
				line1:"Xero Ltd",
				line2:"Carlton VIC"
			},
			{
				title:"Accountant",
				image:"https://seeklogo.com/images/X/xero-logo-150F46D39F-seeklogo.com.png",
				line1:"Xero Ltd",
				line2:"Carlton VIC"
			},
			{
				title:"Accountant",
				image:"https://seeklogo.com/images/X/xero-logo-150F46D39F-seeklogo.com.png",
				line1:"Xero Ltd",
				line2:"Carlton VIC"
			}
			]
		};
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.data)
			this.setState({data:nextProps.data});
	}

  render() {
    return (
        <div className="gridDisplay">
        {this.state.data.map((item,i)=>{
        	return (<Card key={"card"+i} image={item.image} title={item.title} line1={item.line1} line2={item.line2}/>);
        })}
        </div>
    );
  }
}
