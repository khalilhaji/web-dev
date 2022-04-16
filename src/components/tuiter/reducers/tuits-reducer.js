import {
  CREATE_TUIT,
  DELETE_TUIT,
  FIND_ALL_TUITS,
  UPDATE_TUIT,
} from "../actions/tuit-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case CREATE_TUIT:
      return [...state, action.newTuit];
    case UPDATE_TUIT:
      return state.map((tuit) =>
        tuit._id === action.tuit._id ? action.tuit : tuit
      );
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.likes--;
          } else {
            tuit.liked = true;
            tuit.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    case "delete-tuit":
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case "create-tuit":
      const newTuit = {
        tuit: action.tuit,
        _id: new Date().getTime() + "",
        postedBy: {
          username: "ReactJS",
        },
        likes: 0,
        dislikes: 0,
        liked: false,
        disliked: false,
      };
      return [newTuit, ...state];
    default:
      return state;
  }
};

export default tuitsReducer;
