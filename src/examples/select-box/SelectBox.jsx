import React, {Component} from 'react';
import {SelectBox} from '../../components';
import {Container} from '../../components';

const ExampleSelectBox = () => {

  return (
    <div>
      <Container>
        <h1> Select Box example </h1>
    <SelectBox options={["US", "AU", "NPL"]}/>
  </Container>
  </div>

  );

}


export default ExampleSelectBox;
