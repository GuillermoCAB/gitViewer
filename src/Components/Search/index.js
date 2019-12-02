import React, { Component } from "react";

import "./styles.css";

import Button from "../Button";

export default class Search extends Component {
  state = {
    target: ""
  };

  handleChange = ({ target }) => {
    this.setState({ target: target.value });
  };

  render() {
    return (
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Usuário do GITHub"
          onChange={this.handleChange}
        />
        <Button
          className="primary"
          content="Buscar"
          load={this.props.load}
          onClick={() => {
            this.props.find(this.state.target);
          }}
        />
      </div>
    );
  }
}
