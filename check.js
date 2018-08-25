const Database = require('better-sqlite3')
const db = new Database('data.db')

db.prepare('CREATE TABLE IF NOT EXISTS data (value UNIQUE NOT NULL)').run()

function exists (value) {
  const row = db.prepare('SELECT COUNT(*) AS count FROM data WHERE value=?').get(value)
  return row.count > 0
}

function add (value) {
  db.prepare('INSERT INTO data (value) VALUES (?)').run(value)
}

function remove (value) {
  db.prepare('DELETE FROM data WHERE value=?').run(value)
}

function list () {
  return db.prepare('SELECT value FROM data').all().map(row => row.value)
}

function count () {
  return db.prepare('SELECT COUNT(*) AS count FROM data').get().count
}

function reset () {
  return db.prepare('DELETE FROM data').run()
}


module.exports = { exists, add, remove, list, count, reset }