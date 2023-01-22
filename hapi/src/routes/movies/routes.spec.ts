import Hapi from '@hapi/hapi'
import {makeChance} from '../../lib/chance'
import routes from './routes'

const chance = makeChance()
const server = Hapi.server()


beforeAll(() => {
  server.route(routes)
})

beforeEach(() => { /* EMPTY */ })

afterEach(() => { jest.resetAllMocks() })
afterAll(() => { jest.restoreAllMocks() })


describe('route GET /', () => {
  const method = 'GET'
  const url = '/'

  it('exists', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual('from GET /')
  })
})

describe('route POST /', () => {
  const method = 'POST'
  const url = '/'

  it('exists', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual('from POST /')
  })
})

describe('route GET /{id}', () => {
  const id = chance.guid()
  const method = 'GET'
  const url = `/${id}`

  it('exists', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual('from GET /{id}')
  })
})

describe('route PUT /{id}', () => {
  const id = chance.guid()
  const method = 'PUT'
  const url = `/${id}`

  it('exists', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual('from PUT /{id}')
  })
})

describe('route DELETE /{id}', () => {
  const id = chance.guid()
  const method = 'DELETE'
  const url = `/${id}`

  it('exists', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual('from DELETE /{id}')
  })
})

describe('route GET /search', () => {
  const method = 'GET'
  const url = '/search'

  it('exists', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual('from GET /search')
  })
})
