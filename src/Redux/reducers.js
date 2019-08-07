import { GET_MOVIES, GET_MOVIE, SEARCH } from './actions'

const initialState = {
  movies: {},
  movie: {},
  search: {}
};

function homeReducer(state = initialState, action){
  switch (action.type) {
    case GET_MOVIES:
      state.movies = action.movies;
      return {...state}
    case GET_MOVIE:
      state.movie = action.movie;
      return {...state}
    case SEARCH:
      console.log('reducer', action);
    default:
      return state;
  }
}

export default homeReducer;
