import React, { Component } from "react";
import "./styles.css";
class SubscribeButton extends Component {
  state = {
    subscribed: false,
    text: "none"
  };

  clickHandler = () => {
    this.setState({ subscribed: !this.state.subscribed });
    !this.state.subscribed
      ? this.setState({ text: "clicked" })
      : this.setState({ text: "none" });
  };

  render() {
    let { text, subscribed } = this.state;
    let className = "subscribe-button";
    if (!subscribed) {
      // this.setState({ text: "clicked" });
      className += " false";
    } else {
      className += " none";
      // this.setState({ text: "none" });
    }

    return (
      <button className={className} type="button" onClick={this.clickHandler}>
        {text}
      </button>
    );
  }
}
export default SubscribeButton;
