import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Splash from './Splash';

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
          </Switch>

        </MainView>
        
      </AppView>
    );
  }
}

export default withRouter(App);
