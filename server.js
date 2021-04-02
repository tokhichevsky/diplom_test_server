const Server = require("./src/Server");

const server = new Server(
  5000,
  ["http://localhost:3000", "http://185.231.245.238", "http://experiment.meowmur.com"]
);

server.start();
