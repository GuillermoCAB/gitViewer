import React, { Component } from "react";

import "./styles.css";

import Button from "../Button";

export default class Card extends Component {
  loadedImage = () => {
    this.props.stopLoad();
    document.getElementsByClassName("hidden")[0].classList.remove("hidden");
  };

  render() {
    if (this.props.cardOn === true) {
      return (
        <div className="card hidden">
          <div className="cardBody">
            <a className="row" href={`/${this.props.user.login}`}>
              <div className="cardBodyImg col-xs-12 col-sm-4">
                <img
                  src={this.props.user.avatar_url}
                  alt={`GITHub Avatar of /${this.props.user.login}`}
                  onLoad={this.loadedImage}
                />
              </div>
              <div className="cardBodyInfo col-xs-12 col-sm-8">
                <p id="username">Username: {this.props.user.login}</p>
                <p id="id">ID: {this.props.user.id}</p>
                <p id="github">GITHub: {this.props.user.html_url}</p>
              </div>
            </a>
          </div>

          <div className="row cardFooter">
            <div className="cardFooterButton col-xs-12 col-sm-6">
              <Button
                className="secondary"
                content="Repos"
                load={this.props.repoLoad}
                onClick={() => {
                  this.props.findRepos(this.props.user.login);
                }}
              />
            </div>
            <div className="cardFooterButton col-xs-12 col-sm-6">
              <Button
                className="secondary"
                content="Starred"
                load={this.props.starredLoad}
                onClick={() => {
                  this.props.findStarred(this.props.user.login);
                }}
              />
            </div>
          </div>
        </div>
      );
    } else return <div />;
  }
}
