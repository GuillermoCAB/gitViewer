import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    if (this.props.on === true) {
      return (
        <div>
          <h1>Usuário não encontrado!</h1>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
