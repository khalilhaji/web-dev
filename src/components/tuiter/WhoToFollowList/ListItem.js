import React from "react";

const ListItem = ({
  who = {
    avatarIcon: "../../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <li class="list-group-item" xmlns="http://www.w3.org/1999/html">
      <div class="row align-items-center">
        <div class="col-2">
          <img
            src={who.avatarIcon}
            style={{ borderRadius: "50%" }}
            class="img-fluid img"
            alt="foo"
          />
        </div>
        <div class="col-6">
          {who.userName}
          <br />@{who.handle}
        </div>
        <button class="btn btn-primary rounded-pill col-4">Follow</button>
      </div>
    </li>
  );
};

export default ListItem;
