import React, { Component } from "react";

class CarClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const buttonColor = this.state.clicked ? "bg-green-500" : "bg-blue-500";
    return (
      <>
        <h1 className="text-3xl font-bold text-purple-800">
          Hi i am a Car Class
        </h1>
        <button
          onClick={this.handleClick}
          className={`rounded-md px-4 py-2 text-white ${buttonColor}`}
        >
          {this.state.clicked ? "Clicked!" : "Click me"}
        </button>
      </>
    );
  }
}

export default CarClass;
