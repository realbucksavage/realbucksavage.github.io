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

          <h2>My Thoughts</h2>
          <p className="f4 mb-4 text-gray">Articles I've written.</p>
          <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
            <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
              <div className="height-full text-left border border-gray-light bg-white rounded-1 p-3">
                <div className="d-flex flex-justify-between flex-items-start mb-1">
                  <h1 className="f4 lh-condensed mb-1">
                    <a href="/2019/03/09/nodemcu">
                      Getting started with NodeMCU and MicroPython
                    </a>
                  </h1>
                </div>
                <div className="text-gray mb-2 ws-normal">Mar 09, 2019</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
