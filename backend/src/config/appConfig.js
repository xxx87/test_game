const appConfig = {
  port: process.env.PORT || 3001
};

const dbConfig = {
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/notes-app-local-1"
};

const logConfig = {
  level: process.env.LOG_LEVEL || "debug"
};

module.exports = {
  appConfig,
  dbConfig,
  logConfig
};
