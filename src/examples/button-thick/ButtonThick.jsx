import React, { Component } from 'react';
import {ButtonThick} from '../../components';
import Container  from '../../components/container';

class ExampleButtonThick extends Component {
    render() {
        let activeBtnStyle = {
                width: "250px",
                fontSize: "14px",
                fontWeight: "normal",
                backgroundColor: "#00887A",
                outline:"none"
            };
        return (
            <div>
                <Container>
                    <h1> Button Thick Example </h1>
                    <ButtonThick style={activeBtnStyle} label="FIND AN INTERNSHIP" />
                </Container>
            </div>
        );
    }
}

export default ExampleButtonThick;
