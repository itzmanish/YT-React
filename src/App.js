import React, { Component } from 'react';
import SearchAppBar from './components/Header';
import Player from './container/Player';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <Player />
      </div>
    );
  }
}

export default App;
