import React, { Component } from "react";

import "./styles.css";

export default class List extends Component {
  render() {
    if (this.props.listOn === true && this.props.list.length > 0) {
      return (
        <div className="list">
          <h1 className="listTitle">{this.props.listTitle}</h1>
          <ul>
            {this.props.list.map(item => (
              <li key={item.id} className="listItem">
                <a href={item.html_url}>{item.full_name}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (this.props.listOn === true) {
      return (
        <div className="list">
          <h1 className="listTitle">Não existem itens nesta lista!</h1>
        </div>
      );
    } else return <div />;
  }
}
