import React, { Component } from 'react';
import './App.css';
import PageBuilder from './containers/PageBuilder';

import {withRouter ,Switch, Route} from 'react-router-dom';

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'


class App extends Component {
  render(){
    let routes = (
      <Switch>
        <Route path="/" exact component={PageBuilder} />
        <Route path="/about-me" exact component={PageBuilder} />
        <Route path="/experience" exact component={PageBuilder} />
        <Route path="/my-hobbies" exact component={PageBuilder} />
        <Route path="/my-family" exact component={PageBuilder} />
      </Switch>
    );
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
