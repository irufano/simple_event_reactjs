import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// // Using function component
// function Clicker() {
//   function handleClick(e) {
//     alert("Berhasil mengklik");
//     e.preventDefault();
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       {" "}
//       Klik ini !
//     </a>
//   );
// }

// Using class component
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? "ON" : "OFF"}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle />
        </header>
        {/* Function component 
      <Clicker /> */}
      </div>
    );
  }
}

export default App;
