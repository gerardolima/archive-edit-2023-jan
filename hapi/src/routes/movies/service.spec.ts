import {
  getAll,
  getOne,
  create,
  update,
  remove,
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

describe('create', () => {
  it('implement tests', async () => {
    const res = await create()
    expect(res).toEqual('from create')
  })
})

describe('update', () => {
  it('implement tests', async () => {
    const res = await update()
    expect(res).toEqual('from update')
  })
})

describe('remove', () => {
  it('implement tests', async () => {
    const res = await remove()
    expect(res).toEqual('from remove')
  })
})

describe('search', () => {
  it('implement tests', async () => {
    const res = await search()
    expect(res).toEqual('from search')
  })
})

