const request = require('supertest')
const server = require('../../../server/routes/catsRoute')

const getDbConnection = () => {
  jest.mock('../../../server/routes/connection', () => {
    const config = require('../../knexfile').test
    const connection = require('knex')(config)
  return connection
  })
}

test('getRoutes', () => {

})