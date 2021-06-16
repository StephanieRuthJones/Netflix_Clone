import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMovie, removeMovie } from '../store/actions/index';


import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';
import MinusLogo from '../static/images/minus.svg'

function Header({ movie, movieList, addMovie, removeMovie }) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundPosition: 'center',
  };

  const listIncludesMovie = movieList.includes(movie)
  return (
    <header style={backgroundStyle} className="header">
      <div className="header__container">
        <h1 className="header__container-heading">{movie.name}</h1>
        <button
          onClick={() => alert('not a movie!')}
          className="header__container-btnPlay"
        >
          <PlayLogo className="header__container-btnMyList-play" />
          <span className="header__container-btnMyList-add-text">Play</span>
        </button>
        {listIncludesMovie
          ? (<button
            className="header__container-btnMyList"
            onClick={() => removeMovie(movie.id)}
          >
            <MinusLogo className="header__container-btnMyList-add" />
            <span className="header__container-btnMyList-add-text">My List</span>
          </button>)
          : (<button
            className="header__container-btnMyList"
            onClick={() => addMovie(movie)}
          >
            <AddLogo className="header__container-btnMyList-add" />
            <span className="header__container-btnMyList-add-text">My List</span>
          </button>)
        }
        <p className="header__container-overview">{movie.overview}</p>
      </div>
      <div className="header--fadeBottom"></div>
    </header>
  );
}
Header.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    overview: PropTypes.string,
    backdrop_path: PropTypes.string,
  }).isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
