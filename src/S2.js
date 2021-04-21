import React, { Component } from "react";

export default class App extends Component {
  state = {
    cart: ["Corn", "Potato"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let { cart, input } = this.state;
    cart.push(input);
    this.setState({cart: cart});
  };

  searchThroughList = () => {
    let { cart, input } = this.state;
    cart.filter(filtered=>filtered.includes(input));
    this.setState({cart: cart});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.searchThroughList}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}