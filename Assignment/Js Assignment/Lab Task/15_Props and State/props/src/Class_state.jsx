import React, { Component } from "react";

class Class_state extends Component {
  constructor() {
    super();
    this.state = {
      name: "Dharmik Modi",
      count: 0,
      isImage: true,
    };
  }
  render() {
    return (
      <>
      
        <div>Using Class_state to add or sub the number </div>
        <h2>Hello I am {this.state.name}</h2>
        <p>{this.state.count}</p>
        <button className="btn btn-dark" onClick={() => {this.setState({ count: this.state.count + 1 })}}>
          Add
        </button>
        <button className="btn btn-dark" onClick={() => {this.setState({count: this.state.count - 1})}}>Sub</button>
      </>
    );
  }
}

export default Class_state;
