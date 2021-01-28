import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_API_MOVIES":
      break;
    case "LIST_APP_MOVIES_UNWATCHED":
      break;
    case "LIST_APP_MOVIES_WATCHED":
      break;
    default:
      return state;
      break;
  }
  return state;
}

const [state, dispatch] = useReducer(reducer, {
  moviedb: {},
  appmovies: {
    watched: [],
    unwatched: []
  },
  theme: "light"
});
