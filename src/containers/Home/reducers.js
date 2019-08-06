import { GET_MOVIES } from './actions'

const initialState = {
  movies: {},
};

function homeReducer(state = initialState, action){
  switch (action.type) {
    case GET_MOVIES:
      state.movies = action.movies;
      return {...state}
    default:
      return state;
  }
}

export default homeReducer;
