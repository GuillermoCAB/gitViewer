import React, { Component } from "react";

import api from "../../Services/api.js";

import "./styles.css";

import Logos from "../../Components/Logos";
import Button from "../../Components/Button";
import LoaderSvg from "../../Assets/loader.svg";

export default class Home extends Component {
  state = {
    user: {},
    load: false
  };

  async componentDidMount() {
    this.setState({ load: true });

    let { username } = this.props.match.params;

    await this.find(username);

    this.setState({ load: false });
  }

  find = async target => {
    try {
      let response = await api.get(`/${target}`);

      this.setState({ user: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let { goBack } = this.props.history;

    if (this.state.load === true) {
      return (
        <div className="wrapper">
          <Logos />
          <img
            src={LoaderSvg}
            className="loader"
            alt={`GITHub Avatar of ${this.state.user.login}`}
          />
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <Logos />
          <div className="detail">
            <img src={this.state.user.avatar_url} alt="" class="detailImage" />
            <h1>Username: {this.state.user.login || "Não Possui"}</h1>
            <h1>URL: {this.state.user.html_url || "Não Possui"}</h1>
            <h1>Nome: {this.state.user.name || "Não Possui"}</h1>
            <h1>Blog: {this.state.user.blog || "Não Possui"}</h1>
            <h1>Localização: {this.state.user.location || "Não Possui"}</h1>
          </div>
          <Button
            content="Voltar"
            className="primary"
            onClick={() => goBack()}
          />
        </div>
      );
    }
  }
}
