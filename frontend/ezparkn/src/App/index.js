import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Splash from './Splash';
import Signup from './Signup';
import Home from './Home';
import Main from './Main';

import {
  AppView,
  MainView,
} from './styled';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: null,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
    	<AppView>
        <MainView>

          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/main' component={Main} />
          </Switch>

        </MainView>

      </AppView>
    );
  }
}

export default withRouter(App);
