import React, {Component} from 'react';
import {InputBox} from '../../components';
import Container  from '../../components/container';


const ExampleInputBox = ()=>{

return(
<div>
  <Container>
    <h1> Input Box Example </h1>
  <InputBox
    placeholder ="example placeholder" style={{marginTop:10, marginLeft:10}}/>
  </Container>

  </div>
)
}



export default ExampleInputBox;
