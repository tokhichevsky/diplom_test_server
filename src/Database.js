const Datastore = require("nedb");
const settings = require("../settings");

class Database {
  #users;

  #functions;

  constructor() {
    this.#users = new Datastore({filename: settings.getPath("/db/users"), autoload: true});
    this.#functions = new Datastore({filename: settings.getPath("/db/functions"), autoload: true});

    this.#functions.getAutoId = function (onFind) {
      this.update(
        {_id: "__autoid__"},
        {$inc: {seq: 1}},
        {upsert: true, returnUpdatedDocs: true},
        function (err, affected, autoid) {
          onFind && onFind(err, autoid.seq);
        }
      );
      return this;
    };
  }

  registerUser(data) {
    // age: "23"
    // first_name: "Антон"
    // job: "Программист"
    // last_name: "Тарасов"
    // music_education_years: "0"
    // music_instrument: ""
    // music_listening_frequency: "более 3 часов в день"
    // noise_level: "очень шумно"
    // patronymic: "Алексеевич"
    // sex: "Мужской"
    // visiting_concerts_frequency: "5 и более раз в месяц"
    return new Promise(((resolve) => {
      this.#functions.getAutoId(async (err, id) => {
        this.#users.insert({_id: id, ...data});
        resolve({id});
      });
    }));
  }

  getPartialUpdateObject(data) {
    const result = {};

    for (const key of Object.keys(data)) {
      let fullKey = key;

      if (typeof data[key] === "object" && data[key] !== null) {
        const nextObjectLevel = this.getPartialUpdateObject(data[key]);

        for (const nextKey of Object.keys(nextObjectLevel)) {
          result[`${key}.${nextKey}`] = nextObjectLevel[nextKey]
        }
      } else if (data[key] !== undefined) {
        result[key] = data[key];
      }
    }

    return result;
  }

  setUserExperimentData({id, poll, test}) {
    this.#users.update({_id: id}, {$set: {poll, test}}, {multi: true, upset: true});
  }

  updateUserExperimentData({id, poll, test}) {
    this.#users.update({_id: Number(id)}, {$set: this.getPartialUpdateObject({poll, test})}, {multi: true, upset: true});
  }

  getAllData() {
    return new Promise(resolve => this.#users.find({}, {}, (err, data) => resolve(data)));
  }
}

module.exports = Database;
