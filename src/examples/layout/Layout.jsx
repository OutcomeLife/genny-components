import React, { Component } from 'react';
import { Header, Body, Sidebar, Footer, Content } from '../../components';
import {  Link } from 'react-router-dom';
class Layout extends Component {
    render() {
        const user ={
            name: "prakash",
            image: './images/user.png'
        }
        const logo = "logo";
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
        let style = {
            top: 0,
            bottom:0
        }
        return (
            <div className="default">
                {/*<Header logo={logo} user={user} dropdownListItem={dropdownListItem} />*/}
                <Body style={style}>
                {/*<Body>*/}
                    <Sidebar>
                        <Link to ="/button">Button</Link>
                        <a>Button Thick</a>
                        <a> Card </a>
                        <a> Cookie Bar </a>
                        <a> Dropdown </a>
                        <a> Grid </a>
                        <a> Input-Box </a>
                        <a> Jumbotron </a>
                        <a> Footer </a>
                        <a> Navbar </a>
                        <a> Popup </a>
                        <a> Profile </a>
                        <a> Select-Box </a>
                        <a> Style </a>
                        <a> Table </a>
                        <a> Text area </a>
                    </Sidebar>
                    <Content>

                    </Content>

                </Body>

                {/*<Footer >
                   footer goes here
                </Footer>*/}

            </div>
        );
    }

}


export default Layout;
