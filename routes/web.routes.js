// modules
const express = require('express');

// helpers
const pathHelper = require('../app/helpers/pathHelper')

// controllers
const webController = require(pathHelper.webControllers('webController.js'));

const webRouter = express.Router();

// routes
webRouter.get('/', webController.index)

module.exports = webRouter;