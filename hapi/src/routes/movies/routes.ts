import type {ServerRoute} from '@hapi/hapi'
import {
  getAll,
  getOne,
  create,
  update,
  remove,
  search,
} from './service'


/**
 * Get all movies
 * @handle `GET /`
 */
const getAllMovies = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/',
  handler: async (_req, _h) => {
    const res = await Promise.resolve(getAll())
    return res
  },
})

/**
 * Add a new movie to the database
 * @handle `POST /`
 */
const postMovie = Object.freeze<ServerRoute>({
  method: 'POST',
  path: '/',
  handler: async (_req, _h) => {
    const res = await Promise.resolve(create())
    return res
  },
})

/**
 * Get one movie
 * @handle `GET /{id}`
 */
const getOneMovie = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/{id}',
  handler: async (_req, _h) => {
    const res = await Promise.resolve(getOne())
    return res
  },
})

/**
 * Replace a movie
 * @handle `PUT /{id}`
 */
const putMovie = Object.freeze<ServerRoute>({
  method: 'PUT',
  path: '/{id}',
  handler: async (_req, _h) => {
    const res = await Promise.resolve(update())
    return res
  },
})

/**
 * Delete a movie from the database
 * @handle `DELETE /{id}`
 */
const deleteMovie = Object.freeze<ServerRoute>({
  method: 'DELETE',
  path: '/{id}',
  handler: async (_req, _h) => {
    const res = await Promise.resolve(remove())
    return res
  },
})

/**
 * Get all movies
 * @handle `GET /search`
 */
const getSearch = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/search',
  handler: async (_req, _h) => {
    const res = await Promise.resolve(search())
    return res
  },
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
