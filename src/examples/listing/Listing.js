import React, {Component} from 'react';
import {Listing} from '../../components';
import {Container} from '../../components';

class ExampleListing extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
    <Container>
      <h1> Job Listing Example </h1>
      <Listing title="Junior Accountant"
        src="images/xero.png"
        companyName ="Xero Ltd carlton"
        companyLocation = "Carlton, VIC"
        timeInWords = "3 Minutes Ago"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  "
        btnText= "View More"
        btnClassName="btn btn-md btn-default"/>
    </Container>
    );
  }

}


export default ExampleListing;
