import { ADD_MOVIE, REMOVE_MOVIE } from '../actions';

export default (movieIdList = [], action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...movieIdList, action.payload];
    case REMOVE_MOVIE:
      return movieIdList.filter((movieId) => movieId !== action.payload);
    default:
      return movieIdList;
  }
};
