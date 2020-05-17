import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
	    <Fragment>
	    <Header />
	    <Home />
	    </Fragment>
    );
  }
}

export default App;
