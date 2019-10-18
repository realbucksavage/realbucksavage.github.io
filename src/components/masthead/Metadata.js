import React, { Component } from "react";
import { MarkGithubIcon, LocationIcon } from "react-octicons";

export class Metadata extends Component {
  render() {
    let metadata_styles = "d-flex flex-items-center mb-3";
    let octicon_styles = "mr-2 v-align-middle rbs-h20";
    let user = this.props.user;

    return (
      <div className="f4 mb-6">
        {user.name && (
          <div className={metadata_styles}>
            <MarkGithubIcon className={octicon_styles} />
            <a href={`https://github.com/${user.login}`}>@{user.login}</a>
          </div>
        )}

        {user.location && (
          <div className={metadata_styles}>
            <LocationIcon className={octicon_styles} />
            {user.location}
          </div>
        )}
      </div>
    );
  }
}

export default Metadata;
