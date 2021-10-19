require('dotenv').config();
const express = require('express');

const errorHandler = require('./middleware/errorHandler');

const routes = require('./routes');
const connectToDB = require('./utils/db');

const app = express();

app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

connectToDB();

app.listen(5000, () => {
  console.log('server listen on port 5000');
});