import MongoDB from 'mongodb'
import type {ServerRoute, Request} from '@hapi/hapi'
import {
  Movie,
  getAll,
  getOne,
  create,
  update,
  remove,
  search,
} from './service'
import { Payload } from '@hapi/boom'


/**
 * Get all movies
 * @handle `GET /`
 */
const getAllMovies = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/',
  handler: (req, _h) => {
    // get data from request
    const mongo = req.mongo
    const offset = Number(req.query['offset']) || 0
    const limit = Number(req.query['limit']) || 20

    // call handler (request-agnostic)
    return getAll(mongo, offset, limit)
  },
})

/**
 * Add a new movie to the database
 * @handle `POST /`
 */
const postMovie = Object.freeze<ServerRoute>({
  method: 'POST',
  path: '/',
  options: {
    validate: {
      payload: (v: unknown) => Movie.parseAsync(v),
    },
  },
  handler: async (req: Request<{Payload: Movie}>, h) => {
    // get data from request
    const mongo = req.mongo
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
const getOneMovie = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/{id}',
  handler: async (req, _h) => {
    // get data from request
    const mongo = req.mongo
    const id = req.params.id

    // call handler (request-agnostic)
    return getOne(mongo, id)
  },
})

/**
 * Replace a movie
 * @handle `PUT /{id}`
 */
const putMovie = Object.freeze<ServerRoute>({
  method: 'PUT',
  path: '/{id}',
  options: {
    validate: {
      payload: (v: unknown) => Movie.parseAsync(v),
    },
  },
  handler: async (req: Request<{Payload: Movie}>, h) => {
    // get data from request
    const mongo = req.mongo
    const id = req.params.id
    const movie = req.payload

    // call handler (request-agnostic)
    return update(mongo, id, movie)
  },
})

/**
 * Delete a movie from the database
 * @handle `DELETE /{id}`
 */
const deleteMovie = Object.freeze<ServerRoute>({
  method: 'DELETE',
  path: '/{id}',
  handler: async (req, _h) => {
    // get data from request
    const mongo = req.mongo
    const id = req.params.id

    // call handler (request-agnostic)
    return remove(mongo, id)
  },
})

/**
 * Get all movies
 * @handle `GET /search`
 */
const getSearch = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/search',
  handler: async (req, _h) => {
    // get data from request
    const mongo = req.mongo
    const query = req.query.term

    // call handler (request-agnostic)
    return search(mongo, query)
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
