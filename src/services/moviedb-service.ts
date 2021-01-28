import movies_interface from "./service-interface";
class MoviedbService implements movies_interface {
  dispatch: any;
  constructor(dispatch: any) {
    this.dispatch = dispatch;
  }
  search = (search_text: String) => {};
  save = (movie: Object) => {};
}

export default MoviedbService;
