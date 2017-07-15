import React, { Component } from 'react';
import { Body, Sidebar, Content } from '../../components';
import {Route, Button, ButtonThick, Dropdown, PersonProfile, Table, ProfileLayout} from '../../examples';
import { NavLink } from 'react-router-dom';
import {Routes} from '../../examples';

class Collection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      top: 0,
      bottom: 0
    }
    let contentStyle = {
      backgroundColor: "white"
    }
    let sidebarStyle ={
      paddingTop:40
    }
    return (
      <div className="default">
        <Body style={style}>
          <Sidebar style={sidebarStyle}>
            <NavLink exact to="/person-profile" > Person Profile </NavLink>
            <NavLink to="/button" > Button </NavLink>
            <NavLink to="/button-thick" > Button Thick </NavLink>
            <NavLink to="/button-thin"> Button Thin </NavLink>
            <NavLink to="/dropdown" > Dropdown </NavLink>
            <NavLink to="/table" > Table </NavLink>
            <NavLink to='/input-box'> Input Box </NavLink>
            <NavLink to='/text-area'> Text Area </NavLink>
            <NavLink to='/card'> Card </NavLink>
            <NavLink to='/popup'> Popup </NavLink>
            <NavLink to='/navbar'> Navbar </NavLink>
            <NavLink to='/select-box'> Select Box </NavLink>
            <NavLink to='/jumbotron'> Jumbotron </NavLink>
            <NavLink to='/labels'> label </NavLink>
            <NavLink to='/verticle-layout'> verticle-layout </NavLink>
            <NavLink to='/listing'> Listing  </NavLink>
            <NavLink to="/icon"> Icon </NavLink>
            <NavLink to="/small-icon"> Small Icon </NavLink>
          </Sidebar>
          <Content style={contentStyle}>
          <Routes > {this.props.children} </Routes>
          </Content>
        </Body>
      </div>
    );
  }
}


export default Collection;
