import React, { Component } from "react";

export class InterestCard extends Component {
  render() {
    const { topic } = this.props;

    let topicImageComponent = topic.image_url ? (
      <img
        src={topic.image_url}
        width="64"
        height="64"
        className="mx-auto rounded-1 mb-3"
        alt={topic.name}
      ></img>
    ) : (
      <div
        className="bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3"
        style={{
          width: 64,
          height: 64,
          lineHeight: 64
        }}
      >
        #
      </div>
    );

    let topicDescriptionComponent = topic.description ? (
      <p className="f5 text-gray text-center mb-0 mt-1">{topic.description}</p>
    ) : (
      ""
    );

    let topicComponent = topic.web_url ? (
      <a
        href={topic.web_url}
        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5"
      >
        {topicImageComponent}

        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">
          {topic.name}
        </p>

        {topicDescriptionComponent}
      </a>
    ) : (
      <div className="github-component position-relative height-full text-center border border-gray-light rounded-1 bg-white p-5">
        {topicImageComponent}

        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">
          {topic.name}
        </p>

        {topicDescriptionComponent}
      </div>
    );

    return (
      <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
        {topicComponent}
      </div>
    );
  }
}

export default InterestCard;
