import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import SearchBoxContainer from './components/dashboard.component';
// import OverviewContainer from './components/overview.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row">
        <SearchBoxContainer/>
        {/* <OverviewContainer/> */}
                </div>
      </div>
    );
  }
}

export default App;
