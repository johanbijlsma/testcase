import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

import SearchBoxContainer from './components/dashboard.component';
// import OverviewContainer from './components/overview.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Book-a-flight</h1>
        </header>
        <div className="row">
        <SearchBoxContainer/>
                </div>
      </div>
    );
  }
}

export default App;
