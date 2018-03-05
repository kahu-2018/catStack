const connection = require('./connection')

const getCats = (testDb) => {
  const db = testDb || connection
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
}

const getCatById = (id, testDb) => {
  const db = testDb || connection
  return db('cats')
    .join('characteristics', 'cats.characteristic_id', 'characteristics.characteristic_id')
    .where('cats.id', id)
}

const insertCat = (cat, testDb) => {
  const db = testDb || connection
  return db('cats').insert(cat)
    .then(cat_id => getCatById(cat_id[0], db))
}

const deleteCat = (id, testDb) => {
  const db = testDb || connection
  return db('cats')('cats')
    .where('id', id)
    .del()
}

const editCat = (id, newCat, testDb) => {
  const db = testDb || connection
  return db('cats')('cats')
    .where('id', id)
    .update(newCat)
    .then(() => getCatById(id, db))
}

module.exports = {
  getCats,
  insertCat,
  deleteCat,
  editCat
}
