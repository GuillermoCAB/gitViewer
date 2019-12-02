import React, { Component } from "react";

import api from "../../Services/api.js";

import "./styles.css";

import Logos from "../../Components/Logos";
import Search from "../../Components/Search";
import Card from "../../Components/Card";
import List from "../../Components/List";
import NotFound from "../../Components/NotFound";

export default class Home extends Component {
  state = {
    user: {},
    list: {},
    listTitle: "",
    cardOn: false,
    listOn: false,
    loadOn: false,
    repoLoad: false,
    starredLoad: false,
    notFound: false
  };

  find = async target => {
    try {
      this.setState({
        loadOn: true,
        cardOn: false,
        listOn: false,
        notFound: false
      });

      let response = await api.get(`/${target}`);

      this.setState({ user: response.data, cardOn: true });
    } catch (e) {
      console.log(e);
      this.setState({ loadOn: false, notFound: true });
    }
  };

  findRepos = async target => {
    try {
      this.setState({ repoLoad: true });

      let response = await api.get(`/${target}/repos`);

      this.setState({
        list: response.data,
        listOn: true,
        listTitle: "Repos",
        repoLoad: false
      });
    } catch (e) {
      console.log(e);
      this.setState({ repoLoad: false });
    }
  };

  findStarred = async target => {
    try {
      this.setState({ starredLoad: true });

      let response = await api.get(`/${target}/starred`);

      this.setState({
        list: response.data,
        listOn: true,
        listTitle: "Starred",
        starredLoad: false
      });
    } catch (e) {
      console.log(e);
      this.setState({ starredLoad: false });
    }
  };

  stopLoad = () => this.setState({ loadOn: false });

  render() {
    return (
      <div className="wrapper">
        <Logos />
        <h1>GIT Viewer</h1>
        <Search find={this.find} load={this.state.loadOn} />
        <Card
          cardOn={this.state.cardOn}
          user={this.state.user}
          findRepos={this.findRepos}
          findStarred={this.findStarred}
          repoLoad={this.state.repoLoad}
          starredLoad={this.state.starredLoad}
          stopLoad={this.stopLoad}
        />
        <List
          listOn={this.state.listOn}
          list={this.state.list}
          listTitle={this.state.listTitle}
        />
        <NotFound on={this.state.notFound} />
      </div>
    );
  }
}
