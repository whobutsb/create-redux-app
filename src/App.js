import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './actions/app-actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {

    // props
    console.log(this.props.app.status);

    // actions
    this.props.actions.newAction();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state, props){
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
