const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//history added so webapp works when refreshing pages or "previous" is used
const history = require('connect-history-api-fallback');
app.use(history());

//file reader for names.json
const fs = require('fs')

//router path
const nameRouter = require('./nameRouter')

//Cross-Origin Resource Sharing to allow requests between fron-end and back-end
app.use(cors());
//build for creating "build" of front-end
app.use(express.static('build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/name', nameRouter);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

module.exports = app


