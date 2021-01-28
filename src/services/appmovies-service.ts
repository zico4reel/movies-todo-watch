import movies_interface from "./service-interface";
const ascending = "ascending";

class AppMoviesService implements movies_interface {
  dispatch: any;
  items_per_page: number = 10;
  constructor(dispatch: any) {
    this.dispatch = dispatch;
  }
  search = (search_text: String) => {};
  load = () => {};
  load_watched = (
    page: number = 1,
    order_by: String = "date",
    order_method?: String
  ) => {
    let movies: Array<Object> =
      JSON.parse(localStorage.getItem("watched_movies")) | [];
    switch (order_by) {
      case "date":
        break;
      case "name":
        if (order_method === ascending) {
          movies.sort(function (current, next) {
            return current;
          });
        }
        break;
      default:
        break;
    }
  };
  load_unwatched = () => {};
  save_watched = () => {};
  save_unwatched = () => {};
}

export default AppMoviesService;
