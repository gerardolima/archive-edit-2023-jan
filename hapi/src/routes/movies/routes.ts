import hapi from '@hapi/hapi'
import {
  Movie,
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
const getAllMovies = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/',
  handler: (req, _h) => {
    // get data from request
    const {mongo} = req
    const offset = Number(req.query['offset']) ?? 0
    const limit = Number(req.query['limit']) ?? 20

    // call handler (request-agnostic)
    return getAll(mongo, offset, limit)
  },
})

/**
 * Add a new movie to the database
 * @handle `POST /`
 */
const postMovie = Object.freeze<hapi.ServerRoute>({
  method: 'POST',
  path: '/',
  options: {
    validate: {
      payload: (v: unknown) => Movie.parseAsync(v),
    },
  },
  handler: async (req: hapi.Request<{Payload: Movie}>, h) => { // eslint-disable-line @typescript-eslint/naming-convention
    // get data from request
    const {mongo} = req
    const movie = req.payload

    // call handler (request-agnostic)
    const res = await create(mongo, movie)
    return h.response(res)
      .code(201)
      .header('location', `${req.url}/${res.insertedId}`)

    // refer to https://www.rfc-editor.org/rfc/rfc9110.html#name-location
  },
})

/**
 * Get one movie
 * @handle `GET /{id}`
 */
const getOneMovie = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/{id}',
  handler: (req, _h) => {
    // get data from request
    const {mongo} = req
    const {id} = req.params

    // call handler (request-agnostic)
    return getOne(mongo, id)
  },
})

/**
 * Replace a movie
 * @handle `PUT /{id}`
 */
const putMovie = Object.freeze<hapi.ServerRoute>({
  method: 'PUT',
  path: '/{id}',
  options: {
    validate: {
      payload: (v: unknown) => Movie.parseAsync(v),
    },
  },
  handler: (req: hapi.Request<{Payload: Movie}>, _h) => { // eslint-disable-line @typescript-eslint/naming-convention

    // get data from request
    const {mongo} = req
    const {id} = req.params
    const movie = req.payload

    // call handler (request-agnostic)
    return update(mongo, id, movie)
  },
})

/**
 * Delete a movie from the database
 * @handle `DELETE /{id}`
 */
const deleteMovie = Object.freeze<hapi.ServerRoute>({
  method: 'DELETE',
  path: '/{id}',
  handler: (req, _h) => {
    // get data from request
    const {mongo} = req
    const {id} = req.params

    // call handler (request-agnostic)
    return remove(mongo, id)
  },
})

/**
 * Get all movies
 * @handle `GET /search`
 */
const getSearch = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/search',
  handler: (req, _h) => {
    // get data from request
    const {mongo} = req
    const {term} = req.query

    // call handler (request-agnostic)
    return search(mongo, term)
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
