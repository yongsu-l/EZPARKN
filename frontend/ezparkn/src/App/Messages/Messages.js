import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


export default class Messages extends Component {

    render() {
      return (
          <div>
              <div className="panel panel-default message-body">
                <div className="panel-body">
                { this.props.messageBody }
                </div>
                </div>
          </div>
      )
    }
}