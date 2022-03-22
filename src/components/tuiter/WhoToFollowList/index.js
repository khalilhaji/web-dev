import React from "react";
import who from "./who.json";
import ListItem from "./ListItem.js";

const WhoToFollowList = () => {
  return (
    <ul className="list-group">
      {who.map((item) => (
        <ListItem who={item} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
