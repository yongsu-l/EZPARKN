import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Splash from './Splash';
import Signup from './Signup/Signup';

import {
  AppView,
  MainView,
} from './styled';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: null,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
    	<AppView>
        <MainView>

          <Switch>
            <Route exact path='/splash' component={Splash} />
            <Route exact path='/signup' component={Signup} />
          </Switch>

        </MainView>

      </AppView>
    );
  }
}

export default withRouter(App);
