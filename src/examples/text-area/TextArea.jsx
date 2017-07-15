import React, {Component} from 'react';
import {TextArea} from '../../components';
import Container  from '../../components/container';

const ExampleTextArea = () => {

  return (
    <div>
      <Container>
        <h1> Text Area Example </h1>
    <TextArea rows="10" placeholder="Text Area"/>
  </Container>
  </div>

  );
}


export default ExampleTextArea;
