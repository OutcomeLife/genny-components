import React, {Component} from 'react';
import {
  Button,
  ButtonThick,
  ButtonThin,
  Dropdown,
  Navbar,
  Table,
  InputBox,
  Jumbotron,
  TextArea,
  Card,
  Popup,
  SelectBox,
  Label,
  VerticleLayout,
  Listing,
  Icon,
  SmallIcon
} from '../../examples';
import {PersonProfile} from '../../components';
import {Switch, Route} from 'react-router-dom';

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path='/button' component={Button}/>
        <Route path='/button-thick' component={ButtonThick}/>
        <Route path='/button-thin' component={ButtonThin}/>
        <Route path='/card' component={Card}/> {/*<Route path = '/cookie-bar' component={CookieBar}/>*/}
        <Route path='/dropdown' component={Dropdown}/> {/*<Route path = '/grid' component={CookieBar}/>*/}
        <Route path='/input-box' component={InputBox}/>
        <Route path='/jumbotron' component={Jumbotron}/> {/*<Route path = '/layout' component={CookieBar}/>*/}
        <Route path='/navbar' component={Navbar}/>
        <Route path='/popup' component={Popup}/>
        <Route path='/person-profile' component={PersonProfile}/>
        <Route path='/select-box' component={SelectBox}/>
        <Route path='/table' component={Table}/>
        <Route path='/text-area' component={TextArea}/>
        <Route path='/labels' component={Label}/>
        <Route path='/verticle-layout' component={VerticleLayout} />
        <Route path='/listing' component={Listing}/>
        <Route path='/icon' component={Icon}/>
        <Route path="/small-icon" component={SmallIcon}/>
      </Switch>
    );
  }
}

export default Routes;
