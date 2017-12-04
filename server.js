const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CORS = require('cors');
const server = express();

const port = process.env.PORT || 3030;

const routes = require ('./api/routes/routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/brewhouse', { useMongoClient: true });

server.use(bodyParser.json());
server.use(CORS());

routes(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});