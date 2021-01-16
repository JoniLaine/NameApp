const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const fs = require('fs')
const nameRouter = require('./nameRouter')

app.use(cors());
app.use(express.static('build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/name', nameRouter);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

module.exports = app


