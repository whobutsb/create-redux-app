import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './actions/app-actions';

import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.appActions.newAction();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to { this.props.app.name }</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        app: state.app
    };
}

function mapDispatchToProps(dispatch){
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

