import reducer from '../../../client/reducers/cats'

test('Initial Cats State', () => {
  const actual = reducer(undefined, {})
  expect(actual).toEqual([])
})
