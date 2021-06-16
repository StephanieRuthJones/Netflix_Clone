import { ADD_MOVIE, REMOVE_MOVIE } from '../actions';

export default (movieList = [], action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...movieList, action.payload];
    case REMOVE_MOVIE:
      return movieList.filter(movie => movie.id !== action.payload.id);
    default:
      return movieList;
  }
};
