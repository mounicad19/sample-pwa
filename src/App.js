
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Content from './components/Content';
// import PersistedConnectedRouter from './components/PersistedConnectedRouter'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        </div>
    )
  }
}

export default App;