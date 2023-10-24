const express = require("express");
const app = express();
const port = 3000;
const connection = require("./config/connection");
const routes = require('./routes');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(routes);

connection.once("open", () => {
  app.listen(port, () => {
    console.log(`Application is listening on ${port}`);
  });
});
