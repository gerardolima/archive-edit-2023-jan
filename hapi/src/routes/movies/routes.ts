import type {ServerRoute} from '@hapi/hapi'


/**
 * Get all movies
 * @handle `GET /`
 */
const getAllMovies = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/',
  handler: _req => 'from GET /',
})

/**
 * Add a new movie to the database
 * @handle `POST /`
 */
const postMovie = Object.freeze<ServerRoute>({
  method: 'POST',
  path: '/',
  handler: _req => 'from POST /',
})

/**
 * Get one movie
 * @handle `GET /{id}`
 */
const getOneMovie = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/{id}',
  handler: _req => 'from GET /{id}',
})

/**
 * Replace a movie
 * @handle `PUT /{id}`
 */
const putMovie = Object.freeze<ServerRoute>({
  method: 'PUT',
  path: '/{id}',
  handler: _req => 'from PUT /{id}',
})

/**
 * Delete a movie from the database
 * @handle `DELETE /{id}`
 */
const deleteMovie = Object.freeze<ServerRoute>({
  method: 'DELETE',
  path: '/{id}',
  handler: _req => 'from DELETE /{id}',
})

/**
 * Get all movies
 * @handle `GET /search`
 */
const getSearch = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/search',
  handler: _req => 'from GET /search',
})


/**
 * Routes of the plugin `hello`
 */
export default [
  getAllMovies,
  postMovie,
  getOneMovie,
  putMovie,
  deleteMovie,
  getSearch,
]
