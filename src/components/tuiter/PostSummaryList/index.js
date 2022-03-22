import React from "react";

import posts from "./posts.json";
import SummaryItem from "./SummaryItem.js";

const PostSummaryList = () => {
  return (
    <ul class="list-group">
      {posts.map((item) => (
        <SummaryItem post={item} />
      ))}
    </ul>
  );
};

export default PostSummaryList;
