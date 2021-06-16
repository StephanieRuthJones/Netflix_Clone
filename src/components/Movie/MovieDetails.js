import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '../../static/images/add.svg';
import PlayIcon from '../../static/images/play-button.svg';
import MinusIcon from '../../static/images/minus.svg'

import { addMovie, removeMovie } from '../../store/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listIncludesMovie } from '../../store/utils/movieListUtils'

function MovieDetails({ movie, addMovie, removeMovie, movieList }) {
  const runtime = movie.runtime || movie.episode_run_time;
  const displayRuntime = runtime ? ` Runtime: ${runtime}m` : null;
  const isInList = listIncludesMovie(movie, movieList)
  return (
    <div className="modal__container">
      <h1 className="modal__title">{movie.title || movie.name}</h1>
      <p className="modal__info">
        <span className="modal__rating">
          Rating: {movie.vote_average * 10}%{' '}
        </span>
        Release date: {movie.release_date || movie.first_air_date}
        {displayRuntime}
      </p>
      <p className="modal__episode">
        {movie.number_of_episodes
          ? ' Episodes: ' + movie.number_of_episodes
          : ''}
        {movie.number_of_seasons ? ' Seasons: ' + movie.number_of_seasons : ''}
      </p>
      <p className="modal__overview">{movie.overview}</p>
      <button className="modal__btn modal__btn--red">
        <PlayIcon className="modal__btn--icon" />
        Play
      </button>
      {isInList
        ? (<button className="modal__btn" onClick={() => removeMovie(movie)}>
          <MinusIcon className="modal__btn--icon" />
          My List
        </button>)
        : (<button className="modal__btn" onClick={() => addMovie(movie)}>
          <AddIcon className="modal__btn--icon" />
          My List
        </button>)}
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    runtime: PropTypes.string,
    episode_run_time: PropTypes.string,
    number_of_episodes: PropTypes.number,
    number_of_seasons: PropTypes.number,
    overview: PropTypes.string,
  }),
  addMovie: PropTypes.func,
  removeMovie: PropTypes.func,
  // TODO: UPdate type:
  movieList: PropTypes.array
};
const mapStateToProps = (state) => {
  return { movieList: state.movieList }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addMovie,
      removeMovie,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
