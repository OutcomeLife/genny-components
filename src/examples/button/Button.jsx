import React, { Component } from 'react';
import {Button} from '../../components/button';
import Container  from '../../components/container';


class ExampleButton extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        alert("Button Clicked");
    }
    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center"> Button Examples </h1>
                <Button className="btn btn-warning btn-sm" icon="favorite" btnText="Payment" onClick={this.handleClick}/>
            <br/>
            <br/>

            <Button className="btn btn-warning btn-md" icon="android" btnText="Android" onClick={this.handleClick}/>
                <br/>
                <br/>
                <Button className="btn btn-danger btn-lg" icon="favorite" btnText="Payment" onClick={this.handleClick}/>
                <br/>
                <br/>

                <Button className="btn btn-outline-default btn-lg" icon="favorite" btnText="Payment" onClick={this.handleClick}/>
                <br/>
                <br/>

                <Button className="btn btn-outline-danger btn-lg" icon="favorite" btnText="Payment" onClick={this.handleClick}/>

                <br/><br/>
                <Button className="btn btn-outline-warning btn-lg" icon="favorite" btnText="Payment" onClick={this.handleClick}/>


            </Container>

            </div>
        );
    }
}


export default ExampleButton;
