import React, {Component} from 'react';
import {Jumbotron} from '../../components';
import {Container} from '../../components';


const  ExampleJumbotron = ()=> {
  return (
    <div>
      <Container>
        <h1> Jumbotron Example </h1>
    <Jumbotron title="Internmatch" subTitle="Connecting interns with awesome companies around Australia"/>
  </Container>
  </div>

  );
}


export default ExampleJumbotron;
