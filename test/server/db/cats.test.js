const catsDb = require('../../../server/db/catsDb')

const getDbConnection = () => {
  jest.mock('../../../server/db/connection', () => {
    const config = require('../../knexfile').test
    const connection = require('knex')(config)
  return connection
  })
}

beforeAll(() => {
  return getDbConnection()
})

test('import is working', () => {
  expect(true).toBeTruthy()
})

// test('getCats returns cats', () => {
//   return 
// })

