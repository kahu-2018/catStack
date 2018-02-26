const env = require('../test-environment')
const catsDb = require('../../../server/db/catsDb')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('read cats db', () => {
  return catsDb.getCats(testDb)
    .then(cats => {
      expect(cats.length).toBe(3)
      expect(cats[0].hasOwnProperty('name')).toBeTruthy()
    })
})
