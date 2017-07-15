import React, { Component } from 'react';
import { Dropdown, Container } from '../../components';

class ExampleDropdown extends Component {

    constructor(){
        super();
        this._account = this._account.bind(this);
        this._logout = this._logout.bind(this);
    }

    _logout(e) {

       alert("logout");
    }

    _account() {

        alert("account");
    }
    render() {
        const user = {
            name: "prakash",
            image: "./images/user.png"
        };

        const dropdownListItem = [
            {
                name: "account",
                onClick: this._account,
                icon: "settings"
            },
            {
                name: "logout",
                onClick: this._logout,
                icon: "exit_to_app"
            }
        ];
        const className="default";
        return (
            <div>
                <Container>
                    <h1> DropDown Example </h1>
                <Dropdown user={user} dropdownListItem={dropdownListItem} className={className} />
            </Container>
            </div>
        );
    }
}

export default ExampleDropdown;
