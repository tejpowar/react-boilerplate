
require('babel-core/register');
require('babel-polyfill');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT ? process.env.PORT : 8181;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.info('Express is listening on port %s.', port);
});
