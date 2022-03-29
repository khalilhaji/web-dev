import React from "react";

import posts from "./posts.json";
import SummaryItem from "./SummaryItem.js";

const PostSummaryList = () => {
  return (
    <ul className="list-group">
      {posts.map((item) => (
        <SummaryItem post={item} />
      ))}
    </ul>
  );
};

export default PostSummaryList;
