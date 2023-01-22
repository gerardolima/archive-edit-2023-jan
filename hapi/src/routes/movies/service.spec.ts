import {
  getAll,
  getOne,
  postOne,
  putOne,
  deleteOne,
  search,
} from './service'


describe('getAll', () => {
  it('implement tests', async () => {
    const res = await getAll()
    expect(res).toEqual('from getAll')
  })
})

describe('getOne', () => {
  it('implement tests', async () => {
    const res = await getOne()
    expect(res).toEqual('from getOne')
  })
})

describe('postOne', () => {
  it('implement tests', async () => {
    const res = await postOne()
    expect(res).toEqual('from postOne')
  })
})

describe('putOne', () => {
  it('implement tests', async () => {
    const res = await putOne()
    expect(res).toEqual('from putOne')
  })
})

describe('deleteOne', () => {
  it('implement tests', async () => {
    const res = await deleteOne()
    expect(res).toEqual('from deleteOne')
  })
})

describe('search', () => {
  it('implement tests', async () => {
    const res = await search()
    expect(res).toEqual('from search')
  })
})

