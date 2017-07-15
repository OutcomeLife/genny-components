import React, {Component} from 'react';
import {Label} from '../../components';
import {Container} from '../../components';

class ExampleLabel extends Component{

  render(){
    return (
      <Container>
        <h1> Label Component Example </h1>
      <Label> Being able to work in a team </Label>
      <br/>
      <Label className="label label-success"> Being able to work in a team </Label>
      <br/>
      <Label className="label label-warning"> Being able to work in a team </Label>
      <br/>
      <Label className="label label-danger"> Being able to work in a team </Label>

      <br/>

    </Container>
    );
  }

}


export default ExampleLabel;
