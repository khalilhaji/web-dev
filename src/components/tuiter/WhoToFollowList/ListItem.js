import React from "react";

const ListItem = ({
  who = {
    avatarIcon: "../../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <li className="list-group-item" xmlns="http://www.w3.org/1999/html">
      <div className="row align-items-center">
        <div className="col-2">
          <img
            src={who.avatarIcon}
            style={{ borderRadius: "50%" }}
            className="img-fluid img"
            alt="foo"
          />
        </div>
        <div className="col-6">
          {who.userName}
          <br />@{who.handle}
        </div>
        <button className="btn btn-primary rounded-pill col-4">Follow</button>
      </div>
    </li>
  );
};

export default ListItem;
