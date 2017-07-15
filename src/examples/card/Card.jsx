import React, {Component} from 'react';
import {Card} from '../../components';
import Container  from '../../components/container';


const ExampleCard = () => {

  return (
    <div>
      <Container>
        <h1> Card Example </h1>
    <Card title=" Card Title" line1="Card Titlke" line2="Card Description" src= "images/user.png"/>
  </Container>
  </div>
  );
}


export default ExampleCard;
