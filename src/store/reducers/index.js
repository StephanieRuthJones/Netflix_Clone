import { combineReducers } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import storage from 'redux-persist/lib/storage'
import TrendingReducer from './trending';
import NetflixOriginalsReducer from './netflixOriginals';
import TopRatedReducer from './topRated';
import ActionMoviesReducer from './actionMovies';
import ComedyMoviesReducer from './comedyMovies';
import HorrorMoviesReducer from './horrorMovies';
import RomanceMoviesReducer from './romanceMovies';
import DocumentaryReducer from './documentary';
import movieListReducer from './movieList';

export const rootReducer = combineReducers({
  trending: TrendingReducer,
  netflixOriginals: NetflixOriginalsReducer,
  topRated: TopRatedReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer,
  movieList: movieListReducer,
});

