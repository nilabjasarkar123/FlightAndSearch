const express = require("express");
// require('dotenv').config()
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
