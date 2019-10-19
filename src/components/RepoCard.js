import React, { Component, Fragment } from "react";
import { RepoIcon, StarIcon, GitBranchIcon } from "react-octicons";
import colors from "./LanguageColors";

export class RepoCard extends Component {
  render() {
    let repository = this.props.repo;
    let octicon_style = "mr-1 v-align-middle";

    let stargazers = "";
    if (repository.stargazers_count > 0) {
      stargazers = (
        <a
          href={`${repository.html_url}/stargazers`}
          className="d-inline-block link-gray mr-4"
        >
          <StarIcon className={octicon_style} /> {repository.stargazers_count}
        </a>
      );
    }

    let forks = (
      <a
        href={`${repository.html_url}/network/members`}
        className="d-inline-block link-gray mr-4"
      >
        <GitBranchIcon className={octicon_style} /> {repository.forks_count}
      </a>
    );

    return (
      <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
        <div className="github-component d-flex flex-column flex-justify-between height-full text-left border border-gray-light bg-white rounded-1 p-3">
          <div>
            <div className="d-flex flex-justify-between flex-items-start mb-1">
              <h1 className="f4 lh-condensed mb-1">
                <a href={repository.html_url}>
                  <RepoIcon className={octicon_style} />
                  {repository.name}
                </a>
              </h1>
            </div>
            <div className="text-gray mb-2 ws-normal">
              {repository.description}
            </div>
          </div>

          <div className="d-flex f6">
            {repository.language && (
              <Fragment>
                <span
                  className="repo-language-color ml-0 mr-1"
                  style={{ backgroundColor: colors[repository.language] }}
                ></span>
                <span className="mr-3" itemProp="programmingLanguage">
                  {repository.language}
                </span>
              </Fragment>
            )}

            {stargazers}

            {forks}
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCard;
