import React, { Component } from "react";
import Scroll from "../components/Scroll";
import Map from "../components/Map"


import "./App.css";

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1 title">Follow the ISS</h1>
        <Scroll>
          <Map />
        </Scroll>
      </div>
    );
  }
}

export default App;
