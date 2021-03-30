const express = require("express");
// const config = require("config");
const cors = require("cors");
const Database = require("./Database");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;


class Server {
  /**
   * @type {Express}
   */
  #server;

  /**
   * @type {Database}
   */
  #database;

  /**
   * @type {CsvWriter}
   */
  #csvWriter;

  constructor(port, allowedOrigins) {
    this.port = port;
    this.initServer(allowedOrigins);
    this.initRoutes();
    this.#database = new Database();
    this.#csvWriter = createCsvWriter({
      path: "experiment.csv",
      header: [
        {id: "name", title: "NAME"},
        {id: "lang", title: "LANGUAGE"}
      ]
    });
  }

  initServer(allowedOrigins) {
    this.#server = express();

    if (allowedOrigins) {
      this.#server.use(cors({
        origin: function (origin, callback) {
          if (!origin) return callback(null, true);
          if (allowedOrigins.indexOf(origin) === -1) {
            const msg = "The CORS policy for this site does not " +
              "allow access from the specified Origin.";
            return callback(new Error(msg), false);
          }
          return callback(null, true);
        }
      }));
    }
  }

  initRoutes() {
    this.#server.get("/api", (request, response) => {
      response.send("Туточки");
    });

    this.#server.get("/experiment.csv", (request, response) => {
      const records = [
        {name: "Bob", lang: "French, English"},
        {name: "Mary", lang: "English"}
      ];

      this.#csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
          response.setHeader("Content-disposition", "attachment; filename=experiment.csv");
          response.setHeader("Content-type", "text/csv");
          response.download("experiment.csv");
        });
    });

    this.#server.post("/api/add", (request, response) => {
      console.log(request.body);
    });
  }

  start() {
    this.#server.listen(this.port, () => console.log(`Server has been started on port ${this.port}. + pg2`));
  }
}

module.exports = Server;

