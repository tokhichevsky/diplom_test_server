const Datastore = require("nedb");

class Database {
  #datastore;

  constructor() {
    this.#datastore = new Datastore({filename: "db"});
    this.#datastore.loadDatabase();
  }

  add(data) {
    this.#datastore.insert(data)
  }
}

module.exports = Database;
