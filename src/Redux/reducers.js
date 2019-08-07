import { GET_MOVIES, GET_MOVIE } from './actions'

const initialState = {
  movies: {},
  movie: {}
};

function homeReducer(state = initialState, action){
  switch (action.type) {
    case GET_MOVIES:
      state.movies = action.movies;
      return {...state}
    case GET_MOVIE:
      state.movie = action.movie;
      return {...state}
    default:
      return state;
  }
}

export default homeReducer;
