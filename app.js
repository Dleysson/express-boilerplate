// modules
const express = require('express');

// helpers
const pathHelper = require('./app/helpers/pathHelper')

// routes
const webRouter = require(pathHelper.routes('web.routes'));
const apiRouter = require(pathHelper.routes('api.routes'));

const app = express();

app.use(webRouter);
app.use('/api', apiRouter);

app.listen(3000);