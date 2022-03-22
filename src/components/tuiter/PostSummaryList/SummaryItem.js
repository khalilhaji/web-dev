import React from "react";

const SummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  const topic = post.topic ? (
    <>
      <span style={{ color: "gray" }}>{post.topic}</span>
      <br />
    </>
  ) : (
    <></>
  );
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          {topic}
          <strong>{post.userName}</strong>{" "}
          <i className="fas fa-check-circle"></i> - {post.time}
          <br />
          <strong>{post.title}</strong>
        </div>
        <div className="col-2">
          <img
            src={post.image}
            className="img-fluid"
            style={{ height: "100%", width: "100%" }}
            alt="foo"
          />
        </div>
      </div>
    </li>
  );
};

export default SummaryItem;
