const express = require("express");
// const config = require("config");
const cors = require("cors");
const Database = require("./Database");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const bodyParser = require("body-parser");
const settings = require("../settings");
const fs = require("fs");
const {getRows} = require("./Server.model");
const {CSVHeaders} = require("./Server.model");


class Server {
  /**
   * @type {Express}
   */
  #server;

  /**
   * @type {Database}
   */
  #database;

  constructor(port, allowedOrigins) {
    this.port = port;
    this.initServer(allowedOrigins);
    this.initRoutes();
    this.#database = new Database();

    const options = {
      folderPath: settings.getPath("/logs/"),
      dateBasedFileNaming: false,
      fileName: "All_Logs.log",
      dateFormat: "YYYY_MM_D",
      timeFormat: "h:mm:ss A",
    };

    this.logger = require("node-file-logger");
    this.logger.SetUserOptions(options);

  }

  initServer(allowedOrigins) {
    this.#server = express();
    this.#server.use(bodyParser.json());
    this.#server.use(bodyParser.urlencoded({extended: true}));
    // this.#server.use(function (req, res, next) {
    //   const err = new Error("Not Found");
    //   err.status = 404;
    //   next(err);
    // });
    this.#server.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    });

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
    const filePath = settings.getPath("/experiment.csv");
    this.#server.get("/api/", (request, response) => {
      response.send("??????????????");
    });

    this.#server.get("/api/experiment.csv", (request, response) => {
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }

        const csvWriter = createCsvWriter({
          path: filePath,
          header: CSVHeaders
        });
        this.#database.getAllData().then(data => {
          const records = getRows(data);
          csvWriter.writeRecords(records)       // returns a promise
            .then(() => {
              response.setHeader("Content-disposition", "attachment; filename=experiment.csv");
              response.setHeader("Content-type", "text/csv");
              response.download(filePath);
            });
        });
      } catch (error) {
        console.error(error)
        response.sendStatus(500);
      }
    });

    this.#server.post("/api/user/register/", (request, response) => {
      const {first_name, last_name, patronymic} = request.body;
      console.log(first_name, last_name, patronymic);
      this.#database.registerUser(request.body).then((answer) => response.send(answer));
    });

    this.#server.post("/api/user/experiment/", (request, response) => {
      this.#database.setUserExperimentData(request.body);
      response.sendStatus(200);
    });

    this.#server.patch("/api/user/experiment", (request, response) => {
      this.#database.updateUserExperimentData(request.body);
      response.sendStatus(200);
    })

    this.#server.post("/api/log/", (request, response) => {
      this.logger.Info(request.body.text);
      console.log(request.body.text);
      response.sendStatus(200);
    });
  }

  start() {
    console.log(settings.getPath("/"));
    this.#server.listen(this.port, () => console.log(`Server has been started on port ${this.port}. + pg2`));
  }
}

module.exports = Server;

