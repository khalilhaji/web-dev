import React from "react";
import ListItem from "./ListItem.js";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
    <ul className="list-group">
      {who.map((item) => (
        <ListItem key={item.userName} who={item} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
