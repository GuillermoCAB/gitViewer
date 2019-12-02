import React, { Component } from "react";

import "./styles.css";

import LoaderSvg from "../../Assets/loader.svg";

export default class Button extends Component {
  render() {
    if (this.props.load === true) {
      return (
        <button
          className={this.props.className}
          type={this.props.type}
          onClick={this.props.onClick}
        >
          <img src={LoaderSvg} className="loaderIcon" alt="loader" />
        </button>
      );
    } else {
      return (
        <button
          className={this.props.className}
          type={this.props.type}
          onClick={this.props.onClick}
        >
          {this.props.content}
        </button>
      );
    }
  }
}
