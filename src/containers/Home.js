import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainContent from './MainContent';
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';
import { addMovie, removeMovie } from '../store/actions/index';

class Home extends Component {
  state = {
    /** Toggles the modal when a movie is clicked. */
    toggleModal: false,
    /** Holds the movie information for a single movie. */
    movieOverview: {},
  };

  /* Get the appropriate details for a specific movie that was clicked */
  selectMovieHandler = async (movie) => {
    this.setState({ toggleModal: true });
    await this.setState({ movieOverview: movie });
  };

  closeModal = () => {
    this.setState({ toggleModal: false });
  };

  handleRemoveMovieFromList = (movieId) => {
    if(this.props.movieIdList.includes(movieId)){
      this.props.removeMovie(movieId)
    }
  }
  render() {
    console.log('this.props in HOme.js', this.props);
    return (
      <>
        <div className="main-content">
          <MainContent
            selectMovieHandler={this.selectMovieHandler}
            handleAddMovieToList={this.handleAddMovieToList}
          />
        </div>
        <Modal
          show={this.state.toggleModal}
          modalClosed={this.closeModal}
          movie={this.state.movieOverview}
        >
          <MovieDetails movie={this.state.movieOverview} />
        </Modal>
      </>
    );
  }
}

Home.propTypes = {
  addMovie: PropTypes.func,
  // TODO: UPDATE TYPE
  movieIdList: PropTypes.array,
};

const mapStateToProps = (state) => {
  console.log('state', state)
  return { movieIdList: state.myListReducer };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      removeMovie,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
