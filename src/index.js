const express = require("express");
const { PORT } = require("./config/serverConfig.js"); // -> PORT
// const app = express(); // express object
const setupAndStartServer = async () => {
  // create express object
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};
setupAndStartServer();
