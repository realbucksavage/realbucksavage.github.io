import React, { Component } from "react";
import Projects from "./Projects";
import conf from "../configuration";
import Interests from "./Interests";

export class Content extends Component {
  render() {
    return (
      <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light">
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <Projects />

          {conf.interests.enabled && <Interests />}
        </div>
      </div>
    );
  }
}

export default Content;
