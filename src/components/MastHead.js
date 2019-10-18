import axios from "axios";
import React, { Component } from "react";
import config from "../configuration";
import Metadata from "./masthead/Metadata";

export class MastHead extends Component {
  state = {
    user: {
      avatar_url: ""
    }
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${config.github.username}`)
      .then(response => {
        this.setState({
          user: response.data
        });
      });
  }

  render() {
    let user = this.state.user;

    return (
      <div className="flex-self-stretch border-md-right border-gray-light bg-whitecol-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6">
        <img
          src={user.avatar_url}
          className="circle mb-3"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="mb-2 lh-condensed">
          {user.name ? user.name : user.login}
        </h1>

        <p className="mb-3 f4 text-gray">{user.bio}</p>

        <Metadata user={user} />
      </div>
    );
  }
}

export default MastHead;
