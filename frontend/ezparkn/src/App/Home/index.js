import React, { Component } from 'react';
import { Redirect } from 'react-router';

import {
  Title

} from './styled';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      redirectToNewPage: false
    }
  };

  render(){
    return(
      <Title> Homepage </Title>
    );
  }
}


export default Home;