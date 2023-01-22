import Hapi from '@hapi/hapi'
import {makeChance} from '../../lib/chance'
import routes from './routes'
import * as service from './service'

const chance = makeChance()
const server = Hapi.server()

const fakeGetAll = chance.string()
const fakeGetOne = chance.string()
const fakePostOne = chance.string()
const fakePutOne = chance.string()
const fakeDeleteOne = chance.string()
const fakeSearch = chance.string()

const stubs: Record<string, jest.SpyInstance | jest.Mock> = {}
beforeAll(() => {
  server.route(routes)

  stubs['getAll'] = jest.spyOn(service, 'getAll')
  stubs['getOne'] = jest.spyOn(service, 'getOne')
  stubs['create'] = jest.spyOn(service, 'create')
  stubs['update'] = jest.spyOn(service, 'update')
  stubs['remove'] = jest.spyOn(service, 'remove')
  stubs['search'] = jest.spyOn(service, 'search')
})

beforeEach(() => {
  stubs['getAll'].mockResolvedValue(fakeGetAll)
  stubs['getOne'].mockResolvedValue(fakeGetOne)
  stubs['create'].mockResolvedValue(fakePostOne)
  stubs['update'].mockResolvedValue(fakePutOne)
  stubs['remove'].mockResolvedValue(fakeDeleteOne)
  stubs['search'].mockResolvedValue(fakeSearch)
})

afterEach(() => { jest.resetAllMocks() })
afterAll(() => { jest.restoreAllMocks() })


describe('route GET /', () => {
  const method = 'GET'
  const url = '/'

  it('exists and calls expected handler', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual(fakeGetAll)
  })
})

describe('route POST /', () => {
  const method = 'POST'
  const url = '/'

  it('exists and calls expected handler', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual(fakePostOne)
  })
})

describe('route GET /{id}', () => {
  const id = chance.guid()
  const method = 'GET'
  const url = `/${id}`

  it('exists and calls expected handler', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual(fakeGetOne)
  })
})

describe('route PUT /{id}', () => {
  const id = chance.guid()
  const method = 'PUT'
  const url = `/${id}`

  it('exists and calls expected handler', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual(fakePutOne)
  })
})

describe('route DELETE /{id}', () => {
  const id = chance.guid()
  const method = 'DELETE'
  const url = `/${id}`

  it('exists and calls expected handler', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual(fakeDeleteOne)
  })
})

describe('route GET /search', () => {
  const method = 'GET'
  const url = '/search'

  it('exists and calls expected handler', async () => {
    const res = await server.inject({method, url})

    expect(res.statusCode).toEqual(200)
    expect(res.result).toEqual(fakeSearch)
  })
})
