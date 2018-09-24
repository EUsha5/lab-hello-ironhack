import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
      <nav className="Nav">
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" />
      </nav>
        <h1> Say hello to ReactJS </h1>
        <p className="Ninja">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
        <button><h2>Awesome!</h2></button>
        <Goo></Goo>
      </div>
      <div className="mainDiv">
        <div className="subDiv">
          <img src="/images/icon1.png" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="subDiv">
          <img src="/images/icon2.png" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="subDiv">
          <img src="/images/icon3.png" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="subDiv">
          <img src="/images/icon4.png" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
    );
  }
}

class Goo extends Component {
  render() {
    return (
      <div className="badger">Badgers love React so you should too!</div>
    );
  }
}
export default App;