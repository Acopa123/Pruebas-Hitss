export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE = 'GET_MOVIE'

export function getMovies(movies) {
  return { type: 'GET_MOVIES', movies }
}

export function getMovie(movie) {
  return { type: 'GET_MOVIE', movie }
}
