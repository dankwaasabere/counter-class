import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super();
    this.state = { count: 0 };
  }
  handleincrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handledecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>ClassCounter</h1>
        <h4>count: {this.state.count}</h4>
        <button onClick={this.handleincrease}>Increase</button>
        <button onClick={this.handledecrease}>Decrease</button>
      </div>
    );
  }
}
