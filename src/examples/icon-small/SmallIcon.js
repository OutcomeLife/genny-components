import React,{Component} from 'react';
import {IconSmall} from '../../components';
import {Container} from '../../components';

const ExampleIconSmall = () => {
  return (
    <Container>
      <h1>Example Icon Component</h1>
      <p>Android Icon</p>
      <IconSmall name="android"/>
    </Container>
  );
}

export default ExampleIconSmall;