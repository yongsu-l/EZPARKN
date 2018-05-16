import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Splash from './Splash';
import Signup from './Signup';
import Home from './Home';
import Main from './Main';
import About from './AboutPage';
import {store} from 'store';

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
            {
              store.getState().token ? 
                <Switch>
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/main' component={Main} />
                  <Route exact path='/about' component={About} />
                  <Redirect from='*' to='/main' />
                </Switch> : <Switch>
                  <Route exact path='/' component={Splash} />
                  <Route exact path='/signup' component={Signup} />
                  <Redirect from='*' to='/' />
                </Switch>
            }
        </MainView>

      </AppView>
    );
  }
}

export default withRouter(App);
