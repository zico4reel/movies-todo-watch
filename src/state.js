import React, { useReducer } from "react";
import { AppMoviesService, MoviedbService } from "./services";
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
function InitStore() {
  const [state, dispatch] = useReducer(reducer, {
    moviedb: [],
    appmovies: {
      watched: [],
      unwatched: []
    },
    theme: "light"
  });

  let store = React.createContext({
    services: {
      appmovies_service: new AppMoviesService(dispatch),
      moviedb_service: new MoviedbService(dispatch)
    },
    state,
    dispatch
  });
  return store;
}
export default InitStore;
