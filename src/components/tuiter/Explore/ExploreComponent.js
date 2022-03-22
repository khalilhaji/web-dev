import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            className="form-group form-input rounded-pill"
            style={{ width: "100%", fontFamily: "Arial, FontAwesome" }}
            placeholder="&#xf002; Search Tuiter"
          />
        </div>
        <div className="col-2">
          <i
            className="fa fa-cog fa-2x float-end"
            style={{ color: "#299fd6" }}
          ></i>
        </div>
      </div>
      <ul className="nav mb-2 nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#/">
            For You
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Entertainment
          </a>
        </li>
      </ul>
      <div className="card">
        <img
          src="images/ship.jpeg"
          className="img-fluid card-img"
          style={{ width: "100%" }}
          alt="foo"
        />
        <div className="card-img-overlay">
          <h2 style={{ color: "white", bottom: 0, position: "absolute" }}>
            SpaceX's Starship
          </h2>
        </div>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
