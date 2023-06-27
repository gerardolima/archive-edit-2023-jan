import hapi from '@hapi/hapi'
import z from 'zod'
import {echo} from './service'


/**
 * @handle `GET /`
 */
const getDefault = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/',
  handler: req => echo({
    headers: req.headers,
    method: req.method,
    params: req.params,
    path: req.path,
    payload: req.payload,
    url: req.url,
    state: req.state,
  }),
})


/**
 * @handle `GET /from-path/{name}/{age}`
 */
const getByPath = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/from-path/{name}/{age}',
  options: {
    validate: {
      params: (v: unknown) => NameAndAge.parseAsync(v),
    },
  },
  handler: (req: hapi.ServerRoute & {params: NameAndAge}) => echo({
    name: req.params.name,
    age: req.params.age,
  }),
})


/**
 * @handle `GET /from-query`
 */
const getByQuery = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/from-query',
  options: {
    validate: {
      query: (v: unknown) => NameAndAge.parseAsync(v),
    },
  },
  handler: (req: hapi.ServerRoute & {query: NameAndAge}) => echo({
    name: req.query.name,
    age: req.query.age,
  }),
})

/**
 * @handle `GET /from-headers`
 */
const getByHeader = Object.freeze<hapi.ServerRoute>({
  method: 'GET',
  path: '/from-headers',
  options: {
    validate: {
      headers: (v: unknown) => NameAndAge.parseAsync(v),
    },
  },
  handler: (req: hapi.ServerRoute & {headers: NameAndAge}) => echo({
    name: req.headers.name,
    age: req.headers.age,
  }),
})

/**
 * @handle `POST /from-payload`
 */
const getByPayload = Object.freeze<hapi.ServerRoute>({
  method: 'POST',
  path: '/from-payload',
  options: {
    validate: {
      payload: (v: unknown) => NameAndAge.parseAsync(v),
    },
  },
  handler: (req: hapi.ServerRoute & {payload: NameAndAge}) => echo({
    name: req.payload.name,
    age: req.payload.age,
  }),
})


/** Zod schema to validate one object with name and age */
const NameAndAge = z.object({
  name: z.string().regex(/^[a-zA-Z ]+$/u),
  age: z.preprocess(v => Math.floor(Number(v)), z.number().min(1).max(99)),
})
type NameAndAge = z.infer<typeof NameAndAge>


/**
 * Routes of the plugin `validated`
 */
export default [
  getDefault,
  getByPath,
  getByQuery,
  getByHeader,
  getByPayload,
]
