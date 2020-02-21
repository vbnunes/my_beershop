import React, { Component } from 'react';
import BeerItem from './components/BeerItem';

class App extends Component {
  render() {
    return (
      <div className="App" style={{display:"flex", justifyContent:"center", width: "100wv"}}>
        <BeerItem />
      </div>
    );
  }
}

export default App;
