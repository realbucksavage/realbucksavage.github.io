import React, { Component, Fragment } from "react";

export class MastHead extends Component {
  render() {
    let metadata_styles = "d-flex flex-items-center mb-3";

    return (
      <div class="flex-self-stretch border-md-right border-gray-light bg-whitecol-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6">
        <img
          src="{{ user.avatar_url }}"
          class="circle mb-3"
          style={{ maxWidth: "150px" }}
        />
      </div>
    );
  }
}

export default MastHead;
