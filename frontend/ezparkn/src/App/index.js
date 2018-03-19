import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Splash from './Splash';
import Signup from './Signup';
import Location from './Location/Location';

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
            <Route exact path='/location' component={Location} />
          </Switch>

        </MainView>

      </AppView>
    );
  }
}

export default withRouter(App);
