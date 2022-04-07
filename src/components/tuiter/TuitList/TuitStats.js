import React from "react";
import { useDispatch } from "react-redux";
import { updateTuit } from "../actions/tuit-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeClickHandler = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    <div className="row mt-2">
      <div className="col">
        <i className="far fa-comment me-2"></i>
        {tuit.stats.comments}
      </div>
      <div className="col">
        <i className="fas fa-retweet me-2"></i>
        {tuit.stats.retuits}
      </div>
      <div
        className="col"
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            stats: {
              ...tuit.stats,
              likes: tuit.stats.likes + (tuit.liked ? -1 : 1),
            },
            liked: !tuit.liked,
          })
        }
      >
        {tuit.liked && (
          <i
            className="fas fa-heart me-2"
            style={{ color: tuit.liked ? "red" : "white" }}
          ></i>
        )}
        {!tuit.liked && <i className="far fa-heart me-2"></i>}
        {tuit.stats.likes}
      </div>

      <div
        className="col"
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            stats: {
              ...tuit.stats,
              dislikes: tuit.stats.dislikes + (tuit.disliked ? -1 : 1),
            },
            disliked: !tuit.disliked,
          })
        }
      >
        {tuit.disliked && (
          <i
            className="fas fa-thumbs-down me-2"
            style={{ color: tuit.disliked ? "red" : "white" }}
          ></i>
        )}
        {!tuit.disliked && <i className="far fa-thumbs-down me-2"></i>}
        {tuit.stats.dislikes}
      </div>
      <div className="col">
        <i className="fas fa-external-link-alt me-2"></i>
      </div>
    </div>
  );
};

export default TuitStats;
