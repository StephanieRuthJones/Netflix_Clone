import { ADD_MOVIE, REMOVE_MOVIE } from '../actions';

const addMovie = (movieList, action) => {
  const movieIds = movieList.map(movie => movie.id)
  if (!movieIds.includes(action.payload.id)) {
    return [...movieList, action.payload]
  }
}
const removeMovie = (movieList, action) => {
  const movieIds = movieList.map(movie => movie.id)
  if (movieIds.includes(action.payload.id)) {
    return movieList.filter(movie => movie.id !== action.payload.id)
  }
}
export default (movieList = [], action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return addMovie(movieList, action)
    case REMOVE_MOVIE:
      return removeMovie(movieList, action)
    default:
      return movieList;
  }
};
