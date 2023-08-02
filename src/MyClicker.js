import React, { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.handleTripleClick = this.handleTripleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleTripleClick(e) {
    this.setState({ counter: this.state.counter + 3 });
  }

  render() {
    return (
      <div>
        <h2>counter is :{this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment by 1</button>
        <button onClick={this.handleTripleClick}>Increment by 3</button>
      </div>
    );
  }
}
