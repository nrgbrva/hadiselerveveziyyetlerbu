import React, { Component } from "react";
import "./styles.css";
class Custombutton extends Component {
  state = {
    message: "click here",
    active: false
  };

  clickHandler = () => {
    if (this.setState({ active: false }) == true) {
      this.setState({ active: true });
      alert("not active");
    } else {
      this.setState({ active: false });
      alert("active");
    }
  };

  render() {
    return (
      <button
        className={this.state.active}
        type="button"
        onClick={this.clickHandler}
      >
        {this.state.message}
      </button>
    );
  }
}
export default Custombutton;
