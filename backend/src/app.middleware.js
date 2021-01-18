const cors = require("cors");
const bodyParser = require("body-parser");

const setMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
};

module.exports = {
  setMiddleware
};
