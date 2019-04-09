import React, { Component} from 'react';
import './App.css';
import { Switch, Route, withRouter ,Redirect} from 'react-router-dom';
import Contacts from './Containers/Users/Users';
import Login from './Containers/Auth/Login';
import userForm from './Containers/Wizard';
class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/users" component={Contacts} />
          <Route path="/user" component={userForm} />
          <Redirect to="/"/>
        </Switch>
    );
  }
}

export default withRouter(App);
