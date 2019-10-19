import React, { Component, Fragment } from "react";
import InterestCard from "./InterestCard";
import conf from "../configuration";

export class Interests extends Component {
  render() {
    var interests = [];
    for (var i = 0; i < conf.interests.topics.length; i++) {
      interests.push(<InterestCard key={i} topic={conf.interests.topics[i]} />);
    }

    return (
      <Fragment>
        <h2>My Interests</h2>
        <p className="f4 mb-4 text-gray">
          Topics that I want to learn more about.
        </p>

        <div className="d-flex flex-wrap gutter-condensed mb-4">
          {interests}
        </div>
      </Fragment>
    );
  }
}

export default Interests;
