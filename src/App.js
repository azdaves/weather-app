import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = 0951d2f3b8076f6e08c2cf6bceaa459a;

class App extends Component {
  state = {};

  getWeather = () => {
    
  }

  render() {
    return (
      <div>
        <div className="col-xs-5 title-container">
          <Titles />
          <Form />
          <Weather />
        </div>
        
      </div>
    );
  }
}

export default App;
