import React, { Component } from 'react';
import './App.css';
import ListRoute from "../Routes/ListRoute";
import Map from "../Map/Map";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ListRoute />
                <Map />
            </div>
    );
  }
}

export default App;
