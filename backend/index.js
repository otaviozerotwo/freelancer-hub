const express = require('express');
const cors = require('cors');
const conn = require('./db/conn');
const routes = require('./routes/router');

const server = express();
server.use(cors());
server.use(express.json());

conn();

server.use('/api', routes);

server.listen(3000, () => {
  console.log('listening on port 3000!');
});