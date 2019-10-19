import axios from "axios";
import React, { Component, Fragment } from "react";
import conf from "../configuration";
import RepoCard from "./RepoCard";

export class Projects extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${conf.github.username}/repos`)
      .then(response => {
        let repos = response.data
          .filter(
            repo =>
              !repo.fork &&
              repo.name != `${conf.github.username}.github.io` &&
              conf.github.repositories.ignore.indexOf(repo.name) == -1
          )
          .sort((a, b) => {
            var date1 = a.pushed_at;
            var date2 = b.pushed_at;

            return date1 < date2 ? 1 : -1;
          });

        this.setState({ repos });
      });
  }

  render() {
    let repo_cards = [];
    for (var i = 0; i < this.state.repos.length; i++) {
      let r = this.state.repos[i];
      repo_cards.push(<RepoCard key={r.id} repo={r} />);
    }
    return (
      <Fragment>
        <h2>My Projects</h2>
        <p className="f4 mb-4 text-gray">
          GitHub repositories that I've built.
        </p>

        <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
          {repo_cards}
        </div>
      </Fragment>
    );
  }
}

export default Projects;
