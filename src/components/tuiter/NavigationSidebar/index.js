import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <a className="list-group-item" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-home"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Home</span>
        </a>
        <a
          className={`list-group-item
        ${active === "home" ? "active" : ""}`}
          href="/"
        >
          <i className="fa fa-hashtag"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Explore</span>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-bell"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Notifications</span>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-envelope"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Messages</span>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-bookmark"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Bookmarks</span>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-list"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Lists</span>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-user"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">Profile</span>
        </a>
        <a className="list-group-item" href="/">
          <i className="fa fa-circle"></i>{" "}
          <span className="d-none d-xl-inline d-xxl-inline">More</span>
        </a>
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
