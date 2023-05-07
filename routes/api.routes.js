// modules
const express = require('express');

// helpers
const pathHelper = require('../app/helpers/pathHelper')

// controllers
const apiController = require(pathHelper.apiControllers('apiController.js'));

const apiRouter = express.Router();

apiRouter.get('/', apiController.index);

module.exports = apiRouter;