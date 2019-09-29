import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div class="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light">
        <div class="mx-auto" style={{ maxWidth: "900px" }}>
          <div class="f4 mb-6">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Content;
